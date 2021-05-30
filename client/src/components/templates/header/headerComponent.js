import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './header.css';
import { IconContext } from 'react-icons';

function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
        
          <Link to='#' className='menu-bars'>
            <div className="sidebar-icon">
            <FaIcons.FaBars onClick={showSidebar} />
            </div>
          </Link>
          <a className="navbar-brand" href="/">
            <div className="logo-image">
             <img
                alt="logo"
                src="/images/logo/heritage-connect-logo.png"
                width="180"
                height="100"
               className="img-fluid"
                                  
            />
            </div>
          </a>
           
            
            
              

              
                    
                    
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      
    </div>
  );
}

export default Header;