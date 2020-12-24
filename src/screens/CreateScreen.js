import React, { useContext } from "react";
import { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { Context } from "./Provider/BlogContext";
import BlogPostForm from "../Components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlog } = useContext(Context);

  return (
    <BlogPostForm
      initialValues={{ title: "", content: "" }}
      labels={{ title: "Enter Title", content: "Enter Content" }}
      onSubmit={(title, content) =>
        addBlog(title, content, () => navigation.navigate("Index"))
      }
    />
  );
};

export default CreateScreen;
