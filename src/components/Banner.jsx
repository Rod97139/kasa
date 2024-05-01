import bannerHome from '../assets/images/banner1.png'
import bannerAbout from '../assets/images/banner2.png'
import '../styles/components/Banner.scss';

const Banner = ({page}) => {
  return (
    <div className="banner">
      <img className='banner-img' src={page === "home" ? bannerHome : bannerAbout} alt='côte rocheuse'/>
      {page === "home" && <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>}
    </div>
  );
}

export default Banner;