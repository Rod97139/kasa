import { Link } from "react-router-dom";
import Card from "../components/pages/home/Card.jsx";
const Home = ({ data }) => {
    return (
        <main>
            <section>
                {data && data.map((lodging) => {
                    return (
                        <article key={lodging.id}>
                            <Link to={`/details/${lodging.id}`}>
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