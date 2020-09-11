import React, { Component } from "react";
import api from "../../services/api";

import "../../styles/stylesheet.css";
import Header from "../../components/header/index";
import Footer from "../../components/footer";

export default class Report extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);
  }

  state = {
    reports: [],
  };

  componentDidMount() {
    this.loadReports();
  }

  loadReports = async () => {
    const response = await api.get("account/ranking");

    this.setState({ reports: response.data });
  };

  render() {
    const { reports } = this.state;

    return (
      <>
        <Header />
        <div className="report-list"></div>
        <Footer />
      </>
    );
  }
}
