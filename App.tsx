import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  Roboto_500Medium,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_300Light,
} from "@expo-google-fonts/roboto";
import Routes from "./src/routes";
import AppLoading from "expo-app-loading";
import React from "react";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
