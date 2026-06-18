import { motion } from "framer-motion"

const portfolioItems = [
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/files/c23399bd-3478-463b-90c2-05fe25fb5254.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/files/3bba444a-7300-46e5-8f9d-73c4b3e9758f.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/files/e708978e-330c-4059-8f96-d013ddbd44c5.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/files/eac18823-9391-4ff7-bc6f-298a200432ba.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/files/5a402230-e90d-4628-9b51-91328ed781c1.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/files/10afd3c2-522d-4971-9b7e-c15c4ca87e92.jpg",
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