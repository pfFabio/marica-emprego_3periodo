import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/temaGlobal";
import { lightTheme, darkTheme } from "../src/theme";
import { BrowserRouter } from "react-router-dom";

/** @type { import('@storybook/react').Preview } */
const preview = {
  globalTypes: {
    theme: {
      name: "Theme", // Nome do controle
      description: "Global theme for components",
      defaultValue: "light", // Valor padrão
      toolbar: {
        icon: "circlehollow", // Ícone no toolbar
        items: [
          { value: "light", title: "Light Theme" },
          { value: "dark", title: "Dark Theme" },
        ],
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme === "dark" ? darkTheme : lightTheme;
      return (
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Story />
          </ThemeProvider>
        </BrowserRouter>
      );
    },
  ],
};

export default preview;
