import React from "react"
import logo from '../images/logo.png'
import {Link} from "react-router-dom"

function Header() {
    return (
        <header>
            <nav>
                <Link to="/">
                    <img className="nav-logo" src={logo}></img>
                </Link>
            
                <ul className="nav-category">
                    <li>Wine</li>
                    <li>Spirits</li>
                    <li>Liqueurs</li>
                </ul>

                <div className="nav-icons-container">
                    
                    

                    <Link className="nav-btn-link" to="/sign-in">
                        <button className="iconBtn">Sign in  |  <i className="fa-regular fa-user"></i></button>
                    </Link>
    
                    <Link className="nav-btn-link" to="/exchange">
                        <button className="iconBtn iconBtn-accent">Exhange  |  <i className="fa-solid fa-cart-shopping"></i></button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header