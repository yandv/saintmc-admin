import React, { Component } from "react";

import { Link, Redirect } from "react-router-dom";
import api from "../../components/admin/api";

import { login, isLogged } from '../../components/auth/api'

import "./style.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "String",
      password: "String",

      error: false,
      errorMessage: "None",
      loggedIn: false,

      authToken: "String",
      user: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();

    login("yandv", "pinto")
    this.setState({ loggedIn: true });

    return true;
  }

  render() {

    if (this.state.loggedIn) {
      return (
        <Redirect to="/banimentos" />
      );
    }

    return (
      <>
        <div
          className="row display-none-mobile-login"
          style={{ height: "100vh", marginLeft: "0", marginRight: "0" }}
        >
          <div
            className="col-md-4"
            style={{ height: "100vh", paddingLeft: "0", paddingRight: "0" }}
          >
            <div className="card-login-pc">
              <h3 className="text-center" style={{ marginBottom: "30px" }}>
                <strong>Login</strong>
              </h3>
              <form onSubmit={this.handleSubmit} id="register-form">
                <div className="form-group">
                  <label htmlFor="username" className="label-login">
                    {" "}
                    Usuário
                  </label>
                  <input
                    required
                    type="username"
                    className="input-login"
                    id="username"
                    name="username"
                    placeholder="Seu usuário"
                    onChange={(e) => {
                      this.setState({ username: e.target.value });
                    }}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="password" className="label-login">
                    {" "}
                    Senha
                  </label>
                  <input
                    required
                    type="password"
                    className="input-login"
                    id="password"
                    name="password"
                    placeholder="Sua senha"
                    onChange={(e) => {
                      this.setState({ password: e.target.value });
                    }}
                  />
                </div>
                {this.state.error && (
                  <div className="text-center">
                    <p>Usuário ou senha incorretos!</p>
                  </div>
                )}
                <button type="submit"> Logar </button>
              </form>
            </div>
          </div>
          <div
            className="col fundo-pc"
            style={{ height: "100vh", paddingLeft: "0", paddingRight: "0" }}
          ></div>
        </div>

        <div className="display-none-pc-login fundo-mobile">
          <div
            className="container"
            style={{
              height: "100vh",
              marginLeft: "0",
              marginRight: "0",
              display: "flex",
              maxWidth: "none",
            }}
          >
            <div
              className="col"
              style={{ height: "100vh", paddingLeft: "0", paddingRight: "0" }}
            >
              <div className="card-login page-start">
                <div className="text-center">
                  <img
                    style={{ marginBottom: "3em" }}
                    src="/logo128.png"
                    alt="Logo"
                  />
                </div>
                <h3 style={{ marginBottom: "30px" }}>
                  <strong>Login</strong>
                </h3>
                <form
                  onSubmit={(event) => this.handleSubmit(event)}
                  id="register-form"
                >
                  <div className="form-group">
                    <label htmlFor="username" className="label-login">
                      {" "}
                      Usuário
                    </label>
                    <input
                      required
                      type="username"
                      className="input-login"
                      id="username"
                      name="username"
                      placeholder="Seu usuário"
                      onChange={(e) => {
                        this.setState({ username: e.target.value });
                      }}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="password" className="label-login">
                      {" "}
                      Senha
                    </label>
                    <input
                      required
                      type="password"
                      className="input-login"
                      id="password"
                      name="password"
                      placeholder="Sua senha"
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                      }}
                    />
                  </div>
                  {this.state.error && (
                    <div className="text-center">
                      <p>Usuário ou senha incorretos!</p>
                    </div>
                  )}
                  <button type="submit"> Logar </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  /*render() {
    return (
      <>
        <div>
          <strong> Logar </strong>
          <form onSubmit={this.handleSubmit} id="register-form">
            <div className="input-block">
              <label htmlFor="username"> Username </label>
              <input
                name="username"
                id="username"
                required
                value={this.state.username}
                onChange={(e) => {
                  this.setState({ username: e.target.value });
                }}
              />
              {this.state.error && (
                <p>The username or password provided were incorrect!</p>
              )}
            </div>
            <div className="input-block">
              <label htmlFor="password"> Senha </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                value={this.state.password}
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                }}
              />
            </div>
            <button type="submit"> Logar! </button>
            <Link to="/register">Crie sua conta</Link>
          </form>
        </div>
      </>
    );
  }*/
}
