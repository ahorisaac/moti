import React, { useState, useCallback, useEffect, useMemo } from "react";
import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native";
import ContactListItem from "./ContactListItem";

const SkeletonAnimation = () => {
  const [contacts, setContacts] = useState();

  const contactPlaceholderList = useMemo(() => {
    return Array.from({ length: 15 }, () => null);
  }, []);

  const fetchContacts = useCallback(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);

    // wait for 2000ms to stimulate loading
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setContacts(data);
  }, []);

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar />

      <FlatList
        data={contacts ?? contactPlaceholderList}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{ height: 1, width: "100%", backgroundColor: "#CED0CE" }}
            />
          );
        }}
        renderItem={({ item }) => {
          return <ContactListItem contact={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
});

export default SkeletonAnimation;
