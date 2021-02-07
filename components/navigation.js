import React from "react";
import NavigationButton from "./navigation-button"
import TitleBold from "./title-bold"
import {Bookmark, Explore, Home, Lists, Messages, More, Notification, Profile, Twitter} from "./icons"
import styles from "./navigation.module.css";

function Navigation({ selectedKey }) {
  return (
    <nav className={styles.nav}>
      <NavigationButton>
        <Twitter/>
      </NavigationButton>

      <NavigationButton selected={selectedKey === "home"}>
        <Home />
        <TitleBold>Startseite</TitleBold>
      </NavigationButton>

      <NavigationButton selected={selectedKey === "explore"} >
        <Explore />
        <TitleBold>Entdecken</TitleBold>
      </NavigationButton>

      <NavigationButton notify={17} selected={selectedKey === "notification"}>
        <Notification />
        <TitleBold>Mitteilungen</TitleBold>
      </NavigationButton>

      <NavigationButton selected={selectedKey === "messages"}>
        <Messages />
        <TitleBold>Nachrichten</TitleBold>
      </NavigationButton>

      <NavigationButton selected={selectedKey === "bookmark"}>
        <Bookmark />
        <TitleBold>Lesezeichen</TitleBold>
      </NavigationButton>

      <NavigationButton selected={selectedKey === "lists"}>
        <Lists />
        <TitleBold>Listen</TitleBold>
      </NavigationButton>

      <NavigationButton selected={selectedKey === "profile"}>
        <Profile />
        <TitleBold>Profil</TitleBold>
      </NavigationButton>

      <NavigationButton selected={selectedKey === "more"}>
        <More />
        <TitleBold>Mehr</TitleBold>
      </NavigationButton>
    </nav>
  );
}

export default Navigation;