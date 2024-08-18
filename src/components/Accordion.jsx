import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MotiView, useAnimationState, AnimatePresence } from "moti";

const { width, height } = Dimensions.get("screen");

const data = [...Array(3).keys()].map((i) => {
  return {
    key: `item-${i}`,
    title: `Title ${i}`,
    description: Array(10).fill(`test testing moti :D`),
  };
});

{
  /* 🏗️ accordion wrapper component */
}
const AccordionWrapper = () => {
  return (
    <View style={styles.container}>
      {data.map((item) => {
        return <Accordion key={item.key} item={item} />;
      })}
    </View>
  );
};

const useLayout = () => {
  const [layout, setLayout] = React.useState({
    height: 0,
  });

  const onLayout = (event) => {
    setLayout(event.nativeEvent.layout);
  };

  return { onLayout, layout };
};

{
  /* 🏗️ accordion component */
}
const Accordion = ({ item }) => {
  const { onLayout, layout } = useLayout();
  const [isOpen, setIsOpen] = React.useState(false);

  const onToggle = () => {
    setIsOpen((open) => !open);
  };

  return (
    <View style={styles.accordionItem}>
      <TouchableOpacity onPress={onToggle} style={styles.titleContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>

      <MotiView
        style={{ overflow: "hidden" }}
        animate={{ height: isOpen ? layout.height : 0 }}
        transition={{ type: "timing" }}
      >
        <Text style={styles.description}>{item.description.join(" ")}</Text>
      </MotiView>

      {layout.height === 0 && (
        <View onLayout={onLayout}>
          <Text style={styles.description}>{item.description.join(" ")}</Text>
        </View>
      )}
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
    backgroundColor: "#792bca",
    borderRadius: 16,
  },
  description: {
    fontSize: 14,
    color: "#f8f9fa",
    padding: 16,
  },
  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    padding: 20,
  },
  titleContainer: {
    padding: 12,
  },
  accordionItem: {
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 16,
    marginBottom: 16,
    marginHorizontal: 8,
  },
});

export default AccordionWrapper;
