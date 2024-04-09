// eslint-disable-next-line react/prop-types
import '../../../styles/pages/home/Card.scss';
const Card = ({ title, description, image }) => {
    return (
        <div className="home-card">
            <h2 className="home-card-title">{title}</h2>
            <p className="home-card-description">{description}</p>
            <img className="home-card-img" src={image} alt={title} />
        </div>
    )
}

export default Card;