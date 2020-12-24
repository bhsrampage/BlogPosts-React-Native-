import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

const BlogPostForm = ({ initialValues, labels, onSubmit }) => {
  const [title1, setTitle] = useState(initialValues.title);
  const [content1, setContent] = useState(initialValues.content);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{labels.title}</Text>
        <TextInput
          style={styles.input}
          value={title1}
          onChangeText={(text) => setTitle(text)}
        />
      </View>
      <View style={{ paddingTop: 100 }}>
        <Text style={styles.text}>{labels.content}</Text>
        <TextInput
          style={styles.input}
          value={content1}
          onChangeText={(text) => setContent(text)}
        />
      </View>
      <Button title="Save" onPress={() => onSubmit(title1, content1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    margin: 10,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    margin: 5,
  },
  button: {
    height: 10,
    width: 20,
    justifyContent: "center",
  },
});

export default BlogPostForm;
