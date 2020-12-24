import React, { useContext } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { Context } from "./Provider/BlogContext";

const ShowScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const { state } = useContext(Context);

  const blogPost = state.find((post) => post.id == id);

  return (
    <View>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 15,
    marginLeft: Dimensions.get("screen").width / 3,
  },
  content: {
    fontSize: 20,
    margin: 15,
  },
});

export default ShowScreen;
