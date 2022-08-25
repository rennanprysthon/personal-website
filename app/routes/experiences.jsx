import { Outlet, Link } from "@remix-run/react"
import experienceStyle from '~/styles/routes/experiences.css'

export function links () {
  return [
    {
      rel: "stylesheet",
      href: experienceStyle
    }
  ]
}

export default function Experiences() {
  return (
    <div>
      <h2>Experiences</h2>
      <ul>
        <li>
          <Link to="mv">MV</Link>
        </li>
        <li>
          <Link to="liferay">Liferay</Link>
        </li>
        <li>
          <Link to="ivia">Ivia</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}
