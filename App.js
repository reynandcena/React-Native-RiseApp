import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";

import RiseStackNavigation from "./src/utils/navigations/StackNavigation";

export default function App() {
  const [loaded] = useFonts({
    NotoSansRegular: require("./assets/fonts/Noto-Sans-KR-Regular.otf"),
    NotoSansMedium: require("./assets/fonts/Noto-Sans-KR-Medium.otf"),
    NotoSansBold: require("./assets/fonts/Noto-Sans-KR-Bold.otf"),
    NotoSansBlack: require("./assets/fonts/Noto-Sans-KR-Black.otf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer>
      <RiseStackNavigation />
    </NavigationContainer>
  );
}
