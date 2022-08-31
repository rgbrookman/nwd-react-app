import React, { useEffect } from 'react';
import Register from '../../components/Register/Register';
import './register.css';

export default function RegisterScreen() {

  useEffect(() => {
    document.title = "Register";
  }, []);

  return (
    <main id="registerScreen">


    <Register />
      <span>Already have a NWD, login <a href="/login">here...</a></span>
    </main>
  );
}
