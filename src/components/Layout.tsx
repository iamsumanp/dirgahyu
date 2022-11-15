import React from "react";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export const Layout = ({ children }: any) => {
  return (
    <>
      <NavBar />
      {children}
      {/* <Footer /> */}
    </>
  );
};
