import React from "react";
import * as Icon from '../components/icons'
export default {
  TABLET_SIZE: 980,
  DESKTOP_SIZE: 1270
}

export const MENU = [
  {
    key: 'twitter',
    path: '/',    
    icon: <Icon.Twitter style={{fontSize:30, color:'white'}}/>,
    iconSelected: <Icon.Twitter style={{fontSize:30, color:'white'}}/>,
    title: '',
    notify: 0
  },
  {
    key: 'home',
    path: '/',  
    icon: <Icon.Home />,
    iconSelected: <Icon.HomeFill />,
    title: 'Startseite',
    notify: 0
  },
  {
    key: 'explore',
    path: '/explore',  
    icon: <Icon.Explore />,
    iconSelected: <Icon.ExplorerFill />,
    title: 'Entdecken',
    notify: 0
  },
  {
    key: 'notifications',
    path: '/notifications',  
    icon: <Icon.Notification />,
    iconSelected: <Icon.NotificationFill />,
    title: 'Mitteilungen',
    notify: 17
  },
  {
    key: 'messages',
    path: '/messages',  
    icon: <Icon.Messages />,
    iconSelected: <Icon.MessagesFill />,
    title: 'Nachrichten',
    notify: 0
  },
  {
    key: 'bookmarks',
    path: '/bookmarks',  
    icon: <Icon.Bookmark />,
    iconSelected: <Icon.BookmarkFill />,
    title: 'Lesezeichen',
    notify: 0
  },
  {
    key: 'lists',
    path: '/lists',  
    icon: <Icon.Lists />,
    iconSelected: <Icon.ListsFill />,
    title: 'Listen',
    notify: 0
  },
  {
    key: 'profile',
    path: '/profile',  
    icon: <Icon.Profile />,
    iconSelected: <Icon.ProfileFill />,
    title: 'Profil',
    notify: 0
  },
  {
    key: 'more',
    path: '/more',  
    icon: <Icon.More />,
    iconSelected: <Icon.More />,
    title: 'Mehr',
    notify: 0
  }
]