import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { StatusBar } from "expo-status-bar";
import { Loading } from "./src/components/Loading";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
import { Routes } from "./src/routes/app.routes";
import { AppProvider } from "./src/hooks";

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <StatusBar style="dark" backgroundColor="transparent" translucent />
        {fontsLoaded ? <Routes /> : <Loading />}
      </AppProvider>
    </ThemeProvider>
  );
}
