import React, { ReactNode } from "react";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div className="flex">
      <Header />
      <div className="w-[70%] px-12">{children}</div>
    </div>
  );
};

export default Layout;
