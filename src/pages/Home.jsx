import { Link } from "react-router-dom";
import Card from "../components/pages/home/Card.jsx";
import '../styles/pages/home/Home.scss';
const Home = ({ data }) => {
    return (
        <main className="home-container">
            <section className="home-card-wrapper">
                { data.map((lodging) => {
                    return (
                        <article key={lodging.id}>
                            <Link to={`/details/${lodging.id}`} style={{textDecoration : 'none'}}>
                                <Card title={lodging.title} description={lodging.description} image={lodging.cover}/>
                            </Link>
                        </article>
                    )
                })}
            </section>
            <p>Welcome to the Home page</p>
        </main>

    )
}

export default Home;