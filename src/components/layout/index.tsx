import React from "react";
import Footer from "../footer";
import Header from "../header";
import style from "./styles.module.scss";
import WhiteSpace from "../whiteSpace";

const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <div className={style.container}>
        <Header />
        <WhiteSpace />
        {children}
        <WhiteSpace />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
