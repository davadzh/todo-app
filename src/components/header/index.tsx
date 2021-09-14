import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import styles from "./styles.module.scss";

interface LinkType {
  to: string;
  title: string;
}

const Header = () => {
  let links: LinkType[] = [
    { to: "/", title: "Home" },
    { to: "/mytodos", title: "My Todos" },
    { to: "/author", title: "Author" },
  ];

  return (
    <header className={styles.header}>
      <Logo className={styles.header__logo} />

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
    </header>
  );
};

export default Header;
