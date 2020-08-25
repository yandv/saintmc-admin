import React, { Component } from "react";
import ContentLoader from "react-content-loader";

export default class CardLoader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ContentLoader
        speed={2}
        width={300}
        height={330}
        viewBox="0 0 300 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...this.props}
      >
        <rect x="213" y="-11" rx="3" ry="3" width="88" height="6" />
        <rect x="70" y="20" rx="3" ry="3" width="123" height="17" />
        <rect x="373" y="80" rx="3" ry="3" width="86" height="2" />
        <circle cx="30" cy="30" r="30" />
        <rect x="3" y="79" rx="0" ry="0" width="204" height="14" />
        <rect x="4" y="153" rx="0" ry="0" width="204" height="14" />
        <rect x="4" y="115" rx="0" ry="0" width="204" height="14" />
        <rect x="37" y="192" rx="0" ry="0" width="130" height="25" />
      </ContentLoader>
    );
  }
}
