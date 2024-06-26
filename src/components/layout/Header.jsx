import logo from '../../assets/icons/logo.svg';
import {Link, NavLink} from "react-router-dom";
import '../../styles/layout/Header.scss';
const Header = () => {
    return (
        <header className="header">
            <nav className="header-nav">
                <Link to="/" className="header-nav-logo">
                    <img className="header-nav-logo-img" src={logo} alt="logo" />
                </Link>

                <div className="header-nav-text">
                    <NavLink to="/" className="header-nav-text-home">Accueil</NavLink>
                    <NavLink to="/about" className="header-nav-text-about">A Propos</NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;