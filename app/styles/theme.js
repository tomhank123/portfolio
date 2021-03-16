import mixins from './mixins';

const theme = {
  bp: {
    mobileS: 'max-width: 330px',
    mobileM: 'max-width: 400px',
    mobileL: 'max-width: 480px',
    tabletS: 'max-width: 600px',
    tabletL: 'max-width: 768px',
    desktopXS: 'max-width: 900px',
    desktopS: 'max-width: 1080px',
    desktopM: 'max-width: 1200px',
    desktopL: 'max-width: 1400px',
  },
  typography: {
    htmlFontSize: 16,
    fontFamily:
      '"Calibre", "San Francisco", "SF Pro Text", -apple-system, system-ui, sans-serif',
    fontMono: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  shape: {
    borderRadius: 4,
  },
  pallete: {
    common: {
      white: '#e6f1ff',
    },
    primary: {
      main: '#3B6064',
      dark: '#364958',
      light: '#55828B',
      lightest: '#f6fff8',
      shadow: 'rgba(2,12,27,0.7)',
    },
    secondary: {
      main: '#cce3de',
      light: '#eaf4f4',
      lightest: '#95D5B2',
    },
    green: {
      main: '#87BBA2',
      tint: '#C9E4CA',
    },
  },
  transitions: {
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    duration: '0.25s',
  },
  mixins,
};

export default theme;
