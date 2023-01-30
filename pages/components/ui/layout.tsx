import React, { ReactElement, useState } from "react";

const Layout = ({ children }: { children: ReactElement }) => {
  const [state, setSomeState] = useState();

  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default Layout;
