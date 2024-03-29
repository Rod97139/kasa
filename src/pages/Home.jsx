import { Link } from "react-router-dom";

 const Home = () => {
    return (
        <div>
        <h1>Home</h1>
        <Link to='/about'>About</Link>
        <p>Welcome to the Home page</p>
        </div>
    )
}

export default Home;