import React from "react";

const style = {
  width: "100%",
  backgroundColor: "#2C3531",
  color: "#ff6600",
  textAlign: "center",
  height: "5rem",
  fontFamily: "Verdana",
  top: "0",
  padding: "0.5px",
  textShadow:"1px 0.5px #ffccb3"
};
const Header = () => {
  return (
    <header style={style}>
      <h1>BlogRiter</h1>
    </header>
  );
};

export default Header;
