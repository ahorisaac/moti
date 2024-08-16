import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MotiView } from "moti";

const App = () => {
  return (
    <View style={styles.container}>
      <MotiView
        from={{ translateY: -20 }}
        animate={{
          translateY: 250,
        }}
        transition={{
          type: "timing",
          loop: false,
          repeat: 4,
          repeatReverse: true,
        }}
        style={styles.shape}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
  },
  shape: {
    width: 250,
    height: 250,
    backgroundColor: "#41b872",
    borderRadius: 16,
  },
});

export default App;
