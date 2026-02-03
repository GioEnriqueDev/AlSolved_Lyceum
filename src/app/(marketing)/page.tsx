import { Hero } from "@/components/marketing/Hero";
import { ServicesShowcase } from "@/components/marketing/ServicesShowcase";
import { BookingWizard } from "@/components/marketing/BookingWizard";
import { LocationSection } from "@/components/marketing/LocationSection";

export default function HomePage() {
    return (
        <div className="bg-background">
            <Hero />
            <ServicesShowcase />
            <BookingWizard />
            <LocationSection />
        </div>
    );
}
