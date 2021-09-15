import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import styles from "./styles.module.scss";
import MobileMenu from "./mobileMenu";
import burgerIcon from "../../assets/icons/burger.png";

export interface LinkType {
  to: string;
  title: string;
}

const Header = () => {
  const history = useHistory();
  let [isMobileMenuActive, setIsMobileMenuActive] = useState<boolean>(false);

  let links: LinkType[] = [
    { to: "/", title: "Home" },
    { to: "/mytodos", title: "My Todos" },
    { to: "/author", title: "Author" },
  ];

  return (
    <>
      <MobileMenu
        links={links}
        isMobileMenuActive={isMobileMenuActive}
        setIsMobileMenuActive={setIsMobileMenuActive}
      />

      <header className={styles.header}>
        <Logo
          className={styles.header__logo}
          onClick={() => history.push("/")}
        />

        {links.map((link) => {
          return (
            <div key={link.to} className={styles.header__link__wrapper}>
              <NavLink
                to={link.to}
                exact
                className={styles.header__link}
                activeClassName={styles.header__link__active}
              >
                {link.title}
              </NavLink>
            </div>
          );
        })}

        <div
          className={styles.header__burger}
          onClick={() => setIsMobileMenuActive(!isMobileMenuActive)}
        >
          <img src={burgerIcon} alt={"Menu"} />
        </div>
      </header>
    </>
  );
};

export default Header;
