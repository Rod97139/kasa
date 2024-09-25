import bannerHome from '../assets/images/banner1.png'
import bannerAbout from '../assets/images/banner2.png'
import '../styles/components/Banner.scss';

const Banner = ({page}) => {

  const index = page === "home" ? 0 : 1;


  return (
    <div className="banner" >
      <div className='banner-slide' style={{transform: `translateX(-${index * 100}%)`}}>
        <img className="banner-img" src={bannerHome} alt='côte rocheuse'/>
        <img className="banner-img" src={bannerAbout} alt='montagne'/>
      </div>
      {page === "home" && <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>}
    </div>
  );
}

export default Banner;