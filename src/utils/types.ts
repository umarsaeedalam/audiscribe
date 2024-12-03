import { Transcript } from "assemblyai";

export type Status = { status: 'Idle'; transcript: null } 
    | { status: 'Uploading'; transcript: null }
    | { status: 'Transcribing'; transcript: null }
    | { status: 'Done'; transcript: Transcript } 