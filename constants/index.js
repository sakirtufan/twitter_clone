import React from "react";
import * as Icon from '../components/icons'
export default {
  TABLET_SIZE: 980,
  DESKTOP_SIZE: 1270
}

export const MENU = [
  {
    key: 'twitter',
    icon: <Icon.Twitter />,
    iconSelected: <Icon.Twitter />,
    title: '',
    notify: 0
  },
  {
    key: 'home',
    icon: <Icon.Home />,
    iconSelected: <Icon.HomeFill />,
    title: 'Startseite',
    notify: 0
  },
  {
    key: 'explore',
    icon: <Icon.Explore />,
    iconSelected: <Icon.ExplorerFill />,
    title: 'Entdecken',
    notify: 0
  },
  {
    key: 'notification',
    icon: <Icon.Notification />,
    iconSelected: <Icon.NotificationFill />,
    title: 'Mitteilungen',
    notify: 17
  },
  {
    key: 'messages',
    icon: <Icon.Messages />,
    iconSelected: <Icon.MessagesFill />,
    title: 'Nachrichten',
    notify: 0
  },
  {
    key: 'bookmark',
    icon: <Icon.Bookmark />,
    iconSelected: <Icon.BookmarkFill />,
    title: 'Lesezeichen',
    notify: 0
  },
  {
    key: 'lists',
    icon: <Icon.Lists />,
    iconSelected: <Icon.ListsFill />,
    title: 'Listen',
    notify: 0
  },
  {
    key: 'profile',
    icon: <Icon.Profile />,
    iconSelected: <Icon.ProfileFill />,
    title: 'Profil',
    notify: 0
  },
  {
    key: 'more',
    icon: <Icon.More />,
    iconSelected: <Icon.More />,
    title: 'Mehr',
    notify: 0
  }
]