import React, { Component } from "react";
import { Redirect } from "react-router-dom";
class NotFound extends Component {
  state = {
    toHome: false,
  };

  handleGoHome = (e) => {
    this.setState(() => ({
      toHome: true,
    }));
  };
  render() {
    if (this.state.toHome === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h3>404</h3>
        <div>
          <h2>Page Not Found</h2>
          <button onClick={this.handleGoHome}>Return to Home</button>
        </div>
      </div>
    );
  }
}

export default NotFound;
