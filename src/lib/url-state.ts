import LZString from 'lz-string'
import type { DesignSystemState } from '@/types/design-system'
import { defaultState } from '@/store/defaults'

export function serializeState(state: DesignSystemState): string {
  const json = JSON.stringify(state)
  return LZString.compressToEncodedURIComponent(json)
}

export function deserializeState(hash: string): DesignSystemState | null {
  try {
    const json = LZString.decompressFromEncodedURIComponent(hash)
    if (!json) return null
    const parsed: unknown = JSON.parse(json)
    return mergeWithDefaults(parsed as Partial<DesignSystemState>)
  } catch {
    return null
  }
}

export function mergeWithDefaults(
  partial: Partial<DesignSystemState>,
): DesignSystemState {
  return {
    meta: { ...defaultState.meta, ...partial.meta },
    viewport: { ...defaultState.viewport, ...partial.viewport },
    typography: {
      ...defaultState.typography,
      ...partial.typography,
      fonts: {
        primary: {
          ...defaultState.typography.fonts.primary,
          ...partial.typography?.fonts?.primary,
        },
        heading: {
          ...defaultState.typography.fonts.heading,
          ...partial.typography?.fonts?.heading,
        },
        mono: {
          ...defaultState.typography.fonts.mono,
          ...partial.typography?.fonts?.mono,
        },
      },
      scale: {
        ...defaultState.typography.scale,
        ...partial.typography?.scale,
      },
      lineHeights: {
        ...defaultState.typography.lineHeights,
        ...partial.typography?.lineHeights,
      },
      letterSpacing: {
        ...defaultState.typography.letterSpacing,
        ...partial.typography?.letterSpacing,
      },
      headings: {
        h1: { ...defaultState.typography.headings.h1, ...partial.typography?.headings?.h1 },
        h2: { ...defaultState.typography.headings.h2, ...partial.typography?.headings?.h2 },
        h3: { ...defaultState.typography.headings.h3, ...partial.typography?.headings?.h3 },
        h4: { ...defaultState.typography.headings.h4, ...partial.typography?.headings?.h4 },
        h5: { ...defaultState.typography.headings.h5, ...partial.typography?.headings?.h5 },
        h6: { ...defaultState.typography.headings.h6, ...partial.typography?.headings?.h6 },
      },
      body: { ...defaultState.typography.body, ...partial.typography?.body },
      caption: { ...defaultState.typography.caption, ...partial.typography?.caption },
    },
    spacing: {
      ...defaultState.spacing,
      ...partial.spacing,
    },
    colors: {
      tokens: partial.colors?.tokens ?? defaultState.colors.tokens,
      semantic: {
        ...defaultState.colors.semantic,
        ...partial.colors?.semantic,
      },
    },
    gradients: partial.gradients ?? defaultState.gradients,
    shadows: partial.shadows ?? defaultState.shadows,
    animations: {
      easings: partial.animations?.easings ?? defaultState.animations.easings,
      durations: partial.animations?.durations ?? defaultState.animations.durations,
    },
    borders: {
      radiusTokens: partial.borders?.radiusTokens ?? defaultState.borders.radiusTokens,
      widthTokens: partial.borders?.widthTokens ?? defaultState.borders.widthTokens,
    },
    zIndex: {
      tokens: partial.zIndex?.tokens ?? defaultState.zIndex.tokens,
    },
  }
}

export function getStateFromUrl(): DesignSystemState | null {
  const hash = window.location.hash.slice(1)
  if (!hash) return null
  return deserializeState(hash)
}

export function writeStateToUrl(state: DesignSystemState): void {
  const compressed = serializeState(state)
  window.history.replaceState(null, '', `#${compressed}`)
}
