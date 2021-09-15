import React, { Dispatch, SetStateAction } from "react";
import { LinkType } from "../index";
import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";

interface MobileMenuPropsType {
  links: LinkType[];
  isMobileMenuActive: boolean;
  setIsMobileMenuActive: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu = ({
  links,
  isMobileMenuActive,
  setIsMobileMenuActive,
}: MobileMenuPropsType) => {
  return (
    <div
      className={
        isMobileMenuActive
          ? [styles.mobile__menu, styles.mobile__menu__active].join(" ")
          : styles.mobile__menu
      }
    >
      {links.map((link) => {
        return (
          <div key={link.to} className={styles.header__link__wrapper}>
            <NavLink
              to={link.to}
              exact
              className={styles.header__link}
              activeClassName={styles.header__link__active}
              onClick={() => setIsMobileMenuActive(false)}
            >
              {link.title}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default MobileMenu;
