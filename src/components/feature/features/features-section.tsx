function FeaturesSection() {
    return (
        <section className='flex items-center justify-center mt-14 max-[1000px]:mt-12 max-[700px]:mt-10 mb-18 max-[1000px]:mb-16 max-[700px]:mb-14 px-10 max-[1000px]:px-8 max-[700px]:px-6'>
            <div className='max-w-xl flex flex-col gap-14 max-[1000px]:gap-12 max-[700px]:gap-10'>
                <div className='flex flex-col gap-5 max-[1000px]:gap-4 items-center justify-center'>
                    <h1 className='text-center text-8xl max-[1000px]:text-7xl max-[700px]:text-6xl font-semibold'>Features</h1>

                    <p className='text-center text-17 max-[1000px]:text-base max-[700px]:hidden text-secondary-400'>Discover how this project&apos;s enhanced transcription service brings professional features together with an intuitive experience. Each feature is designed to make your transcription workflow smoother and more efficient.</p>     
                </div>

                <div className='flex flex-col gap-10 max-[1000px]:gap-9 max-[700px]:gap-8'>
                    <div className='flex flex-col gap-8 max-[1000px]:gap-7 max-[700px]:gap-6'>
                        <h2 className='text-accent-600 text-22 max-[1000px]:text-xl max-[700px]:text-19 font-semibold'>1. Intelligent Speaker Recognition with Custom Labels</h2>

                        <div className='flex flex-col gap-6 max-[1000px]:gap-5 max-[700px]:gap-4 text-17 max-[1000px]:text-base max-[700px]:text-15'>
                            <p>The advanced speaker diarization system doesn&apos;t just identify different speakers – it lets you make the transcript your own. While the AI automatically detects and labels different speakers in your audio, you have the power to customize these labels to match your needs.</p>

                            <p>Whether you&apos;re transcribing an interview, podcast, or group discussion, you can easily rename generic &quot;Speaker A&quot; labels to actual names or roles. This feature is particularly valuable for:</p>
                                
                            <ul className='list-disc list-inside pl-10 max-[1000px]:pl-8 max-[700px]:pl-0'>
                                <li>Interview transcripts where you want to clearly identify interviewer and respondent</li>
                                <li>Meeting minutes where you need to track contributions from specific team members</li>
                                <li>Podcast episodes where you want to properly credit each host and guest</li>
                                <li>Focus group sessions where participant identification is crucial</li>
                            </ul>
                                
                            <p>The system maintains these custom labels throughout the document, ensuring consistent and professional formatting in your final transcript.</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-8 max-[1000px]:gap-7 max-[700px]:gap-6'>
                        <h2 className='text-accent-600 text-22 max-[1000px]:text-xl max-[700px]:text-19 font-semibold'>2. Interactive Time-Synced Navigation</h2>

                        <div className='flex flex-col gap-6 max-[1000px]:gap-5 max-[700px]:gap-4 text-17 max-[1000px]:text-base max-[700px]:text-15'>
                            <p>Experience seamless integration between your audio and transcript with the built-in advanced navigation system. Every word in your transcript is precisely time-synced with the original audio, creating an interactive document that brings new efficiency to your workflow.</p>

                            <p>This powerful feature enables you to:</p>
                            
                            <ul className='list-disc list-inside pl-10 max-[1000px]:pl-8 max-[700px]:pl-0'>
                                <li>Click any word to instantly jump to that exact moment in the audio</li>
                                <li>Easily verify accuracy by quickly checking specific portions</li>
                                <li>Navigate long recordings effortlessly</li>
                                <li>Share specific moments by referencing timestamp markers</li>
                            </ul>
                            
                            <p>Perfect for researchers verifying quotes, journalists fact-checking interviews, or anyone needing to quickly locate specific moments in their recordings. The interface is intuitive – simply click any portion of text, and the audio automatically jumps to that exact moment, making review and editing faster than ever.</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-8 max-[1000px]:gap-7 max-[700px]:gap-6'>
                        <h2 className='text-accent-600 text-22 max-[1000px]:text-xl max-[700px]:text-19 font-semibold'>3. Professional Document Export</h2>

                        <div className='flex flex-col gap-6 max-[1000px]:gap-5 max-[700px]:gap-4 text-17 max-[1000px]:text-base max-[700px]:text-15'>
                            <p>Transform your transcripts into polished, ready-to-use Word documents with the built-in export feature. Unlike basic text exports, our system generates professionally formatted documents that maintain all the crucial elements of your transcript.</p>

                            <p>Each exported document includes:</p>
                            
                            <ul className='list-disc list-inside pl-10 max-[1000px]:pl-8 max-[700px]:pl-0'>
                                <li>Clear speaker identification with your custom labels</li>
                                <li>Precise timestamps for easy reference</li>
                                <li>Professional formatting for improved readability</li>
                                <li>Proper paragraph breaks and spacing</li>
                                <li>Consistent styling throughout the document</li>
                            </ul>
                            
                            <p>The exported files are compatible with all major word processors and maintain their formatting integrity. Whether you&apos;re preparing interview transcripts for publication, creating meeting minutes, or documenting research interviews, the export feature ensures your transcripts are presentation-ready without requiring additional formatting work.</p>
                            
                            <p>Simply click export when you&apos;re satisfied with your transcript, and receive a perfectly formatted document that&apos;s ready for sharing, editing, or archiving.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection;