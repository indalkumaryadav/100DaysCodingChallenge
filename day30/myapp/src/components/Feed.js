import React from "react";
import "./feed.css";
import TweetBox from "./TweetBox";
import TweetPost from "./TweetPost";

function Feed() {
  return (
    <div className="feed">
      <div className="feed_header">
        <h3>Home</h3>
      </div>
      <TweetBox />
    </div>
  );
}

export default Feed;
