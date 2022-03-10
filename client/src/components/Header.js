import React from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './stateSlices/loginSlice';


const Header = ({ navigate }) => {
    const { loggedinUser } = useSelector(state => state.login);
    const dispatch = useDispatch();

    const logoutSubmitHandler = () => {
        dispatch(logout());
        localStorage.removeItem('loggedinUser');
        navigate.push('/login');
    }

    return (
        <header>
            <nav>
                <ul className="navbar-list">
                    {loggedinUser ? (
                        <div className="dropdown">
                            <button
                                className="btn btn-lg btn-primary dropdown-toggle"
                                type="button"
                                id="dropdownMenu2"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                {loggedinUser.firstName}
                            </button>
                            <div
                                className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="dropdownMenu2"
                            >
                                <button
                                    className="dropdown-item"
                                    type="button"
                                    onClick={logoutSubmitHandler}
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    ) : (
                        <Link to="/login" className="navbar-list-item">
                            Register/Login
                        </Link>
                    )}
                </ul>
            </nav>
        </header>
    )
}
export default Header;