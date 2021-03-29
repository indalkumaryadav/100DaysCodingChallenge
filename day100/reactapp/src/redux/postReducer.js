const initialState = {
  posts: [],
  post: null,
};

const post = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_POSTS":
      return {
        ...state,
        posts: payload,
      };

    default:
      return state;
  }
};

export default post;
