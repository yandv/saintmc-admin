import React, { Component } from "react";

import "../../styles/stylesheet.css";
import Header from "../../components/header/index";
import Banner from "../../components/banner";
import Footer from "../../components/footer";

import "./style.css";
import api from "../../services/api";

export default class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topBan: {
        name: "Ninguém",
        count: "-/-",
      },

      banCount: 0,
    };
  }

  componentDidMount() {
    this.loadInfo();
    document.title = "Painel Administrativo - SaintMC";
  }

  loadInfo = async (props) => {
    let response = await api.get("ban/top");

    this.setState({
      topBan: { name: response.data.name, count: response.data.count },
    });

    response = await api.get("ban/count");

    this.setState({ banCount: response.data.count });
  };

  render() {
    return (
      <>
        <Header />
        <Banner />
        <div className="container">
          <div className="row row-main-cards">
            <div className="col-md-4">
              <div className="main-cards first-main-card">
                <div className="main-cards-title">
                  <h3
                    className="text-center"
                    style={{ marginBottom: "0", fontSize: "1.42rem" }}
                  >
                    Total de jogadores <strong>banidos</strong>
                  </h3>
                </div>
                <div className="main-cards-body">
                  <p className="text-center">
                    <strong style={{ fontSize: "40px", padding: "0 10px" }}>
                      {this.state.banCount}
                    </strong>{" "}
                    banimentos.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="main-cards">
                <div className="main-cards-title">
                  <h3
                    className="text-center"
                    style={{ marginBottom: "0", fontSize: "1.42rem" }}
                  >
                    Membro da equipe com mais <strong>banimentos</strong>
                  </h3>
                </div>
                <div className="main-cards-body">
                  <p className="text-center">
                    {this.state.topBan.name} com{" "}
                    <strong style={{ fontSize: "40px", padding: "0 10px" }}>
                      {this.state.topBan.count}
                    </strong>{" "}
                    banimentos.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="main-cards">
                <div className="main-cards-title">
                  <h3
                    className="text-center"
                    style={{ marginBottom: "0", fontSize: "1.42rem" }}
                  >
                    Total de jogadores <strong>silenciados</strong>
                  </h3>
                </div>
                <div className="main-cards-body">
                  <p className="text-center">
                    <strong style={{ fontSize: "40px", padding: "0 10px" }}>
                      500
                    </strong>{" "}
                    silenciamentos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="report-list"></div>
        <Footer />
      </>
    );
  }
}
