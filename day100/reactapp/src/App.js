import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "./redux/action";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  console.log(posts);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div>
      <h1>Post</h1>
    </div>
  );
}

export default App;
