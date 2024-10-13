import { Carousel } from 'react-responsive-carousel';
import classes from './Carousel.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'animate.css/animate.min.css';
import Hello from '../images/image1.jpg';
import Pencil from '../images/image2.jpg';

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
        autoPlay
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img className={classes.image} src={Hello} alt='myImage' />
          <div className={classes.h1}>Autenticita je najvyššia forma pohody. » – Gabor Maté</div>
        </div>
        <div>
          <img className={classes.image} src={Pencil} alt='myImage' />
          <div className={classes.h2}>
            {
              // <h1>
              //   „Nemôžeme byť zodpovední za svet, ktorý vytvoril našu myseľ, ale môžeme prevziať
              //   zodpovednosť za myseľ, s ktorou tvoríme náš svet. » – Gabor Maté
              // </h1>
            }
          </div>
        </div>
      </Carousel>
    </div>
  );
}
