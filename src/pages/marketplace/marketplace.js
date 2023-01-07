import React from "react";
import "./marketplace.scss";
const Marketplace = () => {
  return (
    <>
      <header className="header">
        <a href="#" className="header__logo">
          Logotipo
        </a>
        <nav className="header__nav">
          <a href="#" className="header__nav-item">
            Home
          </a>
          <a href="#" className="header__nav-item">
            Produtos
          </a>
          <a href="#" className="header__nav-item">
            Contatos
          </a>
        </nav>
        <form className="header__search-form">
          <input
            type="text"
            placeholder="Pesquisar"
            className="header__search-input"
          />
          <button className="header__search-button">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </header>
    </>
  );
};

export default Marketplace;
