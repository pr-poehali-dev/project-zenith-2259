import { motion } from "framer-motion"

const portfolioItems = [
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/20f743f0-8d92-4737-bd63-20f9be046a60.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/748e5d63-2ce5-4591-8e64-491c64c5b8d6.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/bd4c5808-0647-4df7-ac66-1a4fed9038fe.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/27535b02-99aa-4837-943d-64917b6d1203.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/2dc7d36b-e04d-4d6b-be87-08ccdf842f0e.jpg",
]

export function CarouselSection() {
  // Duplicate for seamless loop
  const items = [...portfolioItems, ...portfolioItems]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Каждый проект — индивидуально под вас.
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-xl overflow-hidden shadow-2xl"
              data-clickable
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`Пример портфолио ${(i % portfolioItems.length) + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}