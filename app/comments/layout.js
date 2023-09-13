import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <h1>Comments layout</h1>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
