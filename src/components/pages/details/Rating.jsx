import emptyStar from '../../../assets/icons/emptyStar.svg';
import fullStar from '../../../assets/icons/fullStar.svg';
import '../../../styles/pages/details/Rating.scss'

const Rating = ({ rating }) => {
    return (
        <div className="rating">
            {/* spread operator */}
            {
            // [...Array(rating)].map((index) => (
            //     index === 0 ? <img key={index} src={fullStar} alt="star" style={{marginLeft: '0'}}/> :
            //     <img key={index} src={fullStar} alt="star" />
            // ))}{/* spread operator */}
            // {[...Array(emptyStarsNb)].map((index) => (
            //     <img key={index} src={emptyStar} alt="star" />
            // ))
            }
            {/* same result with one loop
                la fonction prend deux arguments : _ (underscore), qui est une convention pour indiquer que la valeur de l'élément n'est pas utilisée, 
                                                    et index, qui est l'index de l'élément dans le tableau.
                .fill(0): Remplit le tableau avec des zéros. Maintenant, le tableau a 5 éléments, chacun ayant la valeur 0
             */}
            {Array(5).fill(0).map((_, index) => {
                if (index < rating) {
                    return index === 0 ? 
                        <img key={index} src={fullStar} alt="star" style={{marginLeft: '0'}}/> :
                        <img key={index} src={fullStar} alt="star" />
                } else {
                    return <img key={index} src={emptyStar} alt="star" />
                }
            })}
        </div>
    );
}

export default Rating;