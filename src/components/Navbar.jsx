import React from 'react';
import './Navbar.scss'

import person from '../img/ander.png'

 const Navbar = () => {
  return (
    <nav className='navbar'>
       <div className='container'>
            <div className='image'>
                <img src={ person } alt="perfil" />
                <p>Anderson Augusto Ferrari</p>
            </div>
       </div>
    </nav>
  );
}

export default Navbar