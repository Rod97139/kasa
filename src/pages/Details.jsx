import {useParams} from "react-router-dom";
import Carrousel from "../components/pages/details/Carrousel.jsx";
import DropDown from "../components/DropDown.jsx";

const Details = (props) => {
    const {lodgingId} = useParams();
    const data = props.data.find(lodging => lodging.id === lodgingId);
    console.log(data)

    return (
        <section>
            <article>
                <Carrousel images={data.pictures}/>
                <div>
                    <div>
                        <h1>{data.title}</h1>
                        <p>{data.location}</p>
                        <p>{data.tags.map(tag => <span key={tag}>{tag}</span>)}</p>
                    </div>
                    <div>
                        <div>
                            <p>{data.host.name}</p>
                            <img src={data.host.picture} alt={data.host.name}/>
                        </div>
                        <div>
                            <p>{data.rating}</p>
                        </div>

                    </div>
                    <div>
                        <DropDown title="Description" content={data.description}/>
                        <DropDown title="Equipements" content={data.equipments}/>
                    </div>



                </div>
            </article>
        </section>
    );
}

export default Details;