import React from "react";
import NavButton from "./navigation-button"
import {Bookmark, Explore, Home, Lists, Messages, More, Notification, Profile, Twitter} from "./icons"
import styles from "./navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavButton>
        <Twitter/>
      </NavButton>

      <NavButton>
        <Home />
        <span>Startseite</span>
      </NavButton>

      <NavButton>
        <Explore />
        <span>Entdecken</span>
      </NavButton>

      <NavButton>
        <Notification />
        <span>Mitteilungen</span>
      </NavButton>

      <NavButton>
        <Messages />
        <span>Nachrichten</span>
      </NavButton>

      <NavButton>
        <Bookmark />
        <span>Lesezeichen</span>
      </NavButton>

      <NavButton>
        <Lists />
        <span>Listen</span>
      </NavButton>

      <NavButton>
        <Profile />
        <span>Profil</span>
      </NavButton>

      <NavButton>
        <More />
        <span>Mehr</span>
      </NavButton>
    </nav>
  );
}

export default Navigation;