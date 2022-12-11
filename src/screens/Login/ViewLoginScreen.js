import React, { useEffect, useState } from 'react';
import Login from '../../components/Login/Login';
import logo from '../../NWD_Logo_White.png';
import MouseTooltip from '../../components/MouseTooltip/MouseTooltip';
import ClassicFooter from '../../components/Footer/ClassicFooter';
import CentralHeaderLP from '../../components/Header/CentralHeaderLP';
import './loginscreen.css';

export default function ViewLoginScreen() {
  const [loginCursorState, setLoginCursorState] = useState('Ooh! Exciting!');

  const [cursorState, setCursorState] = useState('');
const [cursorDisplayState, setCursorDisplayState] = useState(true);

  useEffect(() => {
    document.title = "Login";
  }, []);

  const hideHover = () => {
    setCursorDisplayState(cursorDisplayState => !cursorDisplayState); 
  }

  return (<>
    <MouseTooltip
      visible={cursorDisplayState}
      offsetX={15}
      offsetY={10}
      zIndex={-1}
       >
       <h1 className="sickTooltip">{loginCursorState}</h1>
       </MouseTooltip>
       <CentralHeaderLP />
    <main id="login-screen" className="loginPageScreen">
     
    <Login hide={hideHover} />


    </main>
    <ClassicFooter />
    </>
  );
}
