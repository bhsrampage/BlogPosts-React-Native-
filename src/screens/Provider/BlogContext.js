import createContext from "./createContext";
import jsonServer from "../../api/jsonServer";

const getBlog = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts");

    dispatch({ type: "get_blogpost", payload: response.data });
  };
};

const addBlog = () => {
  return async (title, content, callBack) => {
    await jsonServer.post("/blogposts", { title, content });
    callBack();
  };
};

const deleteBlog = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlog = (dispatch) => {
  return async (id, title, content, callBack) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    dispatch({ type: "edit_blogpost", payload: { title, content, id } });
    callBack();
  };
};

const blogReducer = (state, action) => {
  switch (action.type) {
    /*case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
*/
    case "delete_blogpost":
      return state.filter((blogPosts) => blogPosts.id != action.payload);

    case "edit_blogpost":
      return state.map((blogpost) => {
        if (blogpost.id === action.payload.id) {
          return action.payload;
        } else return blogpost;
      });

    case "get_blogpost":
      return action.payload;
    default:
      return state;
  }
};

export const { Context, Provider } = createContext(
  blogReducer,
  { addBlog, deleteBlog, editBlog, getBlog },
  []
);
