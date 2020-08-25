import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <>
        <div class="bg-nav-loja text-center">
            <a href="https://saintmc.net">
                <img class="logo-img" src="./img/logo.png" alt="Logo SaintMC" width="260" style="position: relative; margin-top: 2.25em;"/>
            </a>
        </div>
      </>
    );
  }
}
