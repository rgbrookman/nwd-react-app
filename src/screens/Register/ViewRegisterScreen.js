import React, { useEffect } from 'react';
import Register from '../../components/Register/Register';
import logo from '../../NWD_Logo_White.png';
import MouseTooltip from '../../components/MouseTooltip/MouseTooltip';
import ClassicFooter from '../../components/Footer/ClassicFooter';
import CentralHeaderLP from '../../components/Header/CentralHeaderLP';
import './registerscreen.css';

export default function ViewRegisterScreen() {

  useEffect(() => {
    document.title = "Register";
  }, []);

  return (
    <>
<CentralHeaderLP />
    <main id="registerScreen">
    <Register />
    </main>
    <ClassicFooter />
    </>
  );
}
