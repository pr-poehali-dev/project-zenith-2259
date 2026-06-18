import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function TypeTester() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prev) => (prev === 1 ? 1.5 : 1))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full">
      <motion.span
        className="font-serif text-5xl md:text-7xl text-foreground"
        animate={{ scale }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        🔥
      </motion.span>
    </div>
  )
}

function LayoutAnimation() {
  const [layout, setLayout] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLayout((prev) => (prev + 1) % 3)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const layouts = ["grid-cols-2 grid-rows-2", "grid-cols-3 grid-rows-1", "grid-cols-1 grid-rows-3"]

  return (
    <div className="h-full p-4 flex items-center justify-center">
      <motion.div className={`grid ${layouts[layout]} gap-2 w-full max-w-[140px]`} layout>
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="bg-primary/20 rounded-md min-h-[30px]"
            layout
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </motion.div>
    </div>
  )
}

function SpeedIndicator() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => setProgress(100), 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <span className="text-2xl md:text-3xl font-sans font-medium text-foreground text-center">🚚 Доставка</span>
      <span className="text-sm text-muted-foreground text-center">по всей России и СНГ</span>
      <div className="w-full max-w-[120px] h-1.5 bg-foreground/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Возможности
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Typography Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <TypeTester />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Премиум-материалы</h3>
              <p className="text-muted-foreground text-sm mt-1">Жаропрочная сталь 6 мм, столешни и дверки — керамогранит или натуральная древесина: лиственница, липа, дуб.</p>
            </div>
          </motion.div>

          {/* Layouts Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <LayoutAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Индивидуальный проект</h3>
              <p className="text-muted-foreground text-sm mt-1">Индивидуальный проект под Ваш участок, а также готовые решения для террасы и беседки.</p>
            </div>
          </motion.div>

          {/* Price Card */}
          <motion.div
            className="bg-primary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1 flex flex-col items-center justify-center gap-2">
              <span className="text-sm text-primary-foreground/70 uppercase tracking-widest">Стоимость</span>
              <span className="text-4xl md:text-5xl font-serif font-medium text-primary-foreground">от 80 000 ₽</span>
              <span className="text-primary-foreground/70 text-sm">за погонный метр</span>
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-primary-foreground">Цена</h3>
              <p className="text-primary-foreground/70 text-sm mt-1">Стоимость зависит от комплектации и материалов отделки.</p>
            </div>
          </motion.div>

          {/* Speed Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <SpeedIndicator />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Адресная доставка</h3>
              <p className="text-muted-foreground text-sm mt-1">Адресная доставка по всей России и СНГ.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}