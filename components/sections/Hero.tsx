'use client'


import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useUIStore } from '@/store/uiStore'
import { personalInfo } from '@/data/personal'

export default function Hero() {
  const { darkMode } = useUIStore()
  const { personal, cta } = personalInfo

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: darkMode
            ? 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)'
            : 'linear-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-cyan-500 text-sm md:text-base mb-4 font-mono"
          >
            {personal.greeting}
          </motion.p>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-cyan-500">{personal.firstName}</span>{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {personal.lastName}
            </span>
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {personal.title}
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-4">
            {personal.description.intro}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12">
            <span className="text-cyan-500 font-semibold">{personal.description.highlightedTech.primary}</span> & <span className="text-blue-500 font-semibold">{personal.description.highlightedTech.secondary}</span> {personal.description.main.replace(new RegExp(personal.description.highlightedTech.primary, 'gi'), '').replace(new RegExp(personal.description.highlightedTech.secondary, 'gi'), '').trim()}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href={cta.primary.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              {cta.primary.text}
            </motion.a>
            <motion.a
              href={cta.secondary.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-cyan-500 text-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all"
            >
              {cta.secondary.text}
            </motion.a>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-20"
          >
            <ChevronDown className="w-8 h-8 mx-auto text-cyan-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

