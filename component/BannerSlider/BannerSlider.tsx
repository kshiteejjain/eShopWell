import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';
import style from './BannerSlider.module.scss';

const slideImages = [
  {
    url: 'https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    url: 'https://images.pexels.com/photos/2686903/pexels-photo-2686903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    url: 'https://images.pexels.com/photos/2015876/pexels-photo-2015876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const BannerSlider = () => {
    return(
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div className={style.banners} style={{'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
    )
};

export default BannerSlider;