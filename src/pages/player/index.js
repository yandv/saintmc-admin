import React, { Component } from "react";
import api from "../../components/admin/api";

import "../../styles/stylesheet.css";
import Header from "../../components/header/index";

import "./style.css";
import Footer from "../../components/footer";

export default class PlayerInfo extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    playerData: {},
  };

  componentDidMount() {
    const { playerName } = this.props.match.params;

    this.loadReports(playerName);

    document.title = "Informações do " + playerName;
  }

  loadReports = async (playerName) => {
    const response = await api.get("player/" + playerName);

    this.setState({ playerData: response.data });
  };

  render() {
    const { playerData } = this.state;

    return (
      <>
        <Header />

        <div>
          <p>{playerData.xp}</p>
        </div>

        <Footer />
      </>
    );
  }
}
