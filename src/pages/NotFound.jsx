import { Link } from "react-router-dom";
import '../styles/pages/notFound/NotFound.scss'

const NotFound = () => {
    return (
        <div className='container-notfound'>
        <h1>404</h1>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p>Oups! La page que vous demandez n'existe pas.</p>

        <Link to='/'>Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default NotFound;