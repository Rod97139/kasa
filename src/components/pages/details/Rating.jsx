import emptyStar from '../../../assets/icons/emptyStar.svg';
import fullStar from '../../../assets/icons/fullStar.svg';
import '../../../styles/pages/details/Rating.scss'

const Rating = ({ rating }) => {
    const emptyStarsNb = 5 - rating;
    return (
        <div className="rating">
            {[...Array(rating)].map((star, index) => (
                index === 0 ? <img key={index} src={fullStar} alt="star" style={{marginLeft: '0'}}/> :
                <img key={index} src={fullStar} alt="star" />
            ))}
            {[...Array(emptyStarsNb)].map((star, index) => (
                <img key={index} src={emptyStar} alt="star" />
            ))}
        </div>
    );
}

export default Rating;