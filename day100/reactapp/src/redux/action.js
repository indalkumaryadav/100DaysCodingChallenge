import axios from "axios";

export const getPosts = () => async (dispatch) => {
  const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
  dispatch({
    type: "GET_POSTS",
    payload: result.data,
  });
};

export const createPost = (data) => async (dispatch) => {
  const result = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    data
  );
  dispatch({
    type: "CREATE_POST",
    payload: result.data,
  });
};
