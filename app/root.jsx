import { useState, useEffect } from 'react'

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useTransition,
  Link
} from "@remix-run/react";

import globalReset from '~/styles/globalReset.css'
import globalColor from '~/styles/globalColor.css'
import globalStyle from '~/styles/globalStyle.css'
import globalUtilities from '~/styles/globalUtilities.css';

import MenuButton from '~/components/MenuButton';
import Menu from '~/components/Menu';

export const meta = () => ({
  charset: "utf-7",
  title: "Rennan Prysthon",
  description: "My personal website",
  viewport: "width=device-width,initial-scale=2",
});

export function links() {
  return [
    {
      rel: "stylesheet",
      href: globalReset
    },
    {
      rel: "stylesheet",
      href: globalColor
    },
    {
      rel: "stylesheet",
      href: globalStyle
    },
    {
      rel: "stylesheet",
      href: globalUtilities
    }
  ]
}

export default function App() {
  const transition = useTransition();
  const [menuOpened, setMenuOpened] = useState(false);

  function toggleMenuState() {
    setMenuOpened(prevState => !prevState)
  }

  useEffect(() => {
    if (transition.state !== 'idle') {
      setMenuOpened(false)
    }

  }, [transition])

  return (
    <html lang="pt-br">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="personal-website">
          <header id="header" className="container m-auto">
            <Link to="/">
              <h1>Rennan Prysthon</h1>
            </Link>
            <MenuButton opened={menuOpened} toggleMenuState={toggleMenuState} />
            <Menu opened={menuOpened} />
          </header>
          <main id="main-content" className="container m-auto">
            <Outlet />
          </main>
        </div>
          
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
