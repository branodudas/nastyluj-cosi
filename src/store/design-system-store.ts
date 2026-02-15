import { create } from 'zustand'
import type { DesignSystemState, MetaConfig } from '@/types/design-system'
import { defaultState } from '@/store/defaults'
import { getStateFromUrl, writeStateToUrl } from '@/lib/url-state'

export interface DesignSystemActions {
  setState: (partial: Partial<DesignSystemState>) => void
  setMeta: (meta: Partial<MetaConfig>) => void
  resetToDefaults: () => void
}

export type DesignSystemStore = DesignSystemState & DesignSystemActions

const ACTION_KEYS: ReadonlyArray<keyof DesignSystemActions> = [
  'setState',
  'setMeta',
  'resetToDefaults',
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
}))

// Debounced URL sync
let debounceTimer: ReturnType<typeof setTimeout> | undefined

useDesignSystemStore.subscribe((state) => {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    writeStateToUrl(stripActions(state))
  }, 500)
})
