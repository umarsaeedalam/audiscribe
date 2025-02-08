import FAQSection from "@/components/feature/faq/faq-section";
import Footer from "@/components/layout/footer";
import NavBar from "@/components/layout/navbar";
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