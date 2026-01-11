'use client'

import { motion } from 'framer-motion'
import { Smartphone, Server, Code, Zap } from 'lucide-react'
import { personalInfo } from '@/data/personal'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Server,
  Code,
  Zap,
}

export default function About() {
  const { about } = personalInfo
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
            <span>About </span>
            <span className="text-cyan-500">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              {about.paragraphs.map((paragraph, i) => {
                return <p key={i}>{paragraph}</p>
              })}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {about.stats.map((stat, i) => {
                const IconComponent = iconMap[stat.icon]
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="p-6 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
                  >
                    {IconComponent && <IconComponent className="w-8 h-8 text-cyan-500 mb-3" />}
                    <h3 className="text-gray-900 dark:text-gray-100">{stat.label}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.sublabel}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

