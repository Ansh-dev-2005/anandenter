
import crompton from '../../assets/crompton.png'
import havells from '../../assets/havells.png'
import lnt from '../../assets/lnt.png'
import orient from '../../assets/orient.png'
import polycab from '../../assets/polycab.png'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the styles
import './carousel.css'


const items = [
  {
    id: 1,
    src: crompton,
    alt: 'Slide 1',
  },
  {
    id: 2,
    src: havells,
    alt: 'Slide 2',
  },
  {
    id: 3,
    src: lnt,
    alt: 'Slide 3',
  },
    {
    id: 4,
    src: orient,
    alt: 'Slide 4',
    },
    {
    id: 5,
    src: polycab,
    alt: 'Slide 5',
    }
];

const ResponsiveCarousel = () => {
  return (
    <Carousel>
      {items.map((item) => (
        <div key={item.id}>
          <img src={item.src} alt={item.alt} />
        </div>
      ))}
    </Carousel>
  );
};

export default ResponsiveCarousel;
