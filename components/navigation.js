import React from "react";
import NavigationButton from "./navigation-button"
import TextTitle from "./text-title"
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
        <TextTitle>Startseite</TextTitle>
      </NavigationButton>

      <NavigationButton selected={selectedKey === "explore"} >
        <Explore />
        <TextTitle>Entdecken</TextTitle>
      </NavigationButton>

      <NavigationButton notify={17} selected={selectedKey === "notification"}>
        <Notification />
        <TextTitle>Mitteilungen</TextTitle>
      </NavigationButton>

      <NavigationButton selected={selectedKey === "messages"}>
        <Messages />
        <TextTitle>Nachrichten</TextTitle>
      </NavigationButton>

      <NavigationButton selected={selectedKey === "bookmark"}>
        <Bookmark />
        <TextTitle>Lesezeichen</TextTitle>
      </NavigationButton>

      <NavigationButton selected={selectedKey === "lists"}>
        <Lists />
        <TextTitle>Listen</TextTitle>
      </NavigationButton>

      <NavigationButton selected={selectedKey === "profile"}>
        <Profile />
        <TextTitle>Profil</TextTitle>
      </NavigationButton>

      <NavigationButton selected={selectedKey === "more"}>
        <More />
        <TextTitle>Mehr</TextTitle>
      </NavigationButton>
    </nav>
  );
}

export default Navigation;