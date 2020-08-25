import React, { Component } from "react";
import './style.css'

export default class Banner extends Component {
  render() {
    return (
      <>
        <div className="bg-nav-loja text-center">
            <a href="https://saintmc.net">
                <img className="logo-img" src="logo.png" alt="Logo SaintMC" width="260" style={{position: "relative", marginTop: "2.25em"}}/>
            </a>
        </div>
      </>
    );
  }
}
