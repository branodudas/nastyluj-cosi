import type { DesignSystemState } from '@/types/design-system'

export const defaultState: DesignSystemState = {
  meta: {
    projectName: 'Untitled Project',
  },

  viewport: {
    minWidth: 320,
    maxWidth: 1440,
  },

  typography: {
    fonts: {
      primary: {
        type: 'google',
        family: 'Inter',
        fallback: 'system-ui, sans-serif',
        weights: [400, 500, 600, 700],
      },
      heading: {
        type: 'google',
        family: 'Inter',
        fallback: 'system-ui, sans-serif',
        weights: [600, 700],
      },
      mono: {
        type: 'google',
        family: 'JetBrains Mono',
        fallback: 'ui-monospace, monospace',
        weights: [400, 500, 700],
      },
    },
    scale: {
      minBase: 16,
      maxBase: 18,
      ratio: 1.25,
      steps: [
        { id: 'text-2xs', name: 'text-2xs', label: '2XS', stepsFromBase: -2 },
        { id: 'text-xs', name: 'text-xs', label: 'XS', stepsFromBase: -1 },
        { id: 'text-sm', name: 'text-sm', label: 'SM', stepsFromBase: -0.5 },
        { id: 'text-base', name: 'text-base', label: 'Base', stepsFromBase: 0 },
        { id: 'text-md', name: 'text-md', label: 'MD', stepsFromBase: 0.5 },
        { id: 'text-lg', name: 'text-lg', label: 'LG', stepsFromBase: 1 },
        { id: 'text-xl', name: 'text-xl', label: 'XL', stepsFromBase: 2 },
        { id: 'text-2xl', name: 'text-2xl', label: '2XL', stepsFromBase: 3 },
        { id: 'text-3xl', name: 'text-3xl', label: '3XL', stepsFromBase: 4 },
        { id: 'text-4xl', name: 'text-4xl', label: '4XL', stepsFromBase: 5 },
      ],
    },
    lineHeights: {
      none: 1,
      tight: 1.2,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    letterSpacing: {
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    headings: {
      h1: {
        sizeStepId: 'text-4xl',
        weight: 700,
        colorTokenId: 'gray-900',
        leading: 'tight',
        tracking: 'tight',
      },
      h2: {
        sizeStepId: 'text-3xl',
        weight: 700,
        colorTokenId: 'gray-900',
        leading: 'tight',
        tracking: 'tight',
      },
      h3: {
        sizeStepId: 'text-2xl',
        weight: 600,
        colorTokenId: 'gray-900',
        leading: 'snug',
        tracking: 'normal',
      },
      h4: {
        sizeStepId: 'text-xl',
        weight: 600,
        colorTokenId: 'gray-900',
        leading: 'snug',
        tracking: 'normal',
      },
      h5: {
        sizeStepId: 'text-lg',
        weight: 600,
        colorTokenId: 'gray-900',
        leading: 'normal',
        tracking: 'normal',
      },
      h6: {
        sizeStepId: 'text-base',
        weight: 600,
        colorTokenId: 'gray-900',
        leading: 'normal',
        tracking: 'normal',
      },
    },
    body: {
      sizeStepId: 'text-base',
      weight: 400,
      colorTokenId: 'gray-900',
      leading: 'normal',
      tracking: 'normal',
    },
    caption: {
      sizeStepId: 'text-sm',
      weight: 400,
      colorTokenId: 'gray-500',
      leading: 'normal',
      tracking: 'wide',
    },
  },

  spacing: {
    baseUnit: 1,
    scaleFactor: 1.5,
    steps: [
      { id: 'space-3xs', name: 'space-3xs', label: '3XS', multiplier: -3 },
      { id: 'space-2xs', name: 'space-2xs', label: '2XS', multiplier: -2 },
      { id: 'space-xs', name: 'space-xs', label: 'XS', multiplier: -1 },
      { id: 'space-s', name: 'space-s', label: 'S', multiplier: 0 },
      { id: 'space-m', name: 'space-m', label: 'M', multiplier: 1 },
      { id: 'space-l', name: 'space-l', label: 'L', multiplier: 2 },
      { id: 'space-xl', name: 'space-xl', label: 'XL', multiplier: 3 },
      { id: 'space-2xl', name: 'space-2xl', label: '2XL', multiplier: 4 },
      { id: 'space-3xl', name: 'space-3xl', label: '3XL', multiplier: 4 },
    ],
    containers: [
      { id: 'container-sm', name: 'sm', value: 640 },
      { id: 'container-md', name: 'md', value: 768 },
      { id: 'container-lg', name: 'lg', value: 1024 },
      { id: 'container-xl', name: 'xl', value: 1280 },
    ],
    gutter: 'space-m',
  },

  colors: {
    tokens: [
      {
        id: 'primary',
        name: 'primary',
        hex: '#3b82f6',
        oklch: { l: 0.6232, c: 0.2008, h: 261.35 },
        generateVariants: true,
        group: 'brand',
      },
      {
        id: 'gray-900',
        name: 'gray-900',
        hex: '#111827',
        oklch: { l: 0.2098, c: 0.0178, h: 264.66 },
        generateVariants: false,
        group: 'neutral',
      },
      {
        id: 'gray-500',
        name: 'gray-500',
        hex: '#6b7280',
        oklch: { l: 0.5508, c: 0.0148, h: 264.18 },
        generateVariants: false,
        group: 'neutral',
      },
      {
        id: 'gray-100',
        name: 'gray-100',
        hex: '#f3f4f6',
        oklch: { l: 0.9647, c: 0.0034, h: 264.54 },
        generateVariants: false,
        group: 'neutral',
      },
      {
        id: 'white',
        name: 'white',
        hex: '#ffffff',
        oklch: { l: 1.0, c: 0.0, h: 0.0 },
        generateVariants: false,
        group: 'neutral',
      },
      {
        id: 'success',
        name: 'success',
        hex: '#22c55e',
        oklch: { l: 0.7233, c: 0.1944, h: 148.96 },
        generateVariants: true,
        group: 'semantic',
      },
      {
        id: 'warning',
        name: 'warning',
        hex: '#f59e0b',
        oklch: { l: 0.7688, c: 0.1719, h: 70.08 },
        generateVariants: true,
        group: 'semantic',
      },
      {
        id: 'error',
        name: 'error',
        hex: '#ef4444',
        oklch: { l: 0.6279, c: 0.2246, h: 25.33 },
        generateVariants: true,
        group: 'semantic',
      },
    ],
    semantic: {
      text: 'gray-900',
      textMuted: 'gray-500',
      background: 'white',
      backgroundAlt: 'gray-100',
      border: 'gray-100',
      primary: 'primary',
      secondary: 'gray-500',
      tertiary: 'gray-100',
      success: 'success',
      warning: 'warning',
      error: 'error',
      info: 'primary',
    },
  },

  gradients: [
    {
      id: 'gradient-hero',
      name: 'Hero Gradient',
      type: 'linear',
      angle: 135,
      stops: [
        { id: 'stop-1', colorTokenId: 'primary', opacity: 1, position: 0 },
        { id: 'stop-2', colorTokenId: 'success', opacity: 1, position: 100 },
      ],
    },
  ],

  shadows: [
    {
      id: 'shadow-xs',
      name: 'shadow-xs',
      label: 'XS',
      layers: [
        { offsetX: 0, offsetY: 1, blur: 2, spread: 0, colorTokenId: 'gray-900', opacity: 0.05, inset: false },
      ],
    },
    {
      id: 'shadow-sm',
      name: 'shadow-sm',
      label: 'SM',
      layers: [
        { offsetX: 0, offsetY: 1, blur: 3, spread: 0, colorTokenId: 'gray-900', opacity: 0.1, inset: false },
        { offsetX: 0, offsetY: 1, blur: 2, spread: -1, colorTokenId: 'gray-900', opacity: 0.1, inset: false },
      ],
    },
    {
      id: 'shadow-md',
      name: 'shadow-md',
      label: 'MD',
      layers: [
        { offsetX: 0, offsetY: 4, blur: 6, spread: -1, colorTokenId: 'gray-900', opacity: 0.1, inset: false },
        { offsetX: 0, offsetY: 2, blur: 4, spread: -2, colorTokenId: 'gray-900', opacity: 0.1, inset: false },
      ],
    },
    {
      id: 'shadow-lg',
      name: 'shadow-lg',
      label: 'LG',
      layers: [
        { offsetX: 0, offsetY: 10, blur: 15, spread: -3, colorTokenId: 'gray-900', opacity: 0.1, inset: false },
        { offsetX: 0, offsetY: 4, blur: 6, spread: -4, colorTokenId: 'gray-900', opacity: 0.1, inset: false },
      ],
    },
    {
      id: 'shadow-xl',
      name: 'shadow-xl',
      label: 'XL',
      layers: [
        { offsetX: 0, offsetY: 20, blur: 25, spread: -5, colorTokenId: 'gray-900', opacity: 0.1, inset: false },
        { offsetX: 0, offsetY: 8, blur: 10, spread: -6, colorTokenId: 'gray-900', opacity: 0.1, inset: false },
      ],
    },
    {
      id: 'shadow-2xl',
      name: 'shadow-2xl',
      label: '2XL',
      layers: [
        { offsetX: 0, offsetY: 25, blur: 50, spread: -12, colorTokenId: 'gray-900', opacity: 0.25, inset: false },
      ],
    },
  ],

  animations: {
    easings: [
      { id: 'ease-linear', name: 'ease-linear', label: 'Linear', x1: 0, y1: 0, x2: 1, y2: 1, isPreset: true },
      { id: 'ease-in', name: 'ease-in', label: 'Ease In', x1: 0.42, y1: 0, x2: 1, y2: 1, isPreset: true },
      { id: 'ease-out', name: 'ease-out', label: 'Ease Out', x1: 0, y1: 0, x2: 0.58, y2: 1, isPreset: true },
      { id: 'ease-in-out', name: 'ease-in-out', label: 'Ease In Out', x1: 0.42, y1: 0, x2: 0.58, y2: 1, isPreset: true },
      { id: 'ease-spring', name: 'ease-spring', label: 'Spring', x1: 0.175, y1: 0.885, x2: 0.32, y2: 1.275, isPreset: true },
      { id: 'ease-bounce', name: 'ease-bounce', label: 'Bounce', x1: 0.68, y1: -0.55, x2: 0.265, y2: 1.55, isPreset: true },
      { id: 'ease-smooth', name: 'ease-smooth', label: 'Smooth', x1: 0.25, y1: 0.1, x2: 0.25, y2: 1, isPreset: true },
    ],
    durations: [
      { id: 'duration-instant', name: 'duration-instant', label: 'Instant', value: 0 },
      { id: 'duration-fast', name: 'duration-fast', label: 'Fast', value: 100 },
      { id: 'duration-normal', name: 'duration-normal', label: 'Normal', value: 200 },
      { id: 'duration-relaxed', name: 'duration-relaxed', label: 'Relaxed', value: 300 },
      { id: 'duration-slow', name: 'duration-slow', label: 'Slow', value: 500 },
      { id: 'duration-slower', name: 'duration-slower', label: 'Slower', value: 700 },
      { id: 'duration-slowest', name: 'duration-slowest', label: 'Slowest', value: 1000 },
    ],
  },

  borders: {
    radiusTokens: [
      { id: 'radius-none', name: 'radius-none', label: 'None', value: 0 },
      { id: 'radius-sm', name: 'radius-sm', label: 'SM', value: 4 },
      { id: 'radius-base', name: 'radius-base', label: 'Base', value: 8 },
      { id: 'radius-md', name: 'radius-md', label: 'MD', value: 12 },
      { id: 'radius-lg', name: 'radius-lg', label: 'LG', value: 16 },
      { id: 'radius-xl', name: 'radius-xl', label: 'XL', value: 24 },
      { id: 'radius-full', name: 'radius-full', label: 'Full', value: 9999 },
    ],
    widthTokens: [
      { id: 'border-thin', name: 'border-thin', label: 'Thin', value: 1 },
      { id: 'border-base', name: 'border-base', label: 'Base', value: 2 },
      { id: 'border-thick', name: 'border-thick', label: 'Thick', value: 4 },
    ],
  },

  zIndex: {
    tokens: [
      { id: 'z-dropdown', name: 'z-dropdown', label: 'Dropdown', value: 100 },
      { id: 'z-sticky', name: 'z-sticky', label: 'Sticky', value: 200 },
      { id: 'z-overlay', name: 'z-overlay', label: 'Overlay', value: 300 },
      { id: 'z-modal', name: 'z-modal', label: 'Modal', value: 500 },
      { id: 'z-popover', name: 'z-popover', label: 'Popover', value: 600 },
      { id: 'z-toast', name: 'z-toast', label: 'Toast', value: 700 },
    ],
  },
}
