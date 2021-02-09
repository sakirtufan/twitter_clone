import React from "react";
import NavigationButton from "./navigation-button";
import TextTitle from "./text-title";
import styles from "./navigation.module.css";
import { MENU } from "../constants";

function Navigation({ flat = false, selectedKey = "home" }) {
  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const showTitle = !flat && menu.title.length > 0;
        const selected = selectedKey === menu.key
        return (
          <NavigationButton
            key={menu.key}
            notify={menu.notify}
            selected={selected}
          >
            {selected ? menu.iconSelected : menu.icon}
            {showTitle && <TextTitle>{menu.title}</TextTitle>}
          </NavigationButton>
        );
      })}
    </nav>
  );
}

export default Navigation;
