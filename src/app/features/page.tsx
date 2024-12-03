import FeaturesSection from "@/components/feature/features/features-section";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Features",
};

function PrivacyPage() {
    return (
        <>
            <FeaturesSection />
            <Footer />
        </>
    )
}

export default PrivacyPage;