import styled from "styled-components";

export type ThemeMode = "light" | "dark";
declare module "styled-components" {
  export interface DefaultTheme {
    title: ThemeMode;

    colors: {
      primary: string;
      secundary: string;
      button: string;
      background: string;
      text: string;
    };

    heightDiv: number;
    circle: {
      color: string;
      bColor: string;
    };

    button: {
      backgroundColor: string;
      hoverColor: string;
    };

    searchButton: {
      background: string;
      backgroundInput: string;
      bgHover: string;
    };
  }
}
