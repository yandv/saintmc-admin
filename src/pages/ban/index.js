import React, { Component } from "react";
import api from "../../components/admin/api";

import "../../styles/stylesheet.css";
import Header from "../../components/header/index";

import "./style.css";
import CardLoader from "../../components/content/loader";
import { isLogged } from "../../components/auth/api";
import Footer from "../../components/footer";

const C0 = 1;
const C1 = C0 * 1000;
const C2 = C1 * 1000;
const C3 = C2 * 1000;
const C4 = C3 * 60;
const C5 = C4 * 60;
const C6 = C5 * 24;

function loadTime(ban) {
  var now = new Date();
  var expire = new Date(new Date(ban.banExpire));

  let remaining = parseInt((expire.getTime() - now.getTime()) / 1000);

  let day = parseInt(remaining / (C6 / C3));
  let hours = parseInt(remaining / (C5 / C3) - day * 24);
  let minutes =
    parseInt(remaining / (C4 / C3)) - parseInt(remaining / (C5 / C3)) * 60;
  let seconds = parseInt(remaining) - parseInt(remaining / (C4 / C3)) * 60;

  let string = "";

  if (day > 0) {
    string = string + day + "d";
  }
  if (hours > 0) {
    string = string + (day > 0 ? ", " : "") + +hours + "h";
  }
  if (minutes > 0) {
    string = string + (hours > 0 ? ", " : "") + minutes + "m";
  }
  if (seconds > 0) {
    string = string + (minutes > 0 ? ", " : "") + seconds + "s";
  }

  return string;
}

export default class Ban extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bans: [],
      page: 0,
      loaded: false,

      time: 0,

      pageInfo: false,
      banId: 0,
      banInfo: {},
    };

    this.searchTimeout = 0;

    localStorage.setItem("eae", "joao");
  }

  componentDidMount() {
    this.loadBans();

    document.title = "Banimentos Gerais";

    this.interval = setInterval(() => {
      this.setState({ time: Date.now(), time: this.state.time + 1 });

      if (this.state.time % 30 === 0) {
        if (!this.state.pageInfo) this.loadBans();
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  loadBans = async (props) => {
    const response = await api.get(
      "ban/?page=" +
        this.state.page +
        (props && props.playerName ? "&playerName=" + props.playerName : "")
    );

    this.setState({ bans: response.data, loaded: true, time: 0 });
  };

  loadBan = async () => {
    const response = await api.get("ban/info/" + this.state.banId);

    if (!isLogged()) {
      this.context.router.push("/");
      return;
    }

    this.setState({ banInfo: response.data, banLoaded: true });
  };

  doSearch(event) {
    var searchText = event.target.value; // this is the search text

    if (this.searchTimeout) clearTimeout(this.searchTimeout);

    this.searchTimeout = setTimeout(() => {
      this.loadBans({ playerName: searchText });
      this.setState({ loaded: false, searchText });
    }, 300);
  }

  render() {
    if (this.state.pageInfo) {
      const { banInfo } = this.state;

      return (
        <>
          <Header />

          <div className="container text-center page-start">
            <h1>
              BAN{" "}
              <strong style={{ borderBottom: "1px solid #ed9f16" }}>
                {"#" + banInfo.id}
              </strong>
            </h1>
          </div>
          <div className="container">
            <div className="row" key="0">
              <div className="col-md-8">
                
              </div>
              <div className="col-md-4">

              </div>
              <div className="col-md-12 page-start">
                <button
                  className="ban-back-button"
                  onClick={(event) => {
                    this.setState({ pageInfo: false });
                    event.preventDefault();
                  }}
                >
                  <strong>←</strong>
                  voltar
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </>
      );
    }

    const { bans } = this.state;

    return (
      <>
        <Header />

        <div className="container text-center page-start">
          <h1>
            Banimentos{" "}
            <strong style={{ borderBottom: "1px solid #ed9f16" }}>
              Gerais
            </strong>
          </h1>
          <input
            type="search"
            className="ban-search"
            placeholder="Pesquise por um banimento..."
            onChange={(e) => this.doSearch(e)}
          />
        </div>
        <div className="container page-start">
          <div className="row" key="1">
            {!this.state.loaded ? (
              <>
                <div className="col-lg-3 cards-bans">
                  <div className="ban">
                    <CardLoader></CardLoader>
                  </div>
                </div>
                <div className="col-lg-3 cards-bans">
                  <div className="ban">
                    <CardLoader></CardLoader>
                  </div>
                </div>
                <div className="col-lg-3 cards-bans">
                  <div className="ban">
                    <CardLoader></CardLoader>
                  </div>
                </div>
                <div className="col-lg-3 cards-bans">
                  <div className="ban">
                    <CardLoader></CardLoader>
                  </div>
                </div>
                <div className="col-lg-3 cards-bans">
                  <div className="ban">
                    <CardLoader></CardLoader>
                  </div>
                </div>
                <div className="col-lg-3 cards-bans">
                  <div className="ban">
                    <CardLoader></CardLoader>
                  </div>
                </div>
                <div className="col-lg-3 cards-bans">
                  <div className="ban">
                    <CardLoader></CardLoader>
                  </div>
                </div>
                <div className="col-lg-3 cards-bans">
                  <div className="ban">
                    <CardLoader></CardLoader>
                  </div>
                </div>
              </>
            ) : bans.length === 0 ? (
              <div className="container">
                <div className="col-md-12 text-center">
                  <h3 style={{ textTransform: "none" }}></h3>
                  {this.state.searchText ? (
                    <p>
                      Nenhum banimento encontrado para{" "}
                      <strong>"{this.state.searchText}"</strong>.
                    </p>
                  ) : (
                    <p>Nenhum banimento encontrado em nossa base de dados.</p>
                  )}
                </div>
              </div>
            ) : (
              bans.map((ban) => (
                <div className="col-lg-3 cards-bans" key={ban.id}>
                  <div
                    className="ban"
                    onClick={(event) => {
                      if (!isLogged()) {
                        window.location = "/login";
                      } else {
                        this.setState({
                          pageInfo: true,
                          banInfo: ban,
                          banLoaded: false,
                        });
                      }
                      event.preventDefault();
                    }}
                  >
                    <div className="row align-middle">
                      <img
                        className="ban-avatar"
                        src={"https://mc-heads.net/avatar/" + ban.uniqueId}
                        alt="Avatar"
                        width="50px"
                        height="50px"
                      />
                      <div className="col">
                        <a
                          className="ban-link-reset"
                          href={"/player/" + ban.playerName}
                          onClick={(event) => event.stopPropagation()}
                        >
                          <p className="ban-nick">{ban.playerName}</p>
                        </a>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <span>Motivo:</span>
                          <span className="float-right-data">{ban.reason}</span>
                        </li>
                        <li className="list-group-item">
                          <span>Autor:</span>
                          <span className="float-right-data">
                            {ban.bannedBy}
                          </span>
                        </li>
                        <li className="list-group-item">
                          <span>Motivo:</span>
                          <span className="float-right-data">
                            {new Date(ban.banTime).toLocaleString()}
                          </span>
                        </li>
                      </ul>
                      <hr />
                      {ban.unbanned ? (
                        <p className="text-center unban">
                          <strong>
                            {ban.unbanReason === "APPEAL"
                              ? "Banimento revogado!"
                              : "Desbanido!"}
                          </strong>
                        </p>
                      ) : ban.banExpire === -1 ? (
                        <p className="text-center">
                          <strong className="perm-ban banned">
                            Conta banida permanentemente do servidor
                          </strong>
                        </p>
                      ) : (
                        <p className="text-center">
                          <strong className="temp-ban banned">
                            Conta banida temporariamente
                            <br />
                            Expire em: {loadTime(ban)}
                          </strong>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
