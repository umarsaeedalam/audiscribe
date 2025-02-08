'use client'

import MediaUpload from "@/components/feature/transcribe/media-upload";
import { FilePondFile } from 'filepond';
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from "react";
import { motion } from "motion/react";
import { transcribe } from '@/lib/functions';
import { Status } from "@/utils/types";
import { acceptedTypes } from "@/lib/data";
import LoadingSpinner from "../../ui/loading-spinner";
import Footer from "@/components/layout/footer";

type Props = {
    files: FilePondFile[];
    setFiles: Dispatch<SetStateAction<FilePondFile[]>>;
    setStatus: Dispatch<SetStateAction<Status>>;
}

const MAX_SIZE = 50 * 1024 * 1024;

function UploadPage({ files, setFiles, setStatus }: Props) {    
    const [mounted, setMounted] = useState(false)

    const diabled = !files[0] || !acceptedTypes.includes(files[0].fileType) || files[0].fileSize > MAX_SIZE;

    async function handleOnClick() {
        await transcribe(files[0], setStatus);
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <LoadingSpinner />
    }

    return(
            <section className="mt-14 max-[1000px]:mt-12 max-[700px]:mt-10 mb-18 max-[1000px]:mb-16 max-[700px]:mb-14 px-10 max-[1000px]:px-8 max-[700px]:px-6 flex flex-col justify-center items-center gap-14 max-[1000px]:gap-12 max-[700px]:gap-10 ">
                <div className="max-w-xl">
                    <div className="flex flex-col gap-5 max-[1000px]:gap-4">
                        <h2 className="text-center text-8xl max-[1000px]:text-7xl max-[700px]:hidden font-semibold tracking-tight">Upload Your Audio or Video</h2>

                        <h2 className="text-center text-6xl font-semibold min-[700px]:hidden">Upload File</h2>

                        <p className="text-center text-17 max-[1000px]:text-base max-[700px]:text-15 text-secondary-400">
                            Get accurate transcription with speaker labels and timestamps
                        </p>
                    </div>
                </div>
                
                <div className="max-w-xl w-full">
                    <MediaUpload 
                        files={files} 
                        setFiles={setFiles} 
                    />
                </div>
                
                <button disabled={diabled} className="py-[10px] max-[1000px]:py-2 px-5 max-[700px]:px-4 rounded-md -mt-6 text-md max-[1000px]:text-17 max-[700px]:text-base text-primary-50 bg-accent-600 hover:bg-accent-700 transition-all ease-in-out duration-200 transform active:scale-90 disabled:bg-secondary-200 disabled:cursor-not-allowed disabled:active:scale-100" onClick={handleOnClick}>Transcribe</button>
            </section>

    )
}

export default UploadPage;