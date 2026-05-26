import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { onAuthChanged, logout } from '../services/authService';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [user, setUser] = useState(null);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  useEffect(() => {
    const unsub = onAuthChanged((u) => setUser(u));
    return unsub;
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <h3 className="title">Heros</h3>
          </Link>

          <button className='menu-icon' onClick={handleClick} aria-label={click ? 'Cerrar menú' : 'Abrir menú'}>
            {click ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/marvel'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Marvel
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/dc'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                DC
              </Link>
            </li>
            {user && user.role === 'ADMIN' && (
              <li className='nav-item'>
                <Link to='/edit' className='nav-links' onClick={closeMobileMenu}>
                  Edit
                </Link>
              </li>
            )}
            {!user && (
              <>
                <li className='nav-item'>
                  <Link to='/signup' className='nav-links' onClick={closeMobileMenu}>Acceso</Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li className='nav-item'>
                  <span className='nav-links' style={{ cursor: 'pointer' }} onClick={async () => { await logout(); closeMobileMenu(); }}>Cerrar sesión</span>
                </li>
              </>
            )}
          </ul>

        </div>
      </nav>
    </>
  );
}

export default Navbar;