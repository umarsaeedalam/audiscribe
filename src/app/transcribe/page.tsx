'use client'

import { useState, useEffect } from 'react';
import { FilePondFile } from 'filepond';
import { AnimatePresence, motion } from 'framer-motion';
import { Status } from "@/utils/types";
import TranscriptPage from "@/components/feature/transcribe/transcript";
import UploadPage from '@/components/feature/transcribe/transcribe-page';
import UploadingSpinner from '@/components/ui/uploading-spinner';
import TranscribingSpinner from '@/components/ui/transcribing-spinner';

const sectionVariants = {
    enter: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.2
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2
        }
    }
}

function TranscribePage() {
    const [files, setFiles] = useState<FilePondFile[]>([]);
    const [status, setStatus] = useState<Status>({ status: 'Idle', transcript: null })
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    return (
        <AnimatePresence mode='wait'>
            <motion.div key={status.status} variants={sectionVariants} initial={mounted && 'enter'} animate='visible' exit='exit'>
                {status.status === 'Idle' && <UploadPage files={files} setFiles={setFiles} setStatus={setStatus} />}
                {status.status === 'Uploading' && <UploadingSpinner />}
                {status.status === 'Transcribing' && <TranscribingSpinner />}
                {status.status === 'Done' && <TranscriptPage transcript={status.transcript} audioFile={files[0]} setFiles={setFiles} setStatus={setStatus} />}
            </motion.div>            
        </AnimatePresence>
    )
}

export default TranscribePage;