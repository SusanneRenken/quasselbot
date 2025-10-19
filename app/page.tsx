import { Metadata } from "next";
import HeroSection from "../components/landing/hero-section";
import FeaturesSection from "../components/landing/features-section";
import LandingFooter from "../components/landing/footer";

export const metadata: Metadata = {
  title: "QuasselBot — Start",
  description:
    "QuasselBot – Unterhalte dich, lerne oder quassle einfach drauflos mit deinem smarten Chat-Buddy.",
};

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      <HeroSection />

      <div className="w-full max-w-6xl mx-auto px-6 py-16">
        <FeaturesSection />
      </div>

      <LandingFooter />
    </main>
  );
}
