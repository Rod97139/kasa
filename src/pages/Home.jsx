import { Link } from "react-router-dom";
import Card from "../components/pages/home/Card.jsx";
import '../styles/pages/home/Home.scss';
import Banner from "../components/Banner.jsx";
import apiData from '../data/logements.json';

console.log(apiData);
const Home = ({ data }) => {
    return (
        <main className="home-container">
            <Banner page='home'/>
            <section className="home-card-wrapper">
                {apiData && apiData.map((lodging) => {
                    return (
                        <article key={lodging.id}>
                            <Link to={`/kasa/details/${lodging.id}`} style={{textDecoration : 'none'}}>
                                <Card title={lodging.title} description={lodging.description} image={lodging.cover}/>
                            </Link>
                        </article>
                    )
                })}
            </section>
        </main>

    )
}

export default Home;