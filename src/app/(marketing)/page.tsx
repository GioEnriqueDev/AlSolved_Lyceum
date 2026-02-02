import { Hero } from "@/components/marketing/Hero";
import { ServicesShowcase } from "@/components/marketing/ServicesShowcase";
import { BookingWizard } from "@/components/marketing/BookingWizard";

export default function HomePage() {
    return (
        <div className="bg-slate-950">
            <Hero />
            <ServicesShowcase />
            <BookingWizard />
        </div>
    );
}
