import { Skeleton } from "moti/skeleton";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { FadeIn, Layout } from "react-native-reanimated";

const ContactListItem = ({ contact }) => {
  return (
    <View style={styles.container}>
      {/* if contact == null 👉 list is loading */}
      <Skeleton.Group show={contact == null}>
        <Skeleton
          height={70}
          width={70}
          radius={"round"}
          colorMode="light"
          transition={{
            type: "timing",
            duration: 2000,
          }}
          backgroundColor="#D4D4D4"
        >
          {contact && (
            <Animated.View
              layout={Layout}
              entering={FadeIn.duration(1500)}
              style={styles.circleContainer}
            >
              <Text style={{ fontSize: 25, color: "#fff" }}>
                {contact.name[0]}
              </Text>
            </Animated.View>
          )}
        </Skeleton>

        <View style={{ marginLeft: 15 }}>
          <Skeleton
            height={30}
            width={"80%"}
            colorMode="light"
            transition={{
              type: "timing",
              duration: 2000,
            }}
            backgroundColor="#D4D4D4"
          >
            {contact && (
              <Animated.Text
                layout={Layout}
                entering={FadeIn.duration(1500)}
                style={{ fontSize: 25 }}
              >
                {contact.name}
              </Animated.Text>
            )}
          </Skeleton>

          <View style={{ height: 5 }} />

          <Skeleton
            height={25}
            width={"70%"}
            colorMode="light"
            transition={{
              type: "timing",
              duration: 2000,
            }}
            backgroundColor="#D4D4D4"
          >
            {contact && (
              <Animated.Text
                layout={Layout}
                entering={FadeIn.duration(1500)}
                style={{ fontSize: 20 }}
              >
                {contact.email}
              </Animated.Text>
            )}
          </Skeleton>
        </View>
      </Skeleton.Group>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 120,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  circleContainer: {
    height: 70,
    aspectRatio: 1,
    backgroundColor: "#005CB7",
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ContactListItem;
