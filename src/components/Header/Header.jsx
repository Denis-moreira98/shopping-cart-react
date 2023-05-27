import React from "react";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";

function Header() {
   return (
      <header className="header">
         <div className="container">
            <SearchBar />
            <button>cart</button>
         </div>
      </header>
   );
}

export default Header;
