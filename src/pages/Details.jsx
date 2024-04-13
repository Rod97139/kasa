import {useParams} from "react-router-dom";
import Carrousel from "../components/pages/details/Carrousel.jsx";
import DropDown from "../components/DropDown.jsx";
import NotFound from "./NotFound.jsx";
import Rating from "../components/pages/details/Rating.jsx";
import "../styles/pages/details/Details.scss";

const Details = ({data}) => {
    const {lodgingId} = useParams();
    const lodging = data.find(lodging => lodging.id === lodgingId); // return an object or undefined
    if (!lodging) return <NotFound/>

    return (
    <main className="container">
        <section>
            <Carrousel images={lodging.pictures}/>
            <article>
                <div className="details">
                    <div className="details-lodging">
                        <h1 className='details-lodging-title'>{lodging.title}</h1>
                        <p className='details-lodging-location'>{lodging.location}</p>
                        <p className='details-lodging-tags'>{lodging.tags.map(tag => <span key={tag}>{tag}</span>)}</p>
                    </div>
                    <div className='details-owner'>
                        <div className='details-owner-profile'>
                            <p className="details-owner-profile-name">{lodging.host.name}</p>
                            <img className='details-owner-profile-picture' src={lodging.host.picture} alt={lodging.host.name}/>
                        </div>
                        <div className='details-owner-rating'>
                            <Rating rating={parseInt(lodging.rating)}/>
                        </div>
                    </div>
                </div>
                <div className='dropdown'>
                    <DropDown title="Description" content={lodging.description}/>
                    <DropDown title="Equipements" content={lodging.equipments}/>
                </div>
            </article>
        </section>
    </main>
    );
}

export default Details;