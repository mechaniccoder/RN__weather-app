import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Loader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the Weather!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    color: "gray",
  },
});

export default Loader;
