import { useState, useEffect } from 'react';
import PopupForm from './PopupForm';
import './Brochure.css';

const Brochure = () => {
  const [show, setShow] = useState(false);

  // Auto show the popup after 1.5s on page load
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(timer); // Clean up on unmount
  }, []);

  return (
    <>
      <div className="side-button" onClick={() => setShow(true)}>
        Book Free Site Visit
      </div>

      <PopupForm show={show} handleClose={() => setShow(false)} />
    </>
  );
};

export default Brochure;
