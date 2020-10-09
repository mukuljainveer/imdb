import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";

class Layout extends Component {
  render() {
    return (
      <>
        <Header navigate={this.props.navigation} />
        <div className="contentContainer">{this.props.children}</div>
      </>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    navigation: state.NavReducer.currentNav,
  };
};

export default connect(mapStatetoProps)(Layout);
