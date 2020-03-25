import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="py-4 bg-orange-500 w-full shadow-lg">
      <div className="container mx-auto w-full text-center">
        <Link to={`/`}>
          <img src="/logo_normal_white.png" className="inline-block" alt="Arc Touch" style={{maxWidth: 150}} />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
