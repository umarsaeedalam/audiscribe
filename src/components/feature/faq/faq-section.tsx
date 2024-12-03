function FAQSection() {
    return (
        <section className="flex items-center justify-center mt-14 max-[1000px]:mt-12 max-[700px]:mt-10 mb-18 max-[1000px]:mb-16 max-[700px]:mb-14 px-10 max-[1000px]:px-8 max-[700px]:px-6">
            <div className="max-w-xl flex flex-col gap-14 max-[1000px]:gap-12 max-[700px]:gap-10">
                <div className="flex flex-col gap-5 max-[1000px]:gap-4">
                    <h2 className="text-center text-8xl max-[1000px]:text-7xl max-[700px]:hidden font-semibold">Frequently Asked Questions</h2>

                    <h2 className="text-center text-6xl font-semibold min-[700px]:hidden">FAQs</h2>

                    <p className="text-center text-17 max-[1000px]:text-base max-[700px]:hidden text-secondary-400">
                        Get answers to common questions about this project. If you need additional help, feel free to reach out.
                    </p>
                </div>
                
                <div className="flex flex-col gap-8 max-[1000px]:gap-7 max-[700px]:gap-6">
                    {/* Basic Usage Question */}
                    <div className="flex flex-col gap-3 max-[1000px]:gap-2">
                        <h2 className="text-accent-600 font-semibold text-lg max-[1000px]:text-md max-[700px]:text-17">Q) Is this service really free? Are there any hidden costs?</h2>

                        <p className="text-17 max-[1000px]:text-base max-[700px]:text-15">
                            Yes, it&apos;s completely free! This is a personal project created to give back to the community. There are no hidden costs, no memberships, and no premium tiers. All features are available to everyone without any restrictions.
                        </p>
                    </div>

                    {/* File Types */}
                    <div className="flex flex-col gap-3 max-[1000px]:gap-2">
                        <h2 className="text-accent-600 font-semibold text-lg max-[1000px]:text-md max-[700px]:text-17">Q) What audio and video file types are supported?</h2>

                        <p className="text-17 max-[1000px]:text-base max-[700px]:text-15">
                            The transcription feature supports a wide range of audio formats, including .mp3, .mpeg, .wav, .aac, .m4a, and .flac, ensuring compatibility with most commonly used audio files. For video files, supported formats include .mp4, .mov (QuickTime), .webm, and .avi.
                        </p>
                    </div>

                    {/* File Size */}
                    <div className="flex flex-col gap-3 max-[1000px]:gap-2">
                        <h2 className="text-accent-600 font-semibold text-lg max-[1000px]:text-md max-[700px]:text-17">Q) What&apos;s the maximum file size limit?</h2>

                        <p className="text-17 max-[1000px]:text-base max-[700px]:text-15">
                            The maximum file size limit up to 50MB in size. If your file is larger, consider compressing it or splitting it into smaller segments. For most spoken audio content, 50MB provides plenty of room while maintaining good quality.
                        </p>
                    </div>

                    {/* Duration Limit */}
                    <div className="flex flex-col gap-3 max-[1000px]:gap-2">
                        <h2 className="text-accent-600 font-semibold text-lg max-[1000px]:text-md max-[700px]:text-17">Q) How long can my audio/video file be?</h2>

                        <p className="text-17 max-[1000px]:text-base max-[700px]:text-15">
                            The transcription feature can process files up to 10 hours in duration. This should be sufficient for most use cases, including long interviews, podcasts, or lectures. Remember that the file size limit of 50MB still applies, so longer recordings might need to be compressed appropriately.
                        </p>
                    </div>

                    {/* Processing Time */}
                    <div className="flex flex-col gap-3 max-[1000px]:gap-2">
                        <h2 className="text-accent-600 font-semibold text-lg max-[1000px]:text-md max-[700px]:text-17">Q) How long does the transcription process take?</h2>

                        <p className="text-17 max-[1000px]:text-base max-[700px]:text-15">
                            Transcription is surprisingly fast! Most files are processed in under 45 seconds. To give you an idea: a one-hour recording typically takes about 35 seconds to transcribe, while a three-hour file might take around 2-3 minutes. The exact time depends on the file length and complexity, but the process is optimized to be as quick as possible without compromising accuracy.
                        </p>
                    </div>

                    {/* Added: Important Additional Question */}
                    <div className="flex flex-col gap-3 max-[1000px]:gap-2">
                        <h2 className="text-accent-600 font-semibold text-lg max-[1000px]:text-md max-[700px]:text-17">Q) What happens to my files after transcription?</h2>

                        <p className="text-17 max-[1000px]:text-base max-[700px]:text-15">
                            Your privacy is important. All uploaded files are automatically deleted after processing. This website doesn&apos;t store any audio or video files beyond the transcription process, and the generated transcripts are only available for immediate download. No data is retained on our servers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQSection;