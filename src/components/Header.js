import React from "react";

const Header = ({ titulo, noticia }) => (
  <nav className="nav-wrapper light-blue darken-3">
    <a href="#" className="brand-logo center">
      {titulo}
    </a>
  </nav>
);

export default Header;
