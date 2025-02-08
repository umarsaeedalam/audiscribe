import Footer from "@/components/layout/footer";
import NavBar from "@/components/layout/navbar";
import type { Metadata } from "next";

type Props = {
    children: React.ReactNode; 
}

export const metadata: Metadata = {
    title: "Transcribe",
};

function TranscribeLayout({ children }: Props) {
    return (
        <>
            <div className="min-h-[calc(100dvh-72px)] max-[1000px]:min-h-[calc(100dvh-66px)] flex flex-col justify-between">
                {children}
            </div>
        </>
    )
  }

export default TranscribeLayout