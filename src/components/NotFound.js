import React from "react";

const NotFound = ({ history }) => (
  <div>
    <h3>404</h3>
    <div>
      <h2>Page Not Found</h2>
      <button size="small" color="primary" onClick={() => history.push("/")}>
        Go Home
      </button>
    </div>
  </div>
);

export default NotFound;
