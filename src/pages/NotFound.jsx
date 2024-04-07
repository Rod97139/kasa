import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
        <h1>NotFound</h1>
        <p>Welcome to the NotFound page</p>
        <Link to='/'>Home</Link>
        </div>
    )
}

export default NotFound;