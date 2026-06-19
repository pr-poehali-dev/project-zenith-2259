import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const showcaseImages = [
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/4c6ff495-affd-4b84-a280-aecd40241fb9.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/68337fba-a0d8-4ebf-ae2f-9d75b6e30b04.png",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/cc324f0e-2567-44f9-bb15-9cae4d0027c7.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/b96226f9-6ced-4c04-acb9-6675d9b22525.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/8a88340b-eabc-4a0d-9830-bd14b5fe80cd.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/38d34bac-4991-4a50-adc9-d3637c8f69ca.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/daf1acf6-f227-49a9-8b92-b214513f710b.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/27d29b60-4025-4be6-b081-21cabc84d007.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/7931fd4a-adb8-4e16-925d-51b31acf39c2.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/c10bf62c-942e-4476-ac93-d0a3aaa9fc13.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/07e3967f-32f1-4e64-90f9-ce443c930e17.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/46d949a6-68a1-4d9c-8475-40c10666b3de.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/1fde34a2-8c07-4459-a57a-f03d1bd64b15.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/a4cd4c4c-10c9-4095-ba75-4c79662239c7.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/44b710f6-b72b-4af1-8f5f-a99a3a3250a6.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/0aed2977-1c8f-411c-9d1f-b997806c8436.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/6dc81dfb-8843-491c-bfc3-e4bbbd71a93d.jpg",
  "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/c8f49c9c-0026-4167-ad1f-ead5e773c871.jpg",
]

const yOffsets = [100, 150, 80, 120, 90, 140, 100, 160, 70]

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y0 = useTransform(scrollYProgress, [0, 1], [yOffsets[0], -yOffsets[0]])
  const y1 = useTransform(scrollYProgress, [0, 1], [yOffsets[1], -yOffsets[1]])
  const y2 = useTransform(scrollYProgress, [0, 1], [yOffsets[2], -yOffsets[2]])
  const y3 = useTransform(scrollYProgress, [0, 1], [yOffsets[3], -yOffsets[3]])
  const y4 = useTransform(scrollYProgress, [0, 1], [yOffsets[4], -yOffsets[4]])
  const y5 = useTransform(scrollYProgress, [0, 1], [yOffsets[5], -yOffsets[5]])
  const y6 = useTransform(scrollYProgress, [0, 1], [yOffsets[6], -yOffsets[6]])
  const y7 = useTransform(scrollYProgress, [0, 1], [yOffsets[7], -yOffsets[7]])
  const y8 = useTransform(scrollYProgress, [0, 1], [yOffsets[8], -yOffsets[8]])

  const yValues = [y0, y1, y2, y3, y4, y5, y6, y7, y8, y0, y1, y2, y3, y4, y5, y6, y7, y8]

  return (
    <section ref={containerRef} className="bg-background px-6 py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Галерея
        </motion.p>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {showcaseImages.map((src, i) => (
            <motion.div
              key={i}
              className="relative break-inside-avoid rounded-lg overflow-hidden group"
              style={{ y: yValues[i % yValues.length] }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: (i % 3) * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              data-clickable
            >
              <motion.img
                src={src}
                alt={`Проект ${i + 1}`}
                className="w-full h-auto object-cover block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}