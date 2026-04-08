import "./css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="right">
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/about">О проекте</Link></li>
                </ul>
            </div>
        </header>
    )
} 

export default Header;