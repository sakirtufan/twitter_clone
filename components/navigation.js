import React from "react";
import NavButton from "./navigation-button"
import TitleBold from "./title-bold"
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
        <TitleBold>Startseite</TitleBold>
      </NavButton>

      <NavButton>
        <Explore />
        <TitleBold>Entdecken</TitleBold>
      </NavButton>

      <NavButton>
        <Notification />
        <TitleBold>Mitteilungen</TitleBold>
      </NavButton>

      <NavButton>
        <Messages />
        <TitleBold>Nachrichten</TitleBold>
      </NavButton>

      <NavButton>
        <Bookmark />
        <TitleBold>Lesezeichen</TitleBold>
      </NavButton>

      <NavButton>
        <Lists />
        <TitleBold>Listen</TitleBold>
      </NavButton>

      <NavButton>
        <Profile />
        <TitleBold>Profil</TitleBold>
      </NavButton>

      <NavButton>
        <More />
        <TitleBold>Mehr</TitleBold>
      </NavButton>
    </nav>
  );
}

export default Navigation;