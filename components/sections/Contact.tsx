'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'
import { personalInfo } from '@/data/personal'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mail,
  Linkedin,
  Github,
}

export default function Contact() {
  const { contact } = personalInfo
  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 dark:via-cyan-500/5 to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span>{contact.heading.split(' ').slice(0, -1).join(' ')} </span>
            <span className="text-cyan-500">{contact.heading.split(' ').slice(-1)[0]}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            {contact.subheading}
          </p>

          <motion.a
            href={`mailto:${contact.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-lg text-white hover:shadow-2xl hover:shadow-cyan-500/50 transition-all"
          >
            <Mail className="w-6 h-6" />
            {contact.emailButtonText}
          </motion.a>

          <div className="flex justify-center gap-6 mt-16">
            {contact.socialLinks.map((social, i) => {
              const IconComponent = iconMap[social.icon]
              return (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 bg-gray-100 dark:bg-white/5 rounded-full border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 ${social.color} transition-all backdrop-blur-sm`}
                >
                  {IconComponent && <IconComponent className="w-6 h-6" />}
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

