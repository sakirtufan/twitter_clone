import React from "react";
import { Home } from "../components/icons"
import TextTitle from '../components/text-title'
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
    <TextTitle>Startseite</TextTitle>
  </NavigationButton>
)
export const Nav = () => <Navigation selectedKey="home" />
