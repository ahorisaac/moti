import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TouchableWithoutFeedback,
  useWindowDimensions,
  StatusBar,
  Image,
} from "react-native";
import { MotiView, MotiImage } from "moti";

const BasicRevealAnim = () => {
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <MotiImage
        source={require("../assets/images/image0.jpg")}
        style={{ width: width * 0.8, height: width * 0.8 }}
        from={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 100 }}
      />

      <MotiView
        from={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 300 }}
      >
        <Text style={styles.title}>Sweet Delicacy</Text>
        <Text style={styles.text}>
          Sweet Delicacy is the most preferred meal for tourists in the middle
          east. It is tasty and enticing!
        </Text>
      </MotiView>

      <TouchableWithoutFeedback onPress={() => console.log("🚀 Clicked!")}>
        <MotiView
          style={[styles.button, { width: width * 0.8 }]}
          from={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 500 }}
        >
          <Text style={styles.textButton}>Get Started </Text>
        </MotiView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F8E9B0",
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  text: {
    textAlign: "center",
    marginHorizontal: 35,
    color: "#000",
    lineHeight: 20,
  },
  button: {
    backgroundColor: "#FEC520",
    padding: 20,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
});

export default BasicRevealAnim;
