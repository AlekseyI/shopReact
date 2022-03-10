import React from "react";

const ErrorPage = ({ error }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{error}</h1>
    </div>
  );
};

export default ErrorPage;
