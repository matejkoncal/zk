import React, { Component } from 'react';
import classes from '../about/About.module.css';
import 'animate.css/animate.min.css';

class Pricing extends Component {
  render() {
    const containerStyle = {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#333'
    };

    const headingStyle = {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#444'
    };

    const itemStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: '1px dashed #ccc',
      padding: '10px 0'
    };

    const noteStyle = {
      fontSize: '14px',
      color: '#777',
      marginTop: '20px',
      fontStyle: 'italic'
    };
    return (
      <div className={classes.box} id='pricing'>
        <span className={classes.head}>Cenník</span>
        <h2 className={classes.heading}>Cenník</h2>
        <div className={classes.About}>
          <div style={itemStyle}>
            <span>Individuálna konzultácia</span>
            <span>28 eur (50 min)</span>
          </div>
          <div style={itemStyle}>
            <span>Online konzultácia</span>
            <span>28 eur (50 min)</span>
          </div>
          <p style={noteStyle}>
            Pri zrušení konzultácie menej ako 24 hod. pred dohodnutým termínom klient hradí 100% z
            ceny konzultácie.
          </p>
        </div>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default Pricing;
