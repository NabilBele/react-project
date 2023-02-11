import React, { Component } from "react";
import "./styles/vedio.css";

class VideoPlayer extends Component {
  render() {
    return (
      <div>
        <iframe
          className="youtubeVid"
          src="https://www.youtube.com/embed/6XrTe5Agki4?list=RD6XrTe5Agki4"
          title="Lady Gaga - Bloody Mary (Sped Up / TikTok Remix)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    );
  }
}

export default VideoPlayer;
