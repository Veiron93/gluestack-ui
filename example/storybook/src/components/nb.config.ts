import { createConfig } from '@gluestack-style/react';

export const config = createConfig({
  aliases: {
    bg: 'backgroundColor',
    backgroundColor: 'backgroundColor',
    bgColor: 'backgroundColor',
    color: 'color',
    borderColor: 'borderColor',
    shadowColor: 'shadowColor',
    shadowOffset: 'shadowOffset',
    shadowOpacity: 'shadowOpacity',
    shadowRadius: 'shadowRadius',
    elevation: 'elevation',
    // dimension
    h: 'height',
    w: 'width',
    height: 'height',
    width: 'width',
    // padding
    p: 'padding',
    px: 'paddingHorizontal',
    py: 'paddingVertical',
    pt: 'paddingTop',
    pb: 'paddingBottom',
    pr: 'paddingRight',
    pl: 'paddingLeft',
    padding: 'padding',
    paddingHorizontal: 'paddingHorizontal',
    paddingVertical: 'paddingVertical',
    paddingTop: 'paddingTop',
    paddingBottom: 'paddingBottom',
    paddingRight: 'paddingRight',
    paddingLeft: 'paddingLeft',
    // margin
    m: 'margin',
    mx: 'marginHorizontal',
    my: 'marginVertical',
    mt: 'marginTop',
    mb: 'marginBottom',
    mr: 'marginRight',
    ml: 'marginLeft',
    margin: 'margin',
    marginHorizontal: 'marginHorizontal',
    marginVertical: 'marginVertical',
    marginTop: 'marginTop',
    marginBottom: 'marginBottom',
    marginRight: 'marginRight',
    marginLeft: 'marginLeft',
    // Borders
    borderWidth: 'borderWidth',
    borderRadius: 'borderRadius',
    rounded: 'borderRadius',
    // Typography
    letterSpacing: 'letterSpacing',
    lineHeight: 'lineHeight',
    fontWeight: 'fontWeight',
    fontFamily: 'fontFamily',
    fontSize: 'fontSize',
    shadow: 'shadow',
    // Media Query
    condition: 'condition',
  } as const,
  tokens: {
    colors: {
      rose50: '#fff1f2',
      rose100: '#ffe4e6',
      rose200: '#fecdd3',
      rose300: '#fda4af',
      rose400: '#fb7185',
      rose500: '#f43f5e',
      rose600: '#e11d48',
      rose700: '#be123c',
      rose800: '#9f1239',
      rose900: '#881337',
      pink50: '#fdf2f8',
      pink100: '#fce7f3',
      pink200: '#fbcfe8',
      pink300: '#f9a8d4',
      pink400: '#f472b6',
      pink500: '#ec4899',
      pink600: '#db2777',
      pink700: '#be185d',
      pink800: '#9d174d',
      pink900: '#831843',
      fuchsia50: '#fdf4ff',
      fuchsia100: '#fae8ff',
      fuchsia200: '#f5d0fe',
      fuchsia300: '#f0abfc',
      fuchsia400: '#e879f9',
      fuchsia500: '#d946ef',
      fuchsia600: '#c026d3',
      fuchsia700: '#a21caf',
      fuchsia800: '#86198f',
      fuchsia900: '#701a75',
      purple50: '#faf5ff',
      purple100: '#f3e8ff',
      purple200: '#e9d5ff',
      purple300: '#d8b4fe',
      purple400: '#c084fc',
      purple500: '#a855f7',
      purple600: '#9333ea',
      purple700: '#7e22ce',
      purple800: '#6b21a8',
      purple900: '#581c87',
      violet50: '#f5f3ff',
      violet100: '#ede9fe',
      violet200: '#ddd6fe',
      violet300: '#c4b5fd',
      violet400: '#a78bfa',
      violet500: '#8b5cf6',
      violet600: '#7c3aed',
      violet700: '#6d28d9',
      violet800: '#5b21b6',
      violet900: '#4c1d95',
      indigo50: '#eef2ff',
      indigo100: '#e0e7ff',
      indigo200: '#c7d2fe',
      indigo300: '#a5b4fc',
      indigo400: '#818cf8',
      indigo500: '#6366f1',
      indigo600: '#4f46e5',
      indigo700: '#4338ca',
      indigo800: '#3730a3',
      indigo800_50: '#3730a380',
      indigo900: '#312e81',
      blue50: '#eff6ff',
      blue100: '#dbeafe',
      blue200: '#bfdbfe',
      blue300: '#93c5fd',
      blue400: '#60a5fa',
      blue500: '#3b82f6',
      blue600: '#2563eb',
      blue600_alpha10: '#06b6d41a',
      blue600_alpha20: '#06b6d433',
      blue700: '#1d4ed8',
      blue800: '#1e40af',
      blue900: '#1e3a8a',
      lightBlue50: '#f0f9ff',
      lightBlue100: '#e0f2fe',
      lightBlue200: '#bae6fd',
      lightBlue300: '#7dd3fc',
      lightBlue400: '#38bdf8',
      lightBlue500: '#0ea5e9',
      lightBlue600: '#0284c7',
      lightBlue700: '#0369a1',
      lightBlue800: '#075985',
      lightBlue900: '#0c4a6e',
      darkBlue50: '#dbf4ff',
      darkBlue100: '#addbff',
      darkBlue200: '#7cc2ff',
      darkBlue300: '#4aa9ff',
      darkBlue400: '#1a91ff',
      darkBlue500: '#0077e6',
      darkBlue600: '#005db4',
      darkBlue700: '#004282',
      darkBlue800: '#002851',
      darkBlue900: '#000e21',
      cyan50: '#ecfeff',
      cyan100: '#cffafe',
      cyan200: '#a5f3fc',
      cyan300: '#67e8f9',
      cyan400: '#22d3ee',
      cyan500: '#06b6d4',
      cyan600: '#0891b2',
      cyan700: '#0e7490',
      cyan800: '#155e75',
      cyan900: '#164e63',
      teal50: '#f0fdfa',
      teal100: '#ccfbf1',
      teal200: '#99f6e4',
      teal300: '#5eead4',
      teal400: '#2dd4bf',
      teal500: '#14b8a6',
      teal600: '#0d9488',
      teal700: '#0f766e',
      teal800: '#115e59',
      teal900: '#134e4a',
      emerald50: '#ecfdf5',
      emerald100: '#d1fae5',
      emerald200: '#a7f3d0',
      emerald300: '#6ee7b7',
      emerald400: '#34d399',
      emerald500: '#10b981',
      emerald600: '#059669',
      emerald700: '#047857',
      emerald800: '#065f46',
      emerald900: '#064e3b',
      green50: '#f0fdf4',
      green100: '#dcfce7',
      green200: '#bbf7d0',
      green300: '#86efac',
      green400: '#4ade80',
      green500: '#22c55e',
      green600: '#16a34a',
      green700: '#15803d',
      green800: '#166534',
      green900: '#14532d',
      lime50: '#f7fee7',
      lime100: '#ecfccb',
      lime200: '#d9f99d',
      lime300: '#bef264',
      lime400: '#a3e635',
      lime500: '#84cc16',
      lime600: '#65a30d',
      lime700: '#4d7c0f',
      lime800: '#3f6212',
      lime900: '#365314',
      yellow50: '#fefce8',
      yellow100: '#fef9c3',
      yellow200: '#fef08a',
      yellow300: '#fde047',
      yellow400: '#facc15',
      yellow500: '#eab308',
      yellow600: '#ca8a04',
      yellow700: '#a16207',
      yellow800: '#854d0e',
      yellow900: '#713f12',
      amber50: '#fffbeb',
      amber100: '#fef3c7',
      amber200: '#fde68a',
      amber300: '#fcd34d',
      amber400: '#fbbf24',
      amber500: '#f59e0b',
      amber600: '#d97706',
      amber700: '#b45309',
      amber800: '#92400e',
      amber900: '#78350f',
      orange50: '#fff7ed',
      orange100: '#ffedd5',
      orange200: '#fed7aa',
      orange300: '#fdba74',
      orange400: '#fb923c',
      orange500: '#f97316',
      orange600: '#ea580c',
      orange700: '#c2410c',
      orange800: '#9a3412',
      orange900: '#7c2d12',
      red50: '#fef2f2',
      red100: '#fee2e2',
      red200: '#fecaca',
      red300: '#fca5a5',
      red400: '#f87171',
      red500: '#ef4444',
      red600: '#dc2626',
      red700: '#b91c1c',
      red800: '#991b1b',
      red900: '#7f1d1d',
      warmGray50: '#fafaf9',
      warmGray100: '#f5f5f4',
      warmGray200: '#e7e5e4',
      warmGray300: '#d6d3d1',
      warmGray400: '#a8a29e',
      warmGray500: '#78716c',
      warmGray600: '#57534e',
      warmGray700: '#44403c',
      warmGray800: '#292524',
      warmGray900: '#1c1917',
      trueGray50: '#fafafa',
      trueGray100: '#f5f5f5',
      trueGray200: '#e5e5e5',
      trueGray300: '#d4d4d4',
      trueGray400: '#a3a3a3',
      trueGray500: '#737373',
      trueGray600: '#525252',
      trueGray700: '#404040',
      trueGray800: '#262626',
      trueGray900: '#171717',
      gray50: '#fafafa',
      gray100: '#f4f4f5',
      gray200: '#e4e4e7',
      gray300: '#d4d4d8',
      gray400: '#a1a1aa',
      gray500: '#71717a',
      gray600: '#52525b',
      gray700: '#3f3f46',
      gray800: '#27272a',
      gray900: '#18181b',
      coolGray50: '#f9fafb',
      coolGray100: '#f3f4f6',
      coolGray200: '#e5e7eb',
      coolGray300: '#d1d5db',
      coolGray400: '#9ca3af',
      coolGray500: '#6b7280',
      coolGray600: '#4b5563',
      coolGray700: '#374151',
      coolGray800: '#1f2937',
      coolGray900: '#111827',
      blueGray50: '#f8fafc',
      blueGray100: '#f1f5f9',
      blueGray200: '#e2e8f0',
      blueGray300: '#cbd5e1',
      blueGray400: '#94a3b8',
      blueGray500: '#64748b',
      blueGray600: '#475569',
      blueGray700: '#334155',
      blueGray800: '#1e293b',
      blueGray900: '#0f172a',
      dark50: '#18181b',
      dark100: '#27272a',
      dark200: '#3f3f46',
      dark300: '#52525b',
      dark400: '#71717a',
      dark500: '#a1a1aa',
      dark600: '#d4d4d8',
      dark700: '#e4e4e7',
      dark800: '#f4f4f5',
      dark900: '#fafafa',
      text50: '#fafafa',
      text100: '#f5f5f5',
      text200: '#e5e5e5',
      text300: '#d4d4d4',
      text400: '#a3a3a3',
      text500: '#737373',
      text600: '#525252',
      text700: '#404040',
      text800: '#262626',
      text900: '#171717',
      // Will keep following colors
      white: '#FFFFFF',
      black: '#000000',
      lightText: '#FFFFFF',
      darkText: '#000000',
      secondary50: '#f9fafb',
      secondary100: '#f3f4f6',
      secondary200: '#e5e7eb',
      secondary300: '#d1d5db',
      secondary400: '#9ca3af',
      secondary500: '#6b7280',
      secondary600: '#4b5563',
      secondary700: '#374151',
      secondary800: '#1f2937',
      secondary900: '#111827',
      tertiary50: '#ecfdf5',
      tertiary100: '#d1fae5',
      tertiary200: '#a7f3d0',
      tertiary300: '#6ee7b7',
      tertiary400: '#34d399',
      tertiary500: '#10b981',
      tertiary600: '#059669',
      tertiary700: '#047857',
      tertiary800: '#065f46',
      tertiary900: '#064e3b',
      danger50: '#fff1f2',
      danger100: '#ffe4e6',
      danger200: '#fecdd3',
      danger300: '#fda4af',
      danger400: '#fb7185',
      danger500: '#f43f5e',
      danger600: '#e11d48',
      danger700: '#be123c',
      danger800: '#9f1239',
      danger900: '#881337',
      error50: '#fef2f2',
      error100: '#fee2e2',
      error200: '#fecaca',
      error300: '#fca5a5',
      error400: '#f87171',
      error500: '#ef4444',
      error600: '#dc2626',
      error700: '#b91c1c',
      error800: '#991b1b',
      error900: '#7f1d1d',
      success50: '#f0fdf4',
      success100: '#dcfce7',
      success200: '#bbf7d0',
      success300: '#86efac',
      success400: '#4ade80',
      success500: '#22c55e',
      success600: '#16a34a',
      success700: '#15803d',
      success800: '#166534',
      success900: '#14532d',
      warning50: '#fff7ed',
      warning100: '#ffedd5',
      warning200: '#fed7aa',
      warning300: '#fdba74',
      warning400: '#fb923c',
      warning500: '#f97316',
      warning600: '#ea580c',
      warning700: '#c2410c',
      warning800: '#9a3412',
      warning900: '#7c2d12',
      muted50: '#fafafa',
      muted100: '#f5f5f5',
      muted200: '#e5e5e5',
      muted300: '#d4d4d4',
      muted400: '#a3a3a3',
      muted500: '#737373',
      muted600: '#525252',
      muted700: '#404040',
      muted800: '#262626',
      muted900: '#171717',
      info50: '#f0f9ff',
      info100: '#e0f2fe',
      info200: '#bae6fd',
      info300: '#7dd3fc',
      info400: '#38bdf8',
      info500: '#0ea5e9',
      info600: '#0284c7',
      info700: '#0369a1',
      info800: '#075985',
      info900: '#0c4a6e',
      light50: '#fafaf9',
      light100: '#f5f5f4',
      light200: '#e7e5e4',
      light300: '#d6d3d1',
      light400: '#a8a29e',
      light500: '#78716c',
      light600: '#57534e',
      light700: '#44403c',
      light800: '#292524',
      light900: '#1c1917',
      textDark0: '#ffffff',
      textDark50: '#f9fafb',
      textDark100: '#f3f4f6',
      textDark200: '#e5e7eb',
      textDark300: '#d1d5db',
      textDark400: '#9ca3af',
      textDark500: '#6b7280',
      textDark600: '#4b5563',
      textDark700: '#374151',
      textDark800: '#1f2937',
      textDark900: '#111827',
      textDark950: '#090C14',
      textLight0: '#ffffff',
      textLight50: '#f9fafb',
      textLight100: '#f3f4f6',
      textLight200: '#e5e7eb',
      textLight300: '#d1d5db',
      textLight400: '#9ca3af',
      textLight500: '#6b7280',
      textLight600: '#4b5563',
      textLight700: '#374151',
      textLight800: '#1f2937',
      textLight900: '#111827',
      textLight950: '#090C14',
      borderDark0: '#ffffff',
      borderDark50: '#f9fafb',
      borderDark100: '#f3f4f6',
      borderDark200: '#e5e7eb',
      borderDark300: '#d1d5db',
      borderDark400: '#9ca3af',
      borderDark500: '#6b7280',
      borderDark600: '#4b5563',
      borderDark700: '#374151',
      borderDark800: '#1f2937',
      borderDark900: '#111827',
      borderDark950: '#090C14',
      borderLight0: '#ffffff',
      borderLight50: '#f9fafb',
      borderLight100: '#f3f4f6',
      borderLight200: '#e5e7eb',
      borderLight300: '#d1d5db',
      borderLight400: '#9ca3af',
      borderLight500: '#6b7280',
      borderLight600: '#4b5563',
      borderLight700: '#374151',
      borderLight800: '#1f2937',
      borderLight900: '#111827',
      borderLight950: '#090C14',
      backgroundDark0: '#ffffff',
      backgroundDark50: '#f9fafb',
      backgroundDark100: '#f3f4f6',
      backgroundDark200: '#e5e7eb',
      backgroundDark300: '#d1d5db',
      backgroundDark400: '#9ca3af',
      backgroundDark500: '#6b7280',
      backgroundDark600: '#4b5563',
      backgroundDark700: '#374151',
      backgroundDark800: '#1f2937',
      backgroundDark900: '#111827',
      backgroundDark950: '#090C14',
      backgroundLight0: '#ffffff',
      backgroundLight50: '#f9fafb',
      backgroundLight100: '#f3f4f6',
      backgroundLight200: '#e5e7eb',
      backgroundLight300: '#d1d5db',
      backgroundLight400: '#9ca3af',
      backgroundLight500: '#6b7280',
      backgroundLight600: '#4b5563',
      backgroundLight700: '#374151',
      backgroundLight800: '#1f2937',
      backgroundLight900: '#111827',
      backgroundLight950: '#090C14',
      primary0: '#ffffff',
      primary50: '#faf5ff',
      primary100: '#f3e8ff',
      primary200: '#e9d5ff',
      primary300: '#d8b4fe',
      primary400: '#c084fc',
      primary500: '#a855f7',
      primary600: '#9333ea',
      primary700: '#7e22ce',
      primary800: '#6b21a8',
      primary900: '#581c87',
      primary950: '#3A0D5E',
    },
    space: {
      'px': '1px',
      '0': 0,
      '0.5': 2,
      '1': 4,
      '1.5': 6,
      '2': 8,
      '2.5': 10,
      '3': 12,
      '3.5': 14,
      '4': 16,
      '5': 20,
      '6': 24,
      '7': 28,
      '8': 32,
      '9': 36,
      '10': 40,
      '12': 48,
      '16': 64,
      '20': 80,
      '24': 96,
      '32': 128,
      '40': 160,
      '48': 192,
      '56': 224,
      '64': 256,
      '72': 288,
      '80': 320,
      '96': 384,
      '1/2': '50%',
      '1/3': '33.333%',
      '2/3': '66.666%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666%',
      '2/6': '33.333%',
      '3/6': '50%',
      '4/6': '66.666%',
      '5/6': '83.333%',
      'full': '100%',
    },
    borderWidths: {
      '0': 0,
      '1': 1,
      '2': 2,
      '4': 4,
      '8': 8,
    },
    radii: {
      'none': 0,
      'xs': 2,
      'sm': 4,
      'md': 6,
      'lg': 8,
      'xl': 12,
      '2xl': 16,
      '3xl': 24,
      'full': 9999,
    },
    breakpoints: {
      base: 0,
      sm: 480,
      md: 768,
      lg: 992,
      xl: 1280,
    },
    mediaQueries: {
      base: '@media screen and (min-width: 0)',
      sm: '@media screen and (min-width: 480px)',
      md: '@media screen and (min-width: 768px)',
      lg: '@media screen and (min-width: 992px)',
      xl: '@media screen and (min-width: 1280px)',
    },
    letterSpacings: {
      'xs': -0.8,
      'sm': -0.4,
      'md': 0,
      'lg': 0.4,
      'xl': 0.8,
      '2xl': 1.6,
    },
    lineHeights: {
      '2xs': 16,
      'xs': 18,
      'sm': 20,
      'md': 22,
      'lg': 24,
      'xl': 28,
      '2xl': 32,
      '3xl': 40,
      '4xl': 48,
      '5xl': 64,
    },
    fontWeights: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
      extraBlack: '950',
    },
    fonts: {
      heading: undefined,
      body: undefined,
      mono: undefined,
    },
    fontSizes: {
      '2xs': 10,
      'xs': 12,
      'sm': 14,
      'md': 16,
      'lg': 18,
      'xl': 20,
      '2xl': 24,
      '3xl': 30,
      '4xl': 36,
      '5xl': 48,
      '6xl': 60,
      '7xl': 72,
      '8xl': 96,
      '9xl': 128,
    },
    opacity: {
      0: 0,
      5: 0.05,
      10: 0.1,
      20: 0.2,
      25: 0.25,
      30: 0.3,
      40: 0.4,
      50: 0.5,
      60: 0.6,
      70: 0.7,
      75: 0.75,
      80: 0.8,
      90: 0.9,
      95: 0.95,
      100: 1,
    },
  } as const,

  globalStyle: {
    variants: {
      dropShadow: {
        '1': {
          bg: '$red200',
        },
        '2': {
          bg: '$red200',
        },
      },
      softShadow: {
        '1': {
          bg: '$red200',
        },
        '2': {
          bg: '$red200',
        },
      },
      //   variant: {
      //     primary: {
      //       bg: 'red'
      //     }
      //   }

      //   // test: {
      //   //   primary: {
      //   //     bg: 'red'
      //   //   }
      //   // }
    },
  } as const,
} as const);

type ConfigType = typeof config;

declare module '@gluestack-style/react' {
  interface ICustomConfig extends ConfigType {}
}

export default () => null;
