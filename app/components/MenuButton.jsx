import { useRef, useEffect } from 'react'

export default function MenuButton({ toggleMenuState, opened }) {
  const buttonRef = useRef(null);

  function toggleButtonState(event) {
    toggleMenuState()

    event.preventDefault();
    const { target: button } = event;

    const isOpened = button.classList.contains('open');
    const isClosed = button.classList.contains('closed');

    if (isOpened) {
      button.classList.remove('open');
      button.classList.add('closed');
      return;
    }

    if (isClosed) {
      button.classList.remove('closed');
      button.classList.add('open');
      return;
    }

    button.classList.toggle('open')
  }

  return (
    <button className="menu-button" onClick={toggleButtonState}>
      <span className="line top"></span>
      <span className="line middle"></span>
      <span className="line bottom"></span>
    </button>
  )
}

