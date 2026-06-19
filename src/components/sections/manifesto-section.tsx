import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const clipPath = useTransform(scrollYProgress, [0.2, 0.6], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] flex items-center justify-center bg-background px-6 py-32"
    >
      <div className="max-w-5xl mx-auto relative flex flex-col items-center gap-10">
        <div className="relative">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-center text-foreground/10">
            Это не просто гриль!
            <br />
            Это полноценная кухня.
          </h2>

          {/* Gradient mask reveal text */}
          <motion.h2
            className="absolute inset-0 text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-center bg-gradient-to-r from-orange-700 via-orange-400 to-orange-700 bg-clip-text text-transparent"
            style={{ clipPath }}
          >
            Это не просто гриль!
            <br />
            Это полноценная кухня.
          </motion.h2>
        </div>

        <motion.p
          className="text-base md:text-lg text-center max-w-2xl leading-relaxed"
          style={{ color: "rgba(255,255,255,0.45)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Удивите друзей и близких! Жарьте сочные стейки, готовьте плов и коптите рыбу — всё это в одной гриль-зоне, без лишнего и громоздкого оборудования.
        </motion.p>
      </div>
    </section>
  )
}