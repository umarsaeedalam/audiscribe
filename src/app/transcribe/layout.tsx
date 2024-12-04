import Footer from "@/components/layout/footer";
import type { Metadata } from "next";

type Props = {
    children: React.ReactNode; 
}

export const metadata: Metadata = {
    title: "Transcribe",
};

function TranscribeLayout({ children }: Props) {
    return (
        <div className="min-h-[calc(100dvh-88px)] max-[640px]:min-h-[calc(100dvh-70px)] flex flex-col justify-between">
            {children}
        </div>
    )
  }

export default TranscribeLayout