import { Carousel } from 'react-responsive-carousel';
import classes from './Carousel.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'animate.css/animate.min.css';
import Hello from '../images/image1.jpg';

export default function CarouselImage() {
  return (
    <div id='start'>
      <Carousel
        dynamicHeight
        infiniteLoop={true}
        interval={6000}
        useKeyboardArrows={true}
        transitionTime={1700}
        emulateTouch
        showArrows={false}
        showIndicators={false}
        autoPlay
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img
            style={{ objectFit: 'cover', objectPosition: 'center 70%' }}
            className={classes.image}
            src={Hello}
            alt='myImage'
          />
        </div>
      </Carousel>
    </div>
  );
}
