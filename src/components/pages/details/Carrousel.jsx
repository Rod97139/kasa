import {useState} from "react";
import arrowRight from "../../../assets/icons/arrow-right.svg";
import arrowLeft from "../../../assets/icons/arrow-left.svg";
import "../../../styles/components/Carrousel.scss";

const Carrousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((index + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <div className="carrousel">
      <img className="carrousel-img" src={images[index]} alt="carrousel" />
        <img className='carrousel-arrow-left' src={arrowLeft} onClick={handlePrev} alt='arrow-left'/>
        <img className='carrousel-arrow-right' src={arrowRight} onClick={handleNext} alt='arrow-right'/>
      <p className="carrousel-index">{index+1}/{images.length}</p>
    </div>
  );
}

export default Carrousel;