import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";

function VideoSidebar() {
  const [liked, setLiked] = useState(false);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderOutlinedIcon
            fontSize="large"
            onClick={(e) => setLiked(true)}
          />
        )}

        <p>100</p>
      </div>
      <div className="videoSidebar__button">
        <ChatBubbleOutlineOutlinedIcon fontSize="large" />
        <p>53453</p>
      </div>
      <div className="videoSidebar__button">
        <ShareOutlinedIcon fontSize="large" />
        <p>21312</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
