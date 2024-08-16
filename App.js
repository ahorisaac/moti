import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { MotiView } from "moti";

const App = () => {
  const [pressed, setPressed] = React.useState(false);

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        setPressed(!pressed);
      }}
    >
      <MotiView
        animate={{
          translateY: pressed ? 100 : 0,
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
