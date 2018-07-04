import React from "react";

const style = {
  width: "100%",
  backgroundColor: "#2C3531",
  color: "#ff6600",
  textAlign: "center",
  height: "4rem",
  fontFamily: "Verdana",
  padding: "1px",
  bottom: "0"
};

const Footer = () => {
  return (
    <footer style={style}>
      <h6> &copy; Manikantan R, 2018</h6>
    </footer>
  );
};

export default Footer;
