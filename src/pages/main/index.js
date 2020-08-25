import React, { Component } from "react";

import "../../styles/stylesheet.css";
import Header from "../../components/header/index";
import Banner from "../../components/banner";
import Footer from "../../components/footer";

export default class MainPage extends Component {
  componentDidMount() {
    document.title = 'Painel Administrativo - SaintMC';
  }

  render() {
    return (
      <>
        <Header />
        <Banner />
        <div className="report-list"></div>
        <Footer />
      </>
    );
  }
}
