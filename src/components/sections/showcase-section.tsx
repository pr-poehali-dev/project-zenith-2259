import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

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

const previewImages = showcaseImages.slice(0, 4)

export function ShowcaseSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + showcaseImages.length) % showcaseImages.length))
  const next = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % showcaseImages.length))

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev()
    if (e.key === "ArrowRight") next()
    if (e.key === "Escape") closeLightbox()
  }

  return (
    <section className="bg-background px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Галерея
        </motion.p>

        {/* 2x2 grid preview */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-2xl">
          {previewImages.map((src, i) => (
            <motion.button
              key={i}
              onClick={() => openLightbox(i)}
              className="relative rounded-lg overflow-hidden aspect-square group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              data-clickable
            >
              <img
                src={src}
                alt={`Проект ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* На последней ячейке показываем счётчик */}
              {i === 3 && (
                <div className="absolute inset-0 flex items-center justify-center"
                  style={{ background: "rgba(0,0,0,0.55)" }}>
                  <span className="font-serif text-2xl text-white">+{showcaseImages.length - 3}</span>
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/90 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onKeyDown={handleKey}
              tabIndex={0}
            >
              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-colors hover:bg-white/10"
                data-clickable
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Counter */}
              <span className="absolute top-5 left-1/2 -translate-x-1/2 text-sm text-white/50">
                {lightboxIndex + 1} / {showcaseImages.length}
              </span>

              {/* Prev */}
              <button
                onClick={(e) => { e.stopPropagation(); prev() }}
                className="absolute left-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                data-clickable
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              {/* Image */}
              <motion.img
                key={lightboxIndex}
                src={showcaseImages[lightboxIndex]}
                alt={`Проект ${lightboxIndex + 1}`}
                className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
              />

              {/* Next */}
              <button
                onClick={(e) => { e.stopPropagation(); next() }}
                className="absolute right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                data-clickable
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}