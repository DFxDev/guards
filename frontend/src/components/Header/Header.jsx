import React, { useContext, useRef, useEffect } from 'react'
import guards from '../../assets/images/guards.png'
import guardslogo2 from '../../assets/images/guardslogo2.png'
import { navLinks } from '../../assets/data/navLinks'
import { NavLink, Link } from 'react-router-dom'
import userImg from '../../assets/images/avatar-icon.png'
import { BiMenu } from 'react-icons/bi'
import { AuthContext } from './../../context/AuthContext'


const Header = ( ) => {
  
  const { user, token, role } = useContext(AuthContext);
  const headerRef = useRef(null)
  const menuRef = useRef(null)

  // const handleStickyHeader = ()=> {
  //    
  //     window.addEventListener('scroll', ()=> {
  //       if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
  //         headerRef.current.classList.add('sticky__header')
  //       }else{
  //         headerRef.current.classList.remove('sticky__header')
  //       }
  //     })
  // };

  // useEffect(() => {
  //   handleStickyHeader();
  //   return () => window.removeEventListener("scroll", handleStickyHeader);
  // });

  // const toggleMenu = () => {
  //   if (menuRef.current) {
  //     menuRef.current.classList.toggle("show__menu");
  //   }
  // };



  const handleStickyHeader = () => {
    if (headerRef.current) {
      if (window.scrollY > 80) { // Use window.scrollY to check scroll position
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    }
  };

  useEffect(() => {
    handleStickyHeader();

    // Add a scroll event listener to update sticky header
    window.addEventListener('scroll', handleStickyHeader);

    // Clean up by removing the scroll event listener
    return () => {
      window.removeEventListener('scroll', handleStickyHeader);
    };
  }, []); // Run this effect once after initial render
  
   const toggleMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("show__menu");
    }
  };

  return (
    <header className='header flex items-center' ref={headerRef}>
      <div className='container'>
        <div className='flex items-center justify-between'>
          {/* logo */}
          <div>
            <img src={guardslogo2} alt='logo' className='img' />
          </div>

          {/* Menu */}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className=' menu flex items-flex-row gap-[3.7rem] mr-6'>
              {/* Use flex-row class to display the list items in a row */}
              {navLinks.map((link, index) => (
                <li key={index} className='flex' >
                  <NavLink
                    to={link.path}
                    className={navClass =>
                      navClass.isActive
                        ? 'text-cyan-600 text-[16px] leading-7 font-[600]'
                        : 'text-textColor text-[16px] leading-7 font-[500] hover:text-cyan-500 ' 
                    }  
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* NavBar Right */}
          <div className="flex items-center gap-4">
            {token && user ? (
              <div>
                <Link
                  to={`${
                    role === "guard"
                      ? "/guards/profile/me"
                      : "/users/profile/me"
                  } `}
                >
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer ">
                    <img
                      className="w-full rounded-full"
                      src={user?.photo}
                      alt="Profile Photo"
                    />
                  </figure>
                </Link>
              </div>
            ) : (
              <Link to="/login">
              <button className=" bg-sky-500 hover:bg-sky-700 ... border-[#00c8ff] py-2 px-6 rounded-[50px] text-white font-[600] h-[44px] flex items-center justify-center">
                Log In
              </button>
            </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
