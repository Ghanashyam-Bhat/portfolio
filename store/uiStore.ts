'use client'

import { create } from 'zustand'

export type CursorVariant = 'default' | 'hovering' | 'project'

interface UIStore {
  mobileMenuOpen: boolean
  cursorVariant: CursorVariant
  toggleMobileMenu: () => void
  closeMobileMenu: () => void
  setCursorVariant: (variant: CursorVariant) => void
}

export const useUIStore = create<UIStore>((set) => ({
  mobileMenuOpen: false,
  cursorVariant: 'default',
  toggleMobileMenu: () => set((s) => ({ mobileMenuOpen: !s.mobileMenuOpen })),
  closeMobileMenu:  () => set({ mobileMenuOpen: false }),
  setCursorVariant: (variant) => set({ cursorVariant: variant }),
}))
