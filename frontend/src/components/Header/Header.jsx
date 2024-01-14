// import {useEffect} from "react";
// import logo from "../../assets/images/logo.jpg"; 
// import {NavLink , link } from 'react-router-dom'

// const NavLinks = [
//     {
//         path:'/home', 
//         display:'Home'
//     }, 
//     {
//         path:'/doctors', 
//         display:'Find a Doctor'
//     },
//     {
//         path:'/services', 
//         display:'Services'
//     },
//     {
//         path:'/contact', 
//         display:'Contact'
//     },
// ]



// const Header   = () => {
//     return (
//         <header className ="header flex items-center">
//             <div className="container">
//                 <div className="flex items-center justify-between">

//                     <div> 
//                         <img src = {logo} alt = ""/>
//                     </div>


//                     <div className="navigation">
//                         <ul className="menu flex items-center gap-[2.7rem">
//                             {
//                                 NavLinks.map((link , index) =><li key = {index}>
//                                     <NavLink to = {link.path} className={navClass => navClass.isActive ? 'text-primaryColor text-[16px]leading-7 font-[600] ' : 'text-textColor text-[16px]leading-7 font-[600] '}>{link.display}</NavLink>

//                                 </li>)
//                             }
//                         </ul>
//                     </div>

//                 </div>
//             </div>
//         </header>
//     )
// }; 

// export default Header;

import React, { useEffect , useRef , useContext} from "react";
import { Link, NavLink } from 'react-router-dom';  // <-- Import Link along with NavLink
import logo from "../../assets/images/logo6.jpeg";

import {BiMenu} from "react-icons/bi";

import { authContext } from "../../context/authContext";

const NavLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Find a Doctor'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
  },
];

const Header = () => {


  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const {user , role , token} = useContext(authContext)

  const handleStickyHeader = () => {
    window.addEventListener('scroll', ()=> {
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ){
            headerRef.current.classList.add('sticky__header');
        }else {
            headerRef.current.classList.remove('sticky__header');
        }
    });
  };

  useEffect(() => {
    handleStickyHeader()

    return () => window.removeEventListener('scroll', handleStickyHeader );
  });


  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')






  return (
    <header className="header flex items-center" ref ={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="navigation" ref  = {menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
            {NavLinks.map((link, index) => (
            <li key={index}>
                <NavLink
                to={link.path}
                className={(navClass) =>
                    navClass.isActive
                    ? 'text-primaryColor text-[16px]leading-7 font-[600]'
                    : 'text-textColor text-[16px]leading-7 font-[500] hover:text-primaryColor'
                }
                >
                {link.display} {/* Add this line to display the link text */}
                </NavLink>
            </li>
            ))}
            </ul>
          </div>

          {/*========== nav right ============*/}
          <div className="flex items-center gap-4">

            {
              token && user ?<div> 
              <Link to = {`${role === 'doctor' ? '/doctors/profile/me'   : '/users/profile/me'}`}>
                  <figure className="w-[80px] h-[90px] rounded-full">
                      <img src = {user?.photo} className="w-full rounded-full" alt = "" />
                  </figure>

                  
              </Link>
          </div> :  <Link to="/login/">
            <button className="bg-primaryColor py-2 px-6 text-black font-semibold h-[44px] flex items-center justify-center rounded-full hover:bg-primaryColorDark focus:outline-none focus:ring focus:border-primaryColorDark transition duration-300">
                Login
            </button>
            </Link>

            }
          
           

          <span className="md:hidden" onClick={toggleMenu}> 
            <BiMenu className ='w-6 h-6 cursor-pointer'/>
          </span>


          </div>













        </div>
      </div>
    </header>
  );
};

export default Header;
