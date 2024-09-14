import React, { Component } from 'react';
import classes from '../Education/Education.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

export default function Interest() {
  return (
    <div className={classes.box} id='skills'>
      <span className={classes.head}>Pracovné skúsenosti</span>
      <section className={classes.container}>
        <div>
          <div className={classes.row}>
            <div className={classes.row_md_12}>
              <div className={classes.timeline_centered}>
                <article className={classes.timeline_entry}>
                  <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                    <MdWork />
                  </div>
                  <div className={classes.label}>
                    <h2>07/2017 – 08/2017</h2>
                    <p>Centrum Gaudia Praha (psychoterapeutické centrum) – stážista</p>
                  </div>
                </article>
                <article className={classes.timeline_entry}>
                  <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                    <MdWork />
                  </div>
                  <div className={classes.label}>
                    <h2>09/2018 – 01/2019</h2>
                    <p>ZŠ s MŠ Dolná Trnovská 36, Žilina – školský psychológ</p>
                  </div>
                </article>
                <article className={classes.timeline_entry}>
                  <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                    <MdWork />
                  </div>
                  <div className={classes.label}>
                    <h2>02/2019 – 12/2021</h2>
                    <p>
                      ÚPSVaR Žilina, Oddelenie sociálnych vecí a rodiny – psychológ referátu
                      poradensko-psychologických služieb
                    </p>
                  </div>
                </article>
                <article className={classes.timeline_entry}>
                  <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                    <MdWork />
                  </div>
                  <div className={classes.label}>
                    <h2>08/2022 – 09/2022</h2>
                    <p>IPčko o. z. – psychológ, pracovník psychosociálneho mobilného tímu</p>
                  </div>
                </article>
                <article className={classes.timeline_entry}>
                  <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                    <MdWork />
                  </div>
                  <div className={classes.label}>
                    <h2>11/2022 – 12/2023</h2>
                    <p>
                      Súkromné centrum poradenstva a prevencie Centra včasnej intervencie Žilina –
                      psychológ
                    </p>
                  </div>
                </article>
                <article className={classes.timeline_entry}>
                  <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                    <MdWork />
                  </div>
                  <div className={classes.label}>
                    <h2>01/2024 – súčasnosť</h2>
                    <p>Základná škola Námestie mladosti 1, Žilina – školský psychológ</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </ScrollAnimation> */}
    </div>
  );
}
