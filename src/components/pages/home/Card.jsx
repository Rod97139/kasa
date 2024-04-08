// eslint-disable-next-line react/prop-types
const Card = ({ title, description, image }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={image} alt={title} />
        </div>
    )
}

export default Card;