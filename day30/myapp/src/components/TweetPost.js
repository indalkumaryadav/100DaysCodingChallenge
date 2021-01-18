import React from "react";
import "./tweet_post.css";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";

function TweetPost({ displayName, username, verified, text, image, Avatar }) {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar src="" />
      </div>
      <div className="post_body">
        <div className="post_headerText">
          <h3>
            Indal
            <span>
              <VerifiedUserOutlinedIcon />
            </span>
          </h3>
        </div>
      </div>
      <div className="post_description">
        <h3>Description</h3>
      </div>
    </div>
  );
}

export default TweetPost;
