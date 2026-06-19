import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { HeroSection } from "@/components/sections/hero-section"
import { ManifestoSection } from "@/components/sections/manifesto-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ShowcaseSection } from "@/components/sections/showcase-section"
import { CarouselSection } from "@/components/sections/carousel-section"
import { InsightsSection } from "@/components/sections/insights-section"
import { FooterSection } from "@/components/sections/footer-section"

const Index = () => {
  return (
    <LenisProvider>
      <main className="custom-cursor bg-background">
        <CustomCursor />
        <header className="w-full px-6 py-6" style={{ backgroundColor: "#1c1c1c" }}>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <img
              src="https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/a34c01b4-b90a-4e71-8ea5-9e4a35b8f365.jpg"
              alt="HotSteelGroup"
              className="w-32 h-32 md:w-44 md:h-44 object-cover flex-shrink-0"
            />
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-serif text-center md:text-left leading-tight"
              style={{
                color: "#FFAA6B",
                WebkitTextStroke: "2px black",
                paintOrder: "stroke fill",
              }}
            >
              Гриль-зоны <em className="italic">премиум</em>-класса от HotSteelGroup
            </h1>
          </div>
        </header>
        <HeroSection />
        <ManifestoSection />
        <FeaturesSection />
        <ShowcaseSection />
        <CarouselSection />
        <InsightsSection />
        <FooterSection />
      </main>
    </LenisProvider>
  )
}

export default Index