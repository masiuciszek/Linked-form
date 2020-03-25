import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    appSize: string;
    shadow: {
      lightShadow: string;
      darkShadow: string;
      blackShadow: string;
    };

    colors: {
      secondaryNext: string;
      primary: string;
      secondary: string;
      light: string;
      darkRGBA: string;
      whiteBlue: string;
      white: string;
      offWhite: string;
      danger: string;
      common: string;
    };
    size: {
      maxWidth: string;
      mainSpacing: string;
    };
    transition: {
      mainTransition: string;
      secondaryTransition: string;
      quickTransition: string;
    };
  }
}
