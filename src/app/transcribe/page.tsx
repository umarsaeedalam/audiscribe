'use client'

import { useState } from 'react';
import { FilePondFile } from 'filepond';
import { Status } from "@/utils/types";
import TranscriptPage from "@/components/feature/transcribe/transcript";
import UploadPage from '@/components/feature/transcribe/transcribe-page';
import UploadingSpinner from '@/components/ui/uploading-spinner';
import TranscribingSpinner from '@/components/ui/transcribing-spinner';

function TranscribePage() {
    const [files, setFiles] = useState<FilePondFile[]>([]);
    const [status, setStatus] = useState<Status>({ status: 'Idle', transcript: null })

    switch (status.status) {
        case 'Idle':
            return <UploadPage files={files} setFiles={setFiles} setStatus={setStatus} />;
        case 'Uploading':
            return <UploadingSpinner />;
        case 'Transcribing':
            return <TranscribingSpinner />
        case 'Done':
            return <TranscriptPage transcript={status.transcript} audioFile={files[0]} setFiles={setFiles} setStatus={setStatus} />         
    }
}

export default TranscribePage;