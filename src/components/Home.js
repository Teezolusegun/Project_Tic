import React, { Component } from "react";
import DisplayTime from "./DisplayTime";
import Adding from "./Input";
import Footer from "./Footer";
import Header from "./Header";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <DisplayTime />
        <Adding />
        <Footer />
      </div>
    );
  }
}
export default Home;
