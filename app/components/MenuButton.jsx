import { useRef } from 'react';

export default function MenuButton({ toggleMenuState, opened }) {
  const last = useRef(null);

  const buttonClass = opened ? 'open' : !last.current ? '' : 'closed';
  
  last.current = opened

  return (
    <button className={`menu-button ${buttonClass}`} onClick={toggleMenuState}>
      <span className="line top"></span>
      <span className="line middle"></span>
      <span className="line bottom"></span>
    </button>
  )
}

