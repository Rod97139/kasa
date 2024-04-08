import { Link } from "react-router-dom";
import Card from "../components/pages/home/Card.jsx";
// eslint-disable-next-line react/prop-types
const Home = ({ data }) => {
    return (
        <main>
            <section>
                {/* eslint-disable-next-line react/prop-types */}
                {data && data.map((lodging) => {
                    return (
                        <article key={lodging.id}>
                            <Link to={`/details/${lodging.id}`} key={lodging.id}>
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