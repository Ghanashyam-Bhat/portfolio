import type { Metadata } from 'next'
import { JetBrains_Mono, Outfit } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'
import CustomCursor from '@/components/ui/CustomCursor'
import { personalInfo } from '@/data/personal'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500', '700'],
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: personalInfo.metadata.title,
  description: personalInfo.metadata.description,
  keywords: personalInfo.metadata.keywords,
  authors: [{ name: personalInfo.personal.fullName }],
  openGraph: {
    title: personalInfo.metadata.openGraph.title,
    description: personalInfo.metadata.openGraph.description,
    type: personalInfo.metadata.openGraph.type as 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${outfit.variable}`} style={{ backgroundColor: '#080c09', color: '#ededed' }}>
      <body style={{ backgroundColor: '#080c09', color: '#ededed', minHeight: '100vh' }}>
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
