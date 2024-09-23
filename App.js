import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  AccordionWrapper,
  FlatListGridReveal,
  BasicRevealAnim,
  SkeletonAnimation,
} from "./src/components";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <SkeletonAnimation />
    </View>
  );
};

export default App;
