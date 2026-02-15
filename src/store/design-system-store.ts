import { create } from 'zustand'
import type { DesignSystemState, MetaConfig, TypographyConfig, FontConfig, TypeStep, HeadingStyleConfig, BodyStyleConfig, ViewportConfig } from '@/types/design-system'
import { defaultState } from '@/store/defaults'
import { getStateFromUrl, writeStateToUrl } from '@/lib/url-state'

export interface DesignSystemActions {
  setState: (partial: Partial<DesignSystemState>) => void
  setMeta: (meta: Partial<MetaConfig>) => void
  resetToDefaults: () => void
  setTypography: (partial: Partial<TypographyConfig>) => void
  setFont: (role: 'primary' | 'heading' | 'mono', font: Partial<FontConfig>) => void
  setScale: (partial: Partial<TypographyConfig['scale']>) => void
  addTypeStep: (step: TypeStep) => void
  removeTypeStep: (id: string) => void
  setHeading: (level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', config: Partial<HeadingStyleConfig>) => void
  setBody: (config: Partial<BodyStyleConfig>) => void
  setCaption: (config: Partial<BodyStyleConfig>) => void
  setLineHeights: (partial: Partial<TypographyConfig['lineHeights']>) => void
  setLetterSpacing: (partial: Partial<TypographyConfig['letterSpacing']>) => void
  setViewport: (partial: Partial<ViewportConfig>) => void
}

export type DesignSystemStore = DesignSystemState & DesignSystemActions

const ACTION_KEYS: ReadonlyArray<keyof DesignSystemActions> = [
  'setState',
  'setMeta',
  'resetToDefaults',
  'setTypography',
  'setFont',
  'setScale',
  'addTypeStep',
  'removeTypeStep',
  'setHeading',
  'setBody',
  'setCaption',
  'setLineHeights',
  'setLetterSpacing',
  'setViewport',
]

function stripActions(state: DesignSystemStore): DesignSystemState {
  const plain = { ...state } as unknown as Record<string, unknown>
  for (const key of ACTION_KEYS) {
    delete plain[key]
  }
  return plain as unknown as DesignSystemState
}

function getInitialState(): DesignSystemState {
  return getStateFromUrl() ?? defaultState
}

export const useDesignSystemStore = create<DesignSystemStore>()((set) => ({
  ...getInitialState(),

  setState: (partial) =>
    set((state) => ({ ...state, ...partial })),

  setMeta: (meta) =>
    set((state) => ({ meta: { ...state.meta, ...meta } })),

  resetToDefaults: () =>
    set(() => ({ ...defaultState })),

  setTypography: (partial) =>
    set((state) => ({
      typography: { ...state.typography, ...partial },
    })),

  setFont: (role, font) =>
    set((state) => ({
      typography: {
        ...state.typography,
        fonts: {
          ...state.typography.fonts,
          [role]: { ...state.typography.fonts[role], ...font },
        },
      },
    })),

  setScale: (partial) =>
    set((state) => ({
      typography: {
        ...state.typography,
        scale: { ...state.typography.scale, ...partial },
      },
    })),

  addTypeStep: (step) =>
    set((state) => ({
      typography: {
        ...state.typography,
        scale: {
          ...state.typography.scale,
          steps: [...state.typography.scale.steps, step],
        },
      },
    })),

  removeTypeStep: (id) =>
    set((state) => ({
      typography: {
        ...state.typography,
        scale: {
          ...state.typography.scale,
          steps: state.typography.scale.steps.filter((s) => s.id !== id),
        },
      },
    })),

  setHeading: (level, config) =>
    set((state) => ({
      typography: {
        ...state.typography,
        headings: {
          ...state.typography.headings,
          [level]: { ...state.typography.headings[level], ...config },
        },
      },
    })),

  setBody: (config) =>
    set((state) => ({
      typography: {
        ...state.typography,
        body: { ...state.typography.body, ...config },
      },
    })),

  setCaption: (config) =>
    set((state) => ({
      typography: {
        ...state.typography,
        caption: { ...state.typography.caption, ...config },
      },
    })),

  setLineHeights: (partial) =>
    set((state) => ({
      typography: {
        ...state.typography,
        lineHeights: { ...state.typography.lineHeights, ...partial },
      },
    })),

  setLetterSpacing: (partial) =>
    set((state) => ({
      typography: {
        ...state.typography,
        letterSpacing: { ...state.typography.letterSpacing, ...partial },
      },
    })),

  setViewport: (partial) =>
    set((state) => ({
      viewport: { ...state.viewport, ...partial },
    })),
}))

// Debounced URL sync
let debounceTimer: ReturnType<typeof setTimeout> | undefined

useDesignSystemStore.subscribe((state) => {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    writeStateToUrl(stripActions(state))
  }, 500)
})
