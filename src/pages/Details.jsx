import {useParams} from "react-router-dom";
import Carrousel from "../components/pages/details/Carrousel.jsx";

const Details = (props) => {
    const {lodgingId} = useParams();
    const data = props.data.find(lodging => lodging.id === lodgingId);
    console.log(data)

    return (
        <section>
            <article>
                <Carrousel images={data.pictures}/>
                <h1>Details for {data.title}
                </h1>
            </article>
        </section>
    );
}

export default Details;