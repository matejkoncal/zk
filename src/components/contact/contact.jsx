import React, { Component } from 'react';
import classes from '../about/About.module.css';
import 'animate.css/animate.min.css';

class Contact extends Component {
  render() {
    const containerStyle = {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#333'
    };

    const headingStyle = {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'center',
      color: '#444'
    };

    const infoStyle = {
      marginBottom: '20px'
    };

    const linkStyle = {
      color: '#007BFF',
      textDecoration: 'none'
    };

    const noteStyle = {
      fontSize: '14px',
      color: '#777',
      marginTop: '20px',
      fontStyle: 'italic',
      textAlign: 'justify'
    };

    return (
      <div className={classes.box} id='contact'>
        <span className={classes.head}>Kontakt</span>
        <h2 className={classes.heading}>Kontakt</h2>
        <div className={classes.About}>
          <div style={infoStyle}>
            <p>Hurbanova 30, Žilina</p>
            <p>
              <a href='mailto:z.koncalova@gmail.com' style={linkStyle}>
                z.koncalova@gmail.com
              </a>
            </p>
            <p>
              <a href='tel:+421910281901' style={linkStyle}>
                +421 910 281 901
              </a>
            </p>
          </div>
          <p style={noteStyle}>
            Na konzultáciu sa môžete objednať mailom alebo telefonicky, prípadne SMS správou.
            Preferujem komunikáciu prostredníctvom e-mailu, nakoľko vzhľadom na prebiehajúcu
            konzultáciu sa nemusíte vždy dovolať. Na zmeškané hovory však spätne reagujem.
          </p>
        </div>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default Contact;
