import { FilePondFile } from 'filepond';
import { Dispatch, SetStateAction } from 'react';
import { Document, Paragraph, Packer, TextRun, convertInchesToTwip } from 'docx';
import { saveAs } from 'file-saver';
import { Transcript, TranscriptUtterance } from 'assemblyai';
import client from '../../assembly_ai/client';
import { Status } from "@/utils/types";

type SetStatus = Dispatch<SetStateAction<Status>>

export async function transcribe(audioFile: FilePondFile, setStatus: SetStatus) {
    try {
        setStatus({ status: 'Uploading', transcript: null });
        const buffer = await audioFile.file.arrayBuffer();
        const apiKey = process.env.NEXT_PUBLIC_ASSEMBLY_AI_API_KEY;
    
        if (!apiKey) {
            throw new Error("AssemblyAI's API key not found");
        }
    
        const uploadResponse = await fetch('https://api.assemblyai.com/v2/upload', {
            method: 'POST',
            headers: {
                'Authorization': apiKey,
                'Content-Type': 'application/octet-stream'
            },
            body: buffer
        });
    
        if (!uploadResponse.ok) {
            if (uploadResponse.status === 401) {
                throw new Error('Invalid API key. Kindly email me (umarsaeedalam@gmail.com) to request an API key update.');
            }

            const errorText = await uploadResponse.text();
            throw new Error(`Upload failed: ${errorText}`);
        }
    
        const uploadResult = await uploadResponse.json();
        setStatus({ status: 'Transcribing', transcript: null });

        const transcript = await client.transcripts.transcribe({
            audio: uploadResult.upload_url,
            speaker_labels: true
        });
        
        const updatedTranscript = addSpeakerPrefix(transcript);
        setStatus({ status: 'Done', transcript: updatedTranscript })
    } catch (error) {
        throw error
    }
}

export function formatTime(timeInMilliseconds: number) {
    const totalSeconds = Math.floor(timeInMilliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

export function formatAudioPlayerTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export function addSpeakerPrefix(transcript: Transcript) {
    if (!transcript.utterances) return transcript;

    const updatedTranscript = {
        ...transcript,
        utterances: transcript.utterances.map(utterance => ({
            ...utterance,
            speaker: utterance.speaker ? `Speaker ${utterance.speaker}` : utterance.speaker
        }))
    };

    return updatedTranscript;
}

export function updateSpeakerLabel(transcript: Transcript, oldLabel: string, newLabel: string ) {
    if (!transcript.utterances) return transcript;

    const updatedTranscript = {
        ...transcript,
        utterances: transcript.utterances.map(utterance => ({
            ...utterance,
            speaker: utterance.speaker === oldLabel ? newLabel : utterance.speaker
        }))
    };

    return updatedTranscript;
}

export async function exportTranscriptDoc(utterances: TranscriptUtterance[], documentName: string) {
    const CORAL = "FF6637";
    const GREY = "7E7E84";
    const DARK_GREY = "1A1A1E"; 

    const doc = new Document({
        sections: [
            {
                properties: {
                    page: {
                        margin: {
                            top: convertInchesToTwip(0.5),
                            right: convertInchesToTwip(0.5),
                            bottom: convertInchesToTwip(0.5),
                            left: convertInchesToTwip(0.5),
                        },
                    },
                },
                children: utterances.flatMap((utterance) => [
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: utterance.speaker,
                                bold: true,
                                size: 26,
                                color: CORAL,
                                noProof: true,
                            }),
                            new TextRun({
                                text: "  ",
                                bold: true,
                                noProof: true
                            }),
                            new TextRun({
                                text: `[${formatTime(utterance.start)}]`,
                                bold: true,
                                size: 24,
                                color: GREY,
                                noProof: true
                            }),
                        ],
                        spacing: {
                            line: 360,
                            lineRule: "auto",
                            after: 0,
                        },
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: utterance.text,
                                size: 24,
                                color: DARK_GREY,
                                noProof: true,
                            }),
                        ],
                        spacing: {
                            line: 360,
                            lineRule: "auto",
                            after: 280,
                        },
                    }),
                ]),
            },
        ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, `${documentName}.docx`);
}