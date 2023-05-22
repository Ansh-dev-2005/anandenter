import crompton from '../../assets/crompton.png';
import havells from '../../assets/havells.png';
import lnt from '../../assets/lnt.png';
import orient from '../../assets/orient.png';
import polycab from '../../assets/polycab.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.css';

const items = [
  {
    id: 1,
    src: crompton,
    alt: 'Crompton',
  },
  {
    id: 2,
    src: havells,
    alt: 'Havells',
  },
  {
    id: 3,
    src: lnt,
    alt: 'L&T',
  },
  {
    id: 4,
    src: orient,
    alt: 'Orient',
  },
  {
    id: 5,
    src: polycab,
    alt: 'Polycab',
  },
];

const ResponsiveCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      transitionTime={500}
      swipeable={true}
      stopOnHover={true}
      dynamicHeight={false}
      emulateTouch={true}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            className="carousel-button carousel-button-prev"
            onClick={onClickHandler}
            title={label}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            className="carousel-button carousel-button-next"
            onClick={onClickHandler}
            title={label}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        )
      }
    >
      {items.map((item) => (
        <div key={item.id}>
          <img src={item.src} alt={item.alt} className="carousel-image" />
        </div>
      ))}
    </Carousel>
  );
};

export default ResponsiveCarousel;
