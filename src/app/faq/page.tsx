import FAQSection from "@/components/feature/faq/faq-section";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQs",
};


function FAQPage() {
    return (
        <>
            <FAQSection />
            <Footer />
        </>
    )
}

export default FAQPage;