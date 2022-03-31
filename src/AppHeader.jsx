import React from 'react';
import { NavLink } from 'react-router-dom';

const AppHeader = () => {
  return (
    <header className="app--header">
      <h1>React Hooks Implementation</h1>
      <nav className="app--nav">
        <NavLink to="/screen-one">useState</NavLink>
        <NavLink to="/screen-two">useEffect</NavLink>
        <NavLink to="/screen-three">Custom Hooks</NavLink>
        | | |
        <NavLink to="/screen-four">Context(propstypes , props drilling ,useContext)</NavLink>
        <NavLink to="/screen-five">Another Hooks</NavLink>
      </nav>
    </header>
  );
};

export default AppHeader;
