import React, { JSX } from "react";
import { Link } from "react-router-dom";

export const AppHeader: React.FC<{}> = (): JSX.Element => {
    return <header>
        <div className="app-header-container">
            <div className="app-header-content">
                <div className="logo">
                    <h4>Mathebula</h4>
                    <small>Book Keeping and Tax Services</small>
                </div>
                <div className="nav-menu">
                    <ul>
                        <li><Link className="active" to="">Home</Link></li>
                        <li><Link to="">About</Link></li>
                        <li><Link to="">Services</Link></li>
                        <li><Link to="">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
}