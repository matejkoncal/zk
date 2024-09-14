import React, { Component } from 'react';
import classes from '../about/About.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class What extends Component {
  render() {
    const listStyle = {
      listStyleType: 'circle',
      paddingLeft: '20px',
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      lineHeight: '1.6'
    };

    const listItemStyle = {
      marginBottom: '10px'
    };

    return (
      <div className={classes.box} id='what'>
        <h2 className={classes.heading}>Čo ponúkam?</h2>
        <div className={classes.About}>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              Poradenstvo pre dospelých klientov v oblasti rozvoja osobnosti
            </li>
            <li style={listItemStyle}>Podpora psychickej odolnosti</li>
            <li style={listItemStyle}>
              Poradenstvo pri emočných problémoch (úzkosť, strach, nízke sebavedomie, a pod.)
            </li>
            <li style={listItemStyle}>Poradenstvo pri problémoch vo vzťahoch</li>
            <li style={listItemStyle}>Nácvik relaxačných techník</li>
            <li style={listItemStyle}>
              Poradenstvo pre rodičov v oblasti výchovy detí a prístupu k nim
            </li>
          </ul>
          <p>
            Informácie, ktoré sa od Vás dozviem v procese spolupráce, sú dôverné a nebudem ich
            zdieľať so žiadnymi tretími stranami (s výnimkou ohlasovacej povinnosti napr. pri
            výskyte závažnej trestnej činnosti, ohrozenia života a zdravia, a pod.).
          </p>
          <p className={classes.br}>
            Za základ úspešnej spolupráce považujem predovšetkým vzťah s klientom, aby sa v procese
            spolupráce mohol cítiť bezpečne a otvorene dokázal hovoriť o svojich ťažkostiach.
          </p>
          <p className={classes.br}>
            Svoju prácu pravidelne supervidujem so skúseným kolegom v oblasti poradenstva.
          </p>
          <p className={classes.br}>
            <b>Upozornenie:</b> Ponúkané služby nespadajú pod výkon zdravotnej starostlivosti ani
            psychoterapie, na ktorých výkon sa v SR vyžaduje ďalšia špecifická kvalifikácia.
          </p>
        </div>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default What;
