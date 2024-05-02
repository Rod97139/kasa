import logo from '../../assets/icons/logo.svg';
import {Link} from "react-router-dom";
import '../../styles/layout/Header.scss';
const Header = () => {
    return (
        <header className="header">
            <nav className="header-nav">
                <Link to="/kasa/" className="header-nav-logo">
                    <img className="header-nav-logo-img" src={logo} alt="logo" />
                </Link>

                <div className="header-nav-text">
                    <Link to="/kasa/" className="header-nav-text-home">Accueil</Link>
                    <Link to="/kasa/about" className="header-nav-text-about">A Propos</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;