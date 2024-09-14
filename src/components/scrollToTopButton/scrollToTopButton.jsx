import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { orange } from '@mui/material/colors';

const buttonStyle = {
  opacity: '0.5',
  backgroundColor: 'pink',
  position: 'fixed',
  right: '20px',
  bottom: '20px',
  zIndex: 1000, // Ensure it's above other elements
  transition: 'opacity 0.3s ease',
  visibility: 'hidden'
};

const visibleStyle = {
  opacity: '0.5',
  visibility: 'visible'
};

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    // Show button only when user scrolls back up, not when they are scrolling down
    if (currentScrollPos < lastScrollPos && currentScrollPos > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    // Update the last scroll position
    setLastScrollPos(currentScrollPos);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPos]);

  return (
    <IconButton
      color='success'
      onClick={scrollToTop}
      style={{
        ...buttonStyle,
        ...(isVisible ? visibleStyle : {})
      }}
    >
      <KeyboardArrowUpIcon />
    </IconButton>
  );
};

export default ScrollToTopButton;
