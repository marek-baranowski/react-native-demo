import React from "react";
import { AppRegistry } from "react-native";
import { NativeBaseProvider } from "native-base";
import App from "./App";

function Root() {
  return (
    <NativeBaseProvider>
      <App />
    </NativeBaseProvider>
  );
}

AppRegistry.registerComponent("App", () => Root);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root"),
});
