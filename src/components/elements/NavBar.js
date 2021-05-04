import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Blogger App
                </Link>
                <div>
                    <Link to="/post/add" className="btn btn-light ml-auto">
                        Add Post
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;