import React from "react";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HomePage from "./pages/home";
import { StatusBar } from "react-native";

export default function App() {

  return (
    <SafeAreaProvider>
      <StatusBar hidden style="light" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <HomePage />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
