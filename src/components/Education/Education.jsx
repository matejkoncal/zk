import React, { Component } from 'react';
import classes from './Education.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
        <span className={classes.head}>Moje vzdelanie</span>
        <section className={classes.container}>
          <div>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
                  {/* Najnovšie vzdelanie */}
                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>2023 – súčasnosť</h2>
                      <p>
                        frekventantka Výcviku v integratívnej psychoterapii so zameraním na
                        psychosomatiku (komplexný psychoterapeutický výcvik, akreditovaný ČAP a
                        IPVZ, organizuje Institut sociálního zdraví – Univerzita Palackého v
                        Olomouci)
                      </p>
                    </div>
                  </article>

                  {/* 2021 – 2022 */}
                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>2021 – 2022</h2>
                      <p>
                        Výcvik vzťahovej psychoterapie detí a adolescentov pod vedením MUDr. Petra
                        Pötheho, IPDAR Praha
                      </p>
                    </div>
                  </article>

                  {/* 2013 – 2018 */}
                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>2013 – 2018</h2>
                      <p>
                        Katolícka univerzita v Ružomberku, Filozofická fakulta, odbor – psychológia
                      </p>
                    </div>
                  </article>

                  {/* Kratšie kurzy */}
                  <article>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <p>
                        Okrem uvedených vzdelávaní som absolvovala niekoľko kratších kurzov:
                        Sandplay/Sandtray, Reflektování v praxi pomáhajícího rozhovoru,
                        Edukačno-behaviorálna intervencia pri práci s klientom s PAS, a ďalšie. V r.
                        2019-2021 som absolvovala pravidelnú individuálnu i skupinovú supervíziu
                        svojej práce pod vedením Mgr. Richarda Grófa, PhD.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Education;
