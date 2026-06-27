import { motion } from "framer-motion";
import { skillCategories, type SkillCategory } from "../data/portfolio";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Toolbox"
        title="Skills & Technologies"
        subtitle="The stack I reach for to ship reliable, polished products."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-5 sm:grid-cols-2"
      >
        {skillCategories.map((category) => (
          <CategoryCard key={category.title} category={category} />
        ))}
      </motion.div>
    </section>
  );
}

function CategoryCard({ category }: { category: SkillCategory }) {
  const { icon: Icon } = category;
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="rounded-2xl glass p-6 transition-shadow hover:shadow-xl hover:shadow-indigo-500/10"
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="font-display text-lg font-bold text-white">
          {category.title}
        </h3>
        <span className="ml-auto text-xs text-slate-500">
          {category.skills.length} skills
        </span>
      </div>

      <ul className="space-y-4">
        {category.skills.map((skill) => (
          <li key={skill.name}>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 font-medium text-slate-200">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: skill.color,
                    boxShadow: `0 0 8px ${skill.color}`,
                  }}
                />
                {skill.name}
              </span>
              <span className="text-xs text-slate-500">{skill.level}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`,
                }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
