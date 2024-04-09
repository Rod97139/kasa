import {useParams} from "react-router-dom";
import Carrousel from "../components/pages/details/Carrousel.jsx";
import DropDown from "../components/DropDown.jsx";
import NotFound from "./NotFound.jsx";

const Details = ({data}) => {
    const {lodgingId} = useParams();
    const lodging = data.find(lodging => lodging.id === lodgingId); // return an object or undefined
    if (!lodging) return <NotFound/>

    return (
        <section>
            <article>
                <Carrousel images={lodging.pictures}/>
                <div>
                    <div>
                        <h1>{lodging.title}</h1>
                        <p>{lodging.location}</p>
                        <p>{lodging.tags.map(tag => <span key={tag}>{tag}</span>)}</p>
                    </div>
                    <div>
                        <div>
                            <p>{lodging.host.name}</p>
                            <img src={lodging.host.picture} alt={lodging.host.name}/>
                        </div>
                        <div>
                            <p>{lodging.rating}</p>
                        </div>
                    </div>
                    <div>
                        <DropDown title="Description" content={lodging.description}/>
                        <DropDown title="Equipements" content={lodging.equipments}/>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Details;