import React from 'react'
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import {Avatar} from "@material-ui/core";
import {Link} from "react-router-dom";
function Header() {
    return (
        <div className="header">
            <Link to ='/'>
            <img
               className="header__icon"
               src="https://raw.githubusercontent.com/guptaadi123/wisdome-tech/main/assets/img/logo.png?token=AKPZEWDLK4WZYCZZRTMKUGLAFDBCM"
               alt=""
               />
            </Link>

           
               
          
          <div className='header__center'>
              <input type="text"/>
              <SearchIcon/>
              
          </div>

          <div className="header__right" >
              <p>Become host</p>
              <Avatar/>

          </div>
            





        </div>
    )
}

export default Header
