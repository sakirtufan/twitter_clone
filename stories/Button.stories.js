import React from "react";
import { Home } from "../components/icons"
import TitleBold from '../components/title-bold'
import Button from "../components/button";
import NavigationButton from "../components/navigation-button"
import Navigation from "../components/navigation";

export default {
  title: "Buttons",
};

export const Normal = () => <Button>Save</Button>;

export const NavButton = () => (
  <NavigationButton>
    <Home />
    <TitleBold>Startseite</TitleBold>
  </NavigationButton>
)
export const Nav = () => <Navigation selectedKey="home" />
