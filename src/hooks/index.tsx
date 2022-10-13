import { NavigationContainer } from "@react-navigation/native";
import React, { ReactNode } from "react";
import { MealContextProvider } from "./meal";
import { StatisticContextProvider } from "./statistics";

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <NavigationContainer>
      <MealContextProvider>
        <StatisticContextProvider>{children}</StatisticContextProvider>
      </MealContextProvider>
    </NavigationContainer>
  );
}

export { AppProvider };
