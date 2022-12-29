
import base from '@rebass/preset'
import { merge } from 'lodash'

export const breakpoints = [32, 48, 64].map(w => `${w}em`)

export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

export const fontSizes = [14, 16, 20, 24, 32, 48, 64, 96, 128]

export const palette = {
  darker: '#121217',
  dark: '#17171d',
  darkless: '#252429',
  bandark: '#1b1a1f',
  // greyscale
  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  muted: '#8492a6',
  smoke: '#3f3f3f',
  snow: '#f9fafc',
  white: '#ffffff',
  yellow: '#eed35a',
  darkgrey: '#0e0e0e',
  lightgrey: '#DADADA',
  mutedaccent: '#c69152',
  // brand
  primary: '#eed35a',
  primaryWash: '#ffdc89',
  /*
  alt: '#007a87',
  altWash: '#bfe6ea',
  altWashLight: '#dffbfd',
  altLight: '#009aab',
  altDark: '#004f58',
  accent: '#ff5a5f',
  accentLight: '#ff7e82',
  accentWash: '#ffd4d5',
  accentDark: '#e00007',
  success: '#3fb34f',
  error: '#b23f42',
  cool: '#00bdde',
  coolWash: '#7cecff'
  */
  alt: '#13cfbf',
  altDark: '#05386b',
  altLight: '#6ed5fa',
  altWash: '#379683',
  altWashLight: '#9cf0df',
  accent: '#5cdb95',
  accentWash: '#befad9',
  accentLight: '#8ee4af',
  accentDark: '#0C7681',
  success: '#3fb34f',
  error: '#b23f42',
  cool: '#00bdde',
  coolWash: '#7cecff',
  lemonade: '#ff5a5f'
}

const theme = merge(base, {
  breakpoints,
  space,
  fontSizes,
  initialColorMode: 'light',
  colors: {
    ...palette,
    text: palette.lightgrey,
    background: palette.darkgrey,
    cards: palette.yellow,
    muted: palette.muted,
    sunken: palette.smoke,
    bannerBG: palette.alt,
    bannerColor: palette.yellow,
    bannerColorAlt: palette.yellow,
    coolBg: palette.cool,
    modes: {
      dark: {
        text: palette.white,
        background: palette.dark,
        cards: palette.darkless,
        sunken: palette.black,
        // primaryWash: '#3f3822',
        primaryWash: palette.primaryWash,
        bannerBG: palette.bandark,
        //bannerColor: palette.primary,
        bannerColor: palette.coolWash,
        bannerColorAlt: palette.primaryWash,
        coolBg: palette.dark,
        cards: palette.darkless,
      }
    }
  },
  fonts: {
    body:
      'Nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
    heading: 'inherit',
    mono: 'Menlo, monospace'
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
    tight: 0.875
  },
  fontWeights: {
    body: '400',
    medium: '700',
    mediumbold: '800',
    bold: '900'
  },
  letterSpacings: {
    heading: '-0.05em',
    caps: '0.05em'
  },
  sizes: {
    superslim: 512,
    slim: 640,
    narrow: 768,
    container: 1024,
    wide: 1536
  },
  radii: {
    default: 6,
    extra: 9,
    circle: 99999
  },
  shadows: {
    card: '0 4px 8px rgba(0, 0, 0, 0.125)',
    sheet: '0 8px 32px rgba(0, 0, 0, 0.0625)'
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    }
  },
  variants: {
    container: {
      width: '100%',
      maxWidth: 'container',
      mx: 'auto',
      px: 3
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    },
    card: {
      outline: "2px dotted yellow",
      bg: 'none',
      p: [3, 4],
      borderRadius: 'extra',
      boxShadow: 'card'
    },
    innerCard:{
      bg:'mutedaccent',
      p: [1,1],
      padding: "1em !important",
      margin: "1em !important",
      borderRadius:'extra',
    },
    sheet: {
      bg: 'cards',
      borderRadius: 'extra',
      boxShadow: 'sheet',
      overflow: 'hidden'
    },
    avatar: {
      borderRadius: 'circle',
      objectFit: 'cover',
      objectPosition: 'center',
      flexShrink: 0
    }
  },
  styles: {
    a: {
      color: 'primary',
      cursor: 'pointer',
      ':hover, :focus': {
        color: 'alt'
      }
    },
    p: {
      fontFamily: 'mono',
    },
    img: {
      maxWidth: '100%',
      height: 'auto'
    },
    navitem: {
      cursor: 'pointer',
      borderRadius: 'circle',
      fontWeight: 'medium',
      fontSize: 2,
      lineHeight: 'body',
      textDecoration: 'none',
      py: 1,
      px: [2, 3],
      mx: [null, 1],
      transition: 'background .125s ease-in-out',
      ':focus, :hover, :active': {
        bg: 'sunken'
      }
    }
  }
})

export default theme
