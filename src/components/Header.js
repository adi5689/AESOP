/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../css/header.css";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const navbarRef = useRef();
    const navbarHandler = () => {
        navbarRef.current.classList.toggle('active');
    }
  
  return (
    <div className="header-container">
      <nav className="navbar" ref={navbarRef}>
        <a href="#">Skin Care</a>
        <a href="#">Body & Hand</a>
        <a href="#">Hair</a>
        <a href="#">Fragrance</a>
        <a href="#">Home</a>
        <a href="#">Kits & Travel</a>
        <a href="#">Gifts</a>
        <a href="#">Read</a>
        <a href="#">Stores</a>
        <a href="#">Facial Appointments</a>
        <a href="#">Login</a>
        <a href="#">Cabinet</a>
        <a href="#">Cart</a>
      </nav>
      <div className='icons'>
      <FontAwesomeIcon className='ic' icon={faBars} id='menu-btn' onClick={navbarHandler} />      
      </div>
    </div>
  );
}

export default Header;
