import React from 'react';
import 'semantic-ui-css/semantic.css'
import { Menu, Icon, Image } from 'semantic-ui-react';
import Link from 'next/link';
import '@/styles/globals.css';
import { AppProvider } from '@/useHooks/useAppState';


export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
    <Menu className='navbar'>
      <Menu.Item as={Link} href='/'>
        <Icon name="home" />
        The Doggo Database
        </Menu.Item>
        <Menu.Item as={Link} href='/favorites'>
        <Icon name="heart" />
        Your Favorites
        </Menu.Item>
    </Menu>
    <Image
      alt='banner'
      src='doggodatabase.png'
    />
    <Component {...pageProps} />
    </AppProvider>
  );
  }
