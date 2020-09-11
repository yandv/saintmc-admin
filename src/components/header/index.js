import React, { Component } from "react";
import { Link } from "react-router-dom";

import { isLogged, logOut, getProfile } from "../../components/auth/api";

import "./style.css";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logged: false,
      username: getProfile()
    };
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg nav-top-two navbar-fixed-top">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img
                src="https://saintmc.net/img/logo.png"
                style={{ maxHeight: "65px" }}
              />
            </a>
            <button
              style={{ outline: "none", border: "none" }}
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                className="navbar-toggler-icon fa fa-bars"
                style={{ color: "white", fontSize: "20px" }}
              ></span>
            </button>

            <div className="collapse navbar-collapse" id="navigation">
              <ul className="mr-auto"></ul>
              <ul className="navbar-nav navbar-right">
                <li className="nav-item my-auto">
                  <Link to="/">
                    <span className="label label-nav label-custom-icon">
                      <i className="fa fa-home"></i>
                    </span>
                    {" Início"}
                  </Link>
                </li>
                <li className="nav-item my-auto">
                  <Link to="/banimentos">
                    <span className="label label-nav label-custom-icon">
                      <i className="fa fa-ban"></i>
                    </span>
                    {" Banimentos"}
                  </Link>
                </li>
                <li className="nav-item my-auto">
                  <Link to="/mutes">
                    <span className="label label-nav label-custom-icon">
                      <i className="fa fa-microphone-slash"></i>
                    </span>
                    {" Mutes"}
                  </Link>
                </li>
                <li className="nav-item my-auto">
                  <Link to="/reports">
                    <span className="label label-nav label-custom-icon">
                      <i className="fa fa-flag"></i>
                    </span>
                    {" Reports"}
                  </Link>
                </li>
                <li className="nav-item my-auto">
                  <Link to="/status" style={{ paddingRight: "20px" }}>
                    <span className="label label-nav label-custom-icon">
                      <i className="fa fa-signal"></i>
                    </span>
                    {" Status"}
                  </Link>
                </li>

                {isLogged() ? (
                  <li className="nav-item dropdown my-auto">
                    <a class="nav-link dropdown-toggle" href="#" id="menuDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img
                        className="logged-in-avatar"
                        src="https://media1.giphy.com/media/MtJwM5N4fuMgw/200.gif"
                        alt="Avatar"
                        width="40px"
                        height="40px"
                      />
                    </a>
                    <div class="dropdown-menu" style={{backgroundColor: "#ed9f17"}} aria-labelledby="menuDropdown">
                      <Link to="/dashboard" class="dropdown-item" href="#">Dashboard</Link>
                      <Link to="/profile" class="dropdown-item" href="#">Perfil de { this.state.username }</Link>
                      <Link to="/" class="dropdown-item" href="#" onClick={() => {logOut()}}>Sair</Link>
                    </div>
                  </li>
                ) : (

                  <li
                    className="nav-item my-auto"
                    style={{ marginLeft: "15px" }}
                  >
                    <Link
                      to="./login"
                      style={{
                        backgroundColor: "white",
                        color: "#1e1e1e",
                        borderRadius: "2px",
                      }}
                    >
                      <span className="label label-nav label-custom-icon">
                        <i className="fa fa-sign-in"></i>
                      </span>
                    </Link>
                  </li>

                )}
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
