import bannerHome from '../assets/images/banner1.png'
import bannerAbout from '../assets/images/banner2.png'
import '../styles/components/Banner.scss';

const Banner = ({page}) => {
  return (
    <div className="banner">
      <img className='banner-img' src={page === "home" ? bannerHome : bannerAbout} alt='côte rocheuse'/>
    </div>
  );
}

export default Banner;