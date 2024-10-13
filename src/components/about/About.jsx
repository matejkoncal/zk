import React, { Component } from 'react';
import classes from './About.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class About extends Component {
  render() {
    return (
      <div className={classes.box} id='about'>
        {/* <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        > */}
        <span className={classes.head}>O mne</span>
        <h2 className={classes.heading}>Kto som?</h2>
        <div className={classes.About}>
          <p>Volám sa Zuzana Končalová a ponúkam Vám poradenské služby v Žiline. </p>
          <p className={classes.br}>
            Vyštudovala som jednoodborovú psychológiu a doposiaľ som svoje pracovné skúsenosti
            nadobudla v práci s deťmi, dospievajúcimi i dospelými v rôznych pracovných kontextoch,
            kde som pracovala ako psychológ.
          </p>
        </div>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default About;
