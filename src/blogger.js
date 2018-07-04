import React from "react";
import Blog from "./blog";

class Blogger extends React.Component {
  constructor(props) {
    super(props),
      (this.state = {
        blog_arr: [],
        blg_title: "",
        blg_content: "",
        blg_url: "",
        errorHandler: ""
      });
    this.textHandler = this.textHandler.bind(this);
  }

  textHandler = e => {
    var name = e.target.name;
    var value = e.target.value;
    this.setState({ [name]: value });
  };

  submitHandler = e => {
    let blg_obj = {};
    if (
      this.state.blg_title === "" ||
      this.state.blg_content === "" ||
      this.state.blg_url === ""
    ) {
      this.setState({ errorHandler: "Please enter all mandatory values" });
    } else {
      blg_obj = {
        blg_title: this.state.blg_title,
        blg_content: this.state.blg_content,
        blg_url: this.state.blg_url
      };
      var current_arr = [...this.state.blog_arr, blg_obj];
      this.setState({
        blog_arr: current_arr,
        errorHandler: "",
        blg_title: "",
        blg_content: "",
        blg_url: ""
      });
    }
  };

  render() {
    const BlogWriter = {
      background: "#EAE7DC",
      border: "3px solid #8E8D8A",
      borderRadius: "5px",
      margin: "10px auto",
      padding: "8px",
      width: "auto",
      height: "auto",
      color: "#E85A4F",
      fontFamily: "Verdana",
      textShadow:"1px 0.5px #ffccb3"
    };
    const errorhandle = {
      color: "red",
      fontWeight: "bold"
    };
    const butstyle = {
      background: "white",
      border: "2px solid #E98074",
      color: "#E85A4F",
      padding: "8px",
      borderRadius: "5px",
      width: "20%",
      fontWeight: "bold",
      fontSize: "17px",
      ontFamily: "Verdana"
    };
    const txtstyle = {
      background: "#2C3531",
      borderStyle: "none",
      color: "white",
      padding: "8px",
      borderRadius: "2px",
      width: "50%",
      fontWeight: "bold",
      fontFamily: "Verdana",
      
    };
    return (
      <div>
        <div style={BlogWriter}>
          <h3>
            <p>Title</p>
          </h3>
          <input
            style={txtstyle}
            type="text"
            name="blg_title"
            onChange={this.textHandler}
            value={this.state.blg_title}
          />
          <h3>Content</h3>
          <textarea
            style={txtstyle}
            name="blg_content"
            onChange={this.textHandler}
            value={this.state.blg_content}
            rows="10"
            cols="50"
          />
          <h3>Media URL</h3>
          <input
            style={txtstyle}
            type="text"
            name="blg_url"
            onChange={this.textHandler}
            value={this.state.blg_url}
          />
          <p style={errorhandle}>{this.state.errorHandler}</p>
          <button style={butstyle} onClick={this.submitHandler.bind(this)}>
            Submit
          </button>
        </div>
        <div>
          {this.state.blog_arr.map(blg => {
            return (
              <Blog
                blg_title={blg.blg_title}
                blg_content={blg.blg_content}
                blg_url={blg.blg_url}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Blogger;
