import React, { Component } from "react";

import "../../styles/stylesheet.css";
import Header from "../../components/header/index";
import Banner from "../../components/banner";
import Footer from "../../components/footer";

import './style.css'

export default class MainPage extends Component {
  componentDidMount() {
    document.title = 'Painel Administrativo - SaintMC';
  }

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
                  <h3 className="text-center" style={{marginBottom: "0", fontSize: "1.42rem"}}>Total de jogadores <strong>banidos</strong></h3>
                </div>
                <div className="main-cards-body">
                  <p className="text-center"><strong style={{fontSize: "40px", padding: "0 10px"}}>500</strong> banimentos.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="main-cards">
                <div className="main-cards-title">
                  <h3 className="text-center" style={{marginBottom: "0", fontSize: "1.42rem"}}>Membro da equipe com mais <strong>banimentos</strong></h3>
                </div>
                <div className="main-cards-body">
                  <p className="text-center">Avontz com <strong style={{fontSize: "40px", padding: "0 10px"}}>500</strong> banimentos.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="main-cards">
                <div className="main-cards-title">
                  <h3 className="text-center" style={{marginBottom: "0", fontSize: "1.42rem"}}>Total de jogadores <strong>silenciados</strong></h3>
                </div>
                <div className="main-cards-body">
                  <p className="text-center"><strong style={{fontSize: "40px", padding: "0 10px"}}>500</strong> silenciamentos.</p>
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
