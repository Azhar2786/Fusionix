export default {
  content: ['./src/**/*.{html,jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        light: {
          primary: '#EE5622',
          surfaceTint: '#ECA72C',
          onPrimary: '#FFFFFF',
          primaryContainer: '#F4B46B',
          onPrimaryContainer: '#4D1E0B',
          secondary: '#31263E',
          onSecondary: '#FFFFFF',
          secondaryContainer: '#6E5B84',
          onSecondaryContainer: '#1A1024',
          tertiary: '#ECA72C',
          onTertiary: '#FFFFFF',
          tertiaryContainer: '#F4D38C',
          onTertiaryContainer: '#5B3700',
          error: '#BA1A1A',
          onError: '#FFFFFF',
          errorContainer: '#FFDAD6',
          onErrorContainer: '#410002',
          background: '#FDF3EF',
          onBackground: '#31263E',
          surface: '#FDF3EF',
          onSurface: '#31263E',
          surfaceVariant: '#E7DFE9',
          onSurfaceVariant: '#4E4452',
          outline: '#8C7C8A',
          outlineVariant: '#D0C4D3',
          shadow: '#000000',
          scrim: '#000000',
          inverseSurface: '#423748',
          inverseOnSurface: '#F8EAF6',
          inversePrimary: '#F49470',
          primaryFixed: '#F6C0A7',
          onPrimaryFixed: '#4D1E0B',
          primaryFixedDim: '#EE9376',
          onPrimaryFixedVariant: '#7C321E',
          secondaryFixed: '#D0BFE4',
          onSecondaryFixed: '#1A1024',
          secondaryFixedDim: '#B6A0C7',
          onSecondaryFixedVariant: '#493654',
          tertiaryFixed: '#F4D38C',
          onTertiaryFixed: '#5B3700',
          tertiaryFixedDim: '#D3B478',
          onTertiaryFixedVariant: '#8C6B20',
          surfaceDim: '#EADFE6',
          surfaceBright: '#FFF7F4',
          surfaceContainerLowest: '#FFFFFF',
          surfaceContainerLow: '#FAF0ED',
          surfaceContainer: '#F4E8E5',
          surfaceContainerHigh: '#EEE2DF',
          surfaceContainerHighest: '#E8DCD9',
        },
        dark: {
          primary: '#EE9376',
          surfaceTint: '#EE9376',
          onPrimary: '#4D1E0B',
          primaryContainer: '#7C321E',
          onPrimaryContainer: '#F6C0A7',
          secondary: '#B6A0C7',
          onSecondary: '#31263E',
          secondaryContainer: '#493654',
          onSecondaryContainer: '#D0BFE4',
          tertiary: '#D3B478',
          onTertiary: '#5B3700',
          tertiaryContainer: '#8C6B20',
          onTertiaryContainer: '#F4D38C',
          error: '#FFB4AB',
          onError: '#690005',
          errorContainer: '#93000A',
          onErrorContainer: '#FFDAD6',
          background: '#1C161E',
          onBackground: '#EDE0EC',
          surface: '#1C161E',
          onSurface: '#EDE0EC',
          surfaceVariant: '#4E4452',
          onSurfaceVariant: '#D0C4D3',
          outline: '#A798A6',
          outlineVariant: '#4E4452',
          shadow: '#000000',
          scrim: '#000000',
          inverseSurface: '#EDE0EC',
          inverseOnSurface: '#423748',
          inversePrimary: '#F49470',
          primaryFixed: '#F6C0A7',
          onPrimaryFixed: '#4D1E0B',
          primaryFixedDim: '#EE9376',
          onPrimaryFixedVariant: '#7C321E',
          secondaryFixed: '#D0BFE4',
          onSecondaryFixed: '#1A1024',
          secondaryFixedDim: '#B6A0C7',
          onSecondaryFixedVariant: '#493654',
          tertiaryFixed: '#F4D38C',
          onTertiaryFixed: '#5B3700',
          tertiaryFixedDim: '#D3B478',
          onTertiaryFixedVariant: '#8C6B20',
          surfaceDim: '#1A141B',
          surfaceBright: '#302A31',
          surfaceContainerLowest: '#120F13',
          surfaceContainerLow: '#272529',
          surfaceContainer: '#211B23',
          surfaceContainerHigh: '#2A242C',
          surfaceContainerHighest: '#342E36',
        },
    },
       space: {
        0: '0px',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        13: '52px',
        14: '56px',
        15: '60px',
        16: '64px',
        17: '68px',
        18: '72px',
        19: '76px',
        20: '80px',
        21: '84px',
        22: '88px',
        23: '92px',
        24: '96px',
        25: '100px',
        26: '104px',
        27: '108px',
        28: '112px',
        29: '116px',
        30: '120px',
      },
      boxShadow: {
        elevation1:
          '0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
        elevation2:
          '0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
        elevation3:
          '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.30)',
        elevation4:
          '0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px 0px rgba(0, 0, 0, 0.30)',
        elevation5:
          '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.30)',
      },
      borderRadius: {
        none: '0',
        extraSmall: '4px',
        small: '8px',
        medium: '12px',
        large: '16px',
        extraLarge: '28px',
        full: '1000px',
      },
      fontSize: {
        displayLarge: [
          '57px',
          {
            fontWeight: '400',
            lineHeight: '64px',
            letterSpacing: '-0.25px',
          },
        ],
        displayMedium: [
          '45px',
          {
            fontWeight: '400',
            lineHeight: '52px',
            letterSpacing: '0',
          },
        ],
        displaySmall: [
          '36px',
          {
            fontWeight: '400',
            lineHeight: '44px',
            letterSpacing: '0',
          },
        ],
        headlineLarge: [
          '32px',
          {
            fontWeight: '400',
            lineHeight: '40px',
            letterSpacing: '0',
          },
        ],
        headlineMedium: [
          '28px',
          {
            fontWeight: '400',
            lineHeight: '36px',
            letterSpacing: '0',
          },
        ],
        headlineSmall: [
          '24px',
          {
            fontWeight: '400',
            lineHeight: '32px',
            letterSpacing: '0',
          },
        ],
        titleLarge: [
          '22px',
          {
            fontWeight: '400',
            lineHeight: '28px',
            letterSpacing: '0',
          },
        ],
        titleMedium: [
          '16px',
          {
            fontWeight: '500',
            lineHeight: '24px',
            letterSpacing: '0.15px',
          },
        ],
        titleSmall: [
          '14px',
          {
            fontWeight: '500',
            lineHeight: '20px',
            letterSpacing: '0.1px',
          },
        ],
        bodyLarge: [
          '16px',
          {
            fontWeight: '400',
            lineHeight: '24px',
            letterSpacing: '0.5px',
          },
        ],
        bodyMedium: [
          '14px',
          {
            fontWeight: '400',
            lineHeight: '20px',
            letterSpacing: '0.25px',
          },
        ],
        bodySmall: [
          '12px',
          {
            fontWeight: '400',
            lineHeight: '16px',
            letterSpacing: '0.4px',
          },
        ],
        labelLarge: [
          '14px',
          {
            fontWeight: '500',
            lineHeight: '20px',
            letterSpacing: '0.1px',
          },
        ],
        labelMedium: [
          '12px',
          {
            fontWeight: '500',
            lineHeight: '16px',
            letterSpacing: '0.5px',
          },
        ],
        labelSmall: [
          '11px',
          {
            fontWeight: '500',
            lineHeight: '16px',
            letterSpacing: '0.5px',
          },
        ],
      },
      transitionDuration: {
        short1: '50ms',
        short2: '100ms',
        short3: '150ms',
        short4: '200ms',
        medium1: '250ms',
        medium2: '300ms',
        medium3: '350ms',
        medium4: '400ms',
        long1: '450ms',
        long2: '500ms',
        long3: '550ms',
        long4: '600ms',
        extraLong1: '700ms',
        extraLong2: '800ms',
        extraLong3: '900ms',
        extraLong4: '1000ms',
      },
      transitionDelay: {
        short1: '50ms',
        short2: '100ms',
        short3: '150ms',
        short4: '200ms',
        medium1: '250ms',
        medium2: '300ms',
        medium3: '350ms',
        medium4: '400ms',
        long1: '450ms',
        long2: '500ms',
        long3: '550ms',
        long4: '600ms',
        extraLong1: '700ms',
        extraLong2: '800ms',
        extraLong3: '900ms',
        extraLong4: '1000ms',
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.2, 0, 0, 1)',
        standardDecelerate: 'cubic-bezier(0, 0, 0, 1)',
        standardAccelerate: 'cubic-bezier(0.3, 0, 1, 1)',
        emphasized: 'cubic-bezier(0.2, 0, 0, 1.0)',
        emphasizedDecelerate: 'cubic-bezier(0.05, 0.7, 0.1, 1)',
        emphasizedAccelerate: 'cubic-bezier(0.3, 0, 0.8, 0.15)',
        legacy: 'cubic-bezier(0.4, 0, 0.2, 1.0)',
        legacyDecelerate: 'cubic-bezier(0, 0, 0.2, 1)',
        legacyAccelerate: 'cubic-bezier(0.4, 0, 1, 1)',
        linear: 'cubic-bezier(0, 0, 1, 1)',
      },
    },
  },
  plugins: [],
};