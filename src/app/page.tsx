import { MotionProvider } from "@/components/portfolio/motion-provider";
import { DraftBanner, Nav } from "@/components/portfolio/nav";
import { Hero } from "@/components/portfolio/hero";
import { Marquee } from "@/components/portfolio/marquee";
import { ShortVersion, WhyBiochem } from "@/components/portfolio/story";
import { WhereFit } from "@/components/portfolio/where-fit";
import { SelectedWork } from "@/components/portfolio/selected-work";
import { Experience } from "@/components/portfolio/experience";
import { Toolbox } from "@/components/portfolio/toolbox";
import { LearningPath, BeyondLab } from "@/components/portfolio/learning-path";
import { Testimonials, HireMe } from "@/components/portfolio/closing";
import { Gallery, Contact } from "@/components/portfolio/gallery-contact";
import { Appendix, Footer } from "@/components/portfolio/appendix-footer";

export default function Home() {
  return (
    <MotionProvider>
      <div className="flex min-h-screen flex-col bg-paper text-ink">
        <DraftBanner />
        <Nav />
        <main className="flex-1">
          <Hero />
          <Marquee />
          <ShortVersion />
          <WhyBiochem />
          <WhereFit />
          <SelectedWork />
          <Experience />
          <Toolbox />
          <LearningPath />
          <BeyondLab />
          <Testimonials />
          <HireMe />
          <Gallery />
          <Contact />
          <Appendix />
        </main>
        <Footer />
      </div>
    </MotionProvider>
  );
}
