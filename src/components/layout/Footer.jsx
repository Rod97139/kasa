import logo from '../../assets/icons/logo-white.svg';
import '../../styles/layout/Footer.scss'

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="kasa logo"/>
            <p>© 2024 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;