import React from "react";
import ReactDOM from "react-dom";
import Blogger from "./blogger";
import Header from "./header";
import Footer from "./footer";
import "./style.css";

export default function App() {
  return (
    <div style={style}>
      <Header />
      <Blogger />
      <Footer />
    </div>
  );
}

const style = {
  backgroundColor: "#fff3e6"
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
