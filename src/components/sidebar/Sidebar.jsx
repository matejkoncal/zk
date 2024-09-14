import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';

import logo from '../images/zuzana.jpg';
import gmail from '../images/gmail.png';

export default function Sidebar() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  };
  const iconList = [
    {
      component: gmail,
      href: 'mailto:z.koncalova@gmail.com'
    }
  ];
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className='sidebar'>
      <h1>
        <Link smooth to='/#start' className='h1_links'>
          Zuzana Končalová
        </Link>
      </h1>
      <motion.div
        animate={{ y: [2, -2] }}
        transition={{ ease: 'linear', duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      >
        <img src={logo} className='my-img' />
      </motion.div>
      <p style={{ color: 'black', fontWeight: 'bold' }} className='gmail'>
        <a
          href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftvBffjPmxWxvfHWRHWnhTbpQgPxBxvkcnPpFpFqbhrXMCHXSJTsCXCVLsQzgRcVLpnPL'
          rel='opener noreferrer'
          target='_blank'
          className='fa fa-envelope'
        ></a>
        &nbsp;z.koncalova@gmail.com
      </p>

      <ul className='sidebar-nav'>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#about' className='links'>
            O mne
          </Link>
        </li>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#education' className='links'>
            Vzdelanie
          </Link>
        </li>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#skills' className='links'>
            Pracovné skúsenosti
          </Link>
        </li>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#what' className='links'>
            Čo ponúkam
          </Link>
        </li>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#pricing' className='links'>
            Cenník
          </Link>
        </li>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#contact' className='links'>
            Kontakt
          </Link>
        </li>
      </ul>
      <div
        style={{
          color: 'black',
          fontWeight: 'bold',
          paddingTop: '30%'
        }}
        className='tagtop'
      ></div>
    </div>
  );
}
