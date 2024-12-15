import React, { Component } from 'react';
import classes from '../about/About.module.css';
import 'animate.css/animate.min.css';
import { Button, FormControl, Stack, TextField } from '@mui/material';

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
            <p>Hurbanova 30 (2. poschodie), Žilina</p>
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
            Kontaktovať ma môžete prostredníctvom kontaktného formuláru nižšie, e-mailom,
            telefonicky alebo SMS správou. Vzhľadom na prebiehajúcu konzultáciu sa nemusíte vždy
            dovolať, na zmeškané hovory však spätne reagujem.
          </p>
          <form action='https://formsubmit.co/b85d3f276b437ca5fb5cd8a409e26fe2' method='POST'>
            <Stack spacing={2} maxWidth='500px'>
              <TextField label='Meno' type='text' name='name' required />
              <TextField label='Email' type='email' name='email' required />
              <TextField minRows={5} multiline name='message' label='Správa' required />
              <Button type='submit' variant='outlined'>
                Odoslať
              </Button>
            </Stack>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
