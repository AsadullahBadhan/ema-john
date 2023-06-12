import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";
import { useAuth } from "../../contexts/AuthContext";

const Header = () => {
    const { currentUser, logout } = useAuth();
    console.log(currentUser);
    async function handleLogOut() {
        try {
            await logout();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                {currentUser ? (
                    <Link to="/">
                        {currentUser.displayName || currentUser.email}
                    </Link>
                ) : (
                    <Link to="/login">Log In</Link>
                )}
                {currentUser && <button onClick={handleLogOut}>Log Out</button>}
            </nav>
        </div>
    );
};

export default Header;
