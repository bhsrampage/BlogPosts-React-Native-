import React, { useContext } from "react";
import BlogPostForm from "../Components/BlogPostForm";
import { Context } from "./Provider/BlogContext";

const EditScreen = ({ navigation, route }) => {
  const { state, editBlog } = useContext(Context);
  const { id } = route.params;

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      labels={{ title: "Edit Title", content: "Edit Content" }}
      onSubmit={(title, content) =>
        editBlog(id, title, content, () => navigation.goBack())
      }
    />
  );
};

export default EditScreen;
