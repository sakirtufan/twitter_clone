import React from "react";
import Button from "./button"
import styles from "./navigation-button.module.css";

function NavigationButton({ children }) {
  return (
    <button className={styles.navButton}>
      {children}
    </button>
  );
}

export default NavigationButton;