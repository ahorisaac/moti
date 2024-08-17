import React from "react";
import { View, StyleSheet, Text, Pressable, Dimensions } from "react-native";
import { MotiView, useAnimationState, AnimatePresence } from "moti";

const { width, height } = Dimensions.get("screen");

const PresenceApp = () => {
  const [shown, setShown] = React.useState(true);

  const toggle = () => setShown((state) => !state);

  return (
    <Pressable onPress={toggle} style={styles.container}>
      <Box from="#0099cc" to={`#ffff00`} />
    </Pressable>
  );
};

const Box = ({ from, to }) => {
  return (
    <MotiView
      from={{ backgroundColor: from }}
      animate={{ backgroundColor: ["#4f2b40", to, "#840294"] }}
      transition={{ type: "timing", duration: 3000 }}
      style={[styles.shape]}
    />
  );
};

const App = () => {
  const [pressed, setPressed] = React.useState(false);

  const fadeInState = useAnimationState({
    from: {
      opacity: 0,
      rotate: "40deg",
    },
    to: {
      opacity: 1,
      rotate: "0deg",
    },
    up: {
      opacity: 1,
      scale: 2,
    },
  });

  const onPress = () => {
    if (fadeInState.current === "to") {
      fadeInState.transitionTo("up");
    }
  };

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        setPressed(!pressed);
      }}
    >
      <MotiView
        // animate={{
        //   translateY: pressed ? 100 : 0,
        // }}
        state={fadeInState}
        delay={500}
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
    backgroundColor: "#792bca",
    borderRadius: 16,
  },
});

export default PresenceApp;
