import { useRef, useEffect } from 'react'

export default function MenuButton({ toggleMenuState, opened }) {
  const buttonRef = useRef(null);

  function toggleButtonState(event) {
    event.preventDefault();

    event.target.classList.toggle('open');
  }

  const buttonClassList = opened ? "open" : "";

  console.log('rendered')

  return (
    <button className={`menu-button ${buttonClassList}`} onClick={toggleMenuState}>
      <span className="line top"></span>
      <span className="line middle"></span>
      <span className="line bottom"></span>
    </button>
  )
}

