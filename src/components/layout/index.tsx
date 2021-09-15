import React from "react";
import Footer from "../footer";
import Header from "../header";
import style from "./styles.module.scss";

const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <div className={style.container}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
