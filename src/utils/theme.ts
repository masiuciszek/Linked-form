import { DefaultTheme } from 'styled-components';


const theme: DefaultTheme = {
  borderRadius: '1rem',
  appSize: '10px',
  shadow: {
    lightShadow: '2px 5px 3px 0px rgba(1, 2, 8, 0.5)',
    darkShadow: '4px 10px 5px 0px rgba(12, 22, 00, 0.7)',
    blackShadow: '4px 10px 5px 0px rgba(2, 2, 8, 0.5)',
  },
  colors: {
    primary: '#102F66',
    secondary: '#1D4D7D',
    secondaryNext: '#3882B8',
    danger: '#e14f3f',
    light: '#6BA1CF',
    common: '#1B76FF',
    white: '#fff',
    whiteBlue: '#B0BCCF',
    offWhite: '#f3f3f3',
    darkRGBA: 'rgba(0,0,0,0.4)',
  },
  size: {
    maxWidth: '1000px',
    mainSpacing: '4px',
  },
  transition: {
    mainTransition: 'all 0.3s linear',
    secondaryTransition: 'all 0.3s ease-in-out',
    quickTransition: 'all 200ms ease-in-out',
  },
};

export default theme;
