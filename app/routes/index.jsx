import { Outlet } from '@remix-run/react'

import  indexStyle from '~/styles/routes/index.css'

export function links() {
  return [
    {
      rel: "stylesheet",
      href: indexStyle
    }
  ]
}

export default function Index() {
  return (
    <div className="index-route" >
      <header>
        <h2>Home</h2>
      </header>
      <main>
        <Outlet /> 
      </main>
    </div>
  );
}
