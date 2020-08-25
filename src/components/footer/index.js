import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div
              className="col-5 footer-copy align-middle"
              style={{ textAlign: "center", flex: "inherit" }}
            >
              <div className="side-pad">
                <img src="/logo.png" height="100px" alt="Logo Footer" />
                <br />
                <br />
                <p>SaintMC © - Todos os direitos reservados.</p>
                <p>
                  <a href="https://loja.saintmc.net">Loja</a> |{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferer"
                    href="https://discord.saintmc.net"
                  >
                    Discord
                  </a>{" "}
                  |{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferer"
                    href="https://twitter.saintmc.net"
                  >
                    Twitter
                  </a>
                </p>
                <p style={{ fontSize: "13px" }}>
                  Desenvolvido por{" "}
                  <a href="https://twitter.com/allanmarcelino_" target="_blank">
                    yandv
                  </a>
                </p>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </footer>
    );
  }
}
