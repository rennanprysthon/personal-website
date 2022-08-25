import { Link } from "@remix-run/react";

export default function Menu({ opened }) {
  const className = opened ? "opened" : "";

  return (
    <nav id="navigation" className={className}>
      <ul className="container m-auto menu-list">
        <li className="menu-list__item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-list__item">
          <Link to="/works">Works</Link>
        </li>
        <li className="menu-list__item">
          <Link to="/experiences">Experiences</Link>
        </li>
      </ul>
    </nav>
  )
}
