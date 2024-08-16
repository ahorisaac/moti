import React from "react";
import { View, StyleSheet, Text, Pressable, Dimensions } from "react-native";
import { MotiView } from "moti";

const { width, height } = Dimensions.get("screen");

const App = () => {
  const [pressed, setPressed] = React.useState(false);
  const [y, setY] = React.useState(100);

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        // setPressed(!pressed);
        setY(
          Math.floor((Math.random() * height) / 2) * Math.random() > 0.5
            ? -1
            : 1
        );
      }}
    >
      <MotiView
        animate={{
          translateY: y,
        }}
        style={styles.shape}
      />
    </Pressable>
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
