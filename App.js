import React from "react";
import { View } from "react-native";
import {
  AccordionWrapper,
  FlatListGridReveal,
  BasicRevealAnim,
} from "./src/components";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <BasicRevealAnim />
    </View>
  );
};

export default App;
