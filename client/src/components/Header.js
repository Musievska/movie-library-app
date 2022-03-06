import React from "react"
import { Link } from "react-router-dom"


const Header = () => {
    return (
        <header>
            <nav>
                <ul className="navbar-list">
                    <Link to="/login" className="navbar-list-item">
                        Register/Login
                    </Link>
                </ul>
            </nav>
        </header>
    )
}
export default Header