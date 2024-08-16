import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MotiView } from "moti";

const App = () => {
  return (
    <View style={styles.container}>
      <MotiView
        from={{ opacity: 0, translateY: -100 }}
        animate={{ opacity: 1, translateY: 0 }}
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
    backgroundColor: "cyan",
    borderRadius: 16,
  },
});

export default App;
