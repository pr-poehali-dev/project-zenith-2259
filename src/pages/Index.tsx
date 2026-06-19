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
        <header className="w-full" style={{ backgroundColor: "#111110", borderBottom: "1px solid rgba(255,170,107,0.2)" }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 md:py-8 flex flex-col md:flex-row items-center gap-5 md:gap-10">
            <img
              src="https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/305313b3-fb41-493b-b5a3-9ff4e009e425.jpg"
              alt="HotSteelGroup"
              className="w-28 h-28 md:w-36 md:h-36 object-contain flex-shrink-0"
              style={{ mixBlendMode: "lighten" }}
            />
            <div className="flex flex-col gap-1 text-center md:text-left">
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "rgba(255,170,107,0.5)" }}>HotSteelGroup</span>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl leading-tight"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  color: "#FFAA6B",
                  letterSpacing: "0.03em",
                }}
              >
                Гриль-зоны <em className="italic">премиум</em>-класса
              </h1>
              <span className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em" }}>
                Индивидуальные проекты · Адресная доставка по России и СНГ
              </span>
            </div>
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