import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, X } from "lucide-react"

const articles = [
  {
    title: "Сочный стейк на угольном гриле: пошаговый рецепт",
    category: "Рецепт",
    image: "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/a24b30bb-703d-402b-a2c6-b4fc071e0a97.jpg",
    time: "30 минут",
    portions: "2 порции",
    ingredients: [
      "Стейк (рибай или стриплойн) — 2 шт. по 250 г",
      "Соль крупная — 1 ч.л.",
      "Чёрный перец молотый — 1 ч.л.",
      "Растительное масло — 2 ст.л.",
      "Чеснок — 2 зубчика",
      "Веточка розмарина — 1 шт. (по желанию)",
    ],
    steps: [
      "Достаньте мясо из холодильника за 30 минут до готовки — оно должно быть комнатной температуры.",
      "Разожгите угли и дождитесь, пока они покроются белым пеплом — это значит жар готов.",
      "Промокните стейки бумажным полотенцем, смажьте маслом и щедро посолите и поперчите с обеих сторон.",
      "Положите стейки на решётку над углями. Жарьте 3–4 минуты с каждой стороны, не трогая.",
      "Переверните один раз. Для средней прожарки (medium) общее время — около 8 минут.",
      "Снимите с огня и дайте отдохнуть 5 минут — так соки распределятся равномерно.",
      "Нарежьте поперёк волокон и подавайте. Приятного аппетита!",
    ],
    tip: "Не прижимайте стейк к решётке лопаткой — так вытекает сок и мясо становится сухим.",
  },
  {
    title: "Плов на живом огне: секреты приготовления в казане",
    category: "Рецепт",
    image: "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/cc324f0e-2567-44f9-bb15-9cae4d0027c7.jpg",
    time: "1,5 часа",
    portions: "6 порций",
    ingredients: [
      "Рис длиннозёрный — 500 г",
      "Баранина или говядина — 500 г",
      "Морковь — 3 шт.",
      "Лук — 2 шт.",
      "Чеснок — 1 головка",
      "Масло растительное — 100 мл",
      "Зира, куркума, барбарис — по 1 ч.л.",
      "Соль, перец — по вкусу",
    ],
    steps: [
      "Рис промойте 5–6 раз до прозрачной воды и замочите на 30 минут.",
      "Казан поставьте на огонь, разогрейте масло до лёгкого дымка.",
      "Обжарьте лук до золотистого цвета, добавьте нарезанное кубиками мясо — жарьте 10 минут.",
      "Добавьте морковь соломкой, обжаривайте ещё 10 минут, помешивая.",
      "Добавьте специи, перемешайте и залейте кипятком так, чтобы покрыло мясо. Тушите 20 минут.",
      "Выложите рис ровным слоем поверх мяса. Не перемешивайте! Воткните головку чеснока в центр.",
      "Залейте кипятком на 2 см выше риса. Накройте крышкой и готовьте на слабом огне 25 минут.",
      "Снимите с огня, дайте постоять под крышкой 10 минут — и перемешайте перед подачей.",
    ],
    tip: "Чем сильнее жар на этапе зирвака (мясо с морковью) — тем вкуснее получится плов.",
  },
  {
    title: "Копчёная рыба на угле: температура, время и маринад",
    category: "Рецепт",
    image: "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/4c6ff495-affd-4b84-a280-aecd40241fb9.jpg",
    time: "2 часа",
    portions: "4 порции",
    ingredients: [
      "Скумбрия или карп — 2 шт.",
      "Соль — 3 ст.л.",
      "Сахар — 1 ст.л.",
      "Лимон — 1 шт.",
      "Лавровый лист — 3 шт.",
      "Горсть щепы (ольха или яблоня) — для копчения",
    ],
    steps: [
      "Рыбу выпотрошите, промойте и промокните. Натрите смесью соли и сахара снаружи и внутри.",
      "Внутрь положите кружки лимона и лавровый лист. Оставьте мариноваться на 1 час.",
      "Щепу замочите в воде на 20 минут — она будет давать дым, а не гореть.",
      "Разожгите угли, дайте им прогореть до среднего жара. Насыпьте щепу прямо на угли.",
      "Рыбу выложите на решётку, закройте крышку гриля. Отверстия для вентиляции оставьте чуть открытыми.",
      "Коптите 40–50 минут при температуре около 100–120°C. Рыба готова, когда кожа стала золотистой.",
    ],
    tip: "Не открывайте крышку чаще раза в 15 минут — дым должен оставаться внутри.",
  },
  {
    title: "Рёбрышки BBQ на углях: как добиться карамельной корочки",
    category: "Рецепт",
    image: "https://cdn.poehali.dev/projects/0f38cad7-41f9-4580-b888-74ae2b70090e/bucket/5107913f-fd2b-4238-a148-f3fdabad3a7e.jpg",
    time: "2,5 часа",
    portions: "4 порции",
    ingredients: [
      "Свиные рёбра — 1,5 кг",
      "Кетчуп — 4 ст.л.",
      "Мёд — 2 ст.л.",
      "Соевый соус — 2 ст.л.",
      "Чеснок — 3 зубчика",
      "Паприка, соль, перец — по 1 ч.л.",
    ],
    steps: [
      "С рёбер снимите плёнку с внутренней стороны — подденьте ножом и потяните.",
      "Натрите рёбра смесью соли, перца и паприки. Оставьте на 30 минут.",
      "Смешайте кетчуп, мёд, соевый соус и выдавленный чеснок — это ваш BBQ-соус.",
      "Разожгите угли и сдвиньте их в одну сторону — рёбра будут готовиться на косвенном жаре.",
      "Положите рёбра на решётку подальше от углей, закройте крышку. Готовьте 1,5 часа при 150°C.",
      "За 20 минут до конца щедро смажьте рёбра BBQ-соусом и переложите поближе к углям.",
      "Переворачивайте каждые 5 минут, смазывая соусом — корочка станет блестящей и карамельной.",
    ],
    tip: "Если нет крышки — заверните рёбра в два слоя фольги на первые 1,5 часа, затем откройте и карамелизируйте над углями.",
  },
]

export function InsightsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section className="bg-background px-6 py-24" onMouseMove={handleMouseMove}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Статьи
        </motion.p>

        <div className="divide-y divide-border">
          {articles.map((article, i) => (
            <motion.button
              key={i}
              onClick={() => setOpenIndex(i)}
              className="group w-full flex items-center justify-between py-6 relative text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ paddingLeft: 16, paddingRight: 16 }}
              data-clickable
            >
              <div className="flex-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{article.category}</span>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mt-1 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <span className="text-xs text-muted-foreground mt-1 block">{article.time} · {article.portions}</span>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
            </motion.button>
          ))}
        </div>

        {/* Floating hover image */}
        <AnimatePresence>
          {hoveredIndex !== null && openIndex === null && (
            <motion.div
              className="fixed pointer-events-none z-50 w-[200px] md:w-[300px] rounded-lg overflow-hidden shadow-2xl hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePosition.x + 20,
                y: mousePosition.y - 100,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={articles[hoveredIndex].image}
                alt={articles[hoveredIndex].title}
                className="w-full h-auto"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {openIndex !== null && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenIndex(null)}
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
                style={{ backgroundColor: "#161614" }}
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
              >
                {/* Image */}
                <div className="relative h-48 md:h-64 overflow-hidden rounded-t-2xl">
                  <img
                    src={articles[openIndex].image}
                    alt={articles[openIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161614] to-transparent" />
                  <button
                    onClick={() => setOpenIndex(null)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                    style={{ background: "rgba(0,0,0,0.5)" }}
                    data-clickable
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Content */}
                <div className="px-6 pb-8 -mt-4">
                  <span className="text-xs uppercase tracking-widest" style={{ color: "#FFAA6B" }}>
                    {articles[openIndex].category} · {articles[openIndex].time} · {articles[openIndex].portions}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-2 mb-6 leading-snug">
                    {articles[openIndex].title}
                  </h2>

                  {/* Ingredients */}
                  <div className="mb-6">
                    <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Ингредиенты</h3>
                    <ul className="space-y-2">
                      {articles[openIndex].ingredients.map((ing, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#FFAA6B" }} />
                          {ing}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Steps */}
                  <div className="mb-6">
                    <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Приготовление</h3>
                    <ol className="space-y-3">
                      {articles[openIndex].steps.map((step, i) => (
                        <li key={i} className="flex gap-3 text-sm text-foreground/80">
                          <span className="font-serif text-lg leading-none flex-shrink-0 mt-0.5" style={{ color: "#FFAA6B" }}>
                            {i + 1}.
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Tip */}
                  <div className="rounded-xl p-4 text-sm" style={{ background: "rgba(255,170,107,0.08)", borderLeft: "3px solid #FFAA6B" }}>
                    <span className="font-medium" style={{ color: "#FFAA6B" }}>Совет: </span>
                    <span className="text-foreground/70">{articles[openIndex].tip}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
