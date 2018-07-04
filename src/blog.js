import React from "react";
import YouTube from "react-youtube";

const Blog = props => {
  const style_div = {
    background: "#EAE7DC",
    border: "3px solid #8E8D8A",
    borderRadius: "5px",
    margin: "10px auto",
    padding: "8px",
    width: "auto",
    height: "auto",
    fontFamily: "Verdana"
  };
  const opts = {
    width: "450",
    height: "300"
  };
  return (
    <div style={style_div}>
      <h1>{props.blg_title}</h1>
      <p>{props.blg_content}</p>
      <YouTube src={props.blg_url} opts={opts} />
    </div>
  );
};

export default Blog;
