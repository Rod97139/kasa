import {useState} from "react";

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
      <button onClick={handlePrev}>Prev</button>
      <img src={images[index]} alt="carrousel" />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Carrousel;