import { motion } from "framer-motion"

const portfolioItems = [
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/4c6ff495-affd-4b84-a280-aecd40241fb9.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/a24b30bb-703d-402b-a2c6-b4fc071e0a97.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/5107913f-fd2b-4238-a148-f3fdabad3a7e.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/68337fba-a0d8-4ebf-ae2f-9d75b6e30b04.png",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/cc324f0e-2567-44f9-bb15-9cae4d0027c7.jpg",
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