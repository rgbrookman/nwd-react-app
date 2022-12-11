import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ErrorMessage } from '../../components/Error/ErrorMessage';
import { register } from "../../actions/userActions";
import Loading from '../../components/Loading/Loading';
import Footer from '../../components/Footer/Footer';
import { Button  } from 'react-bootstrap';

export default function RegisterTest({ history }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRegister = useSelector(state => state.userRegister)
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
  if (userInfo) {
     navigate('/login');
  }
}, [history, userInfo]);


  const submitHandler = async (e) => {
    await e.preventDefault();
   if (password !== confirmPassword) {
     await setMessage("Passwords do not match");
   } else {
     await dispatch(register(name, email, password ));
     await navigate('/login');
   }
    };

  return (
    <>

    <section className="registerContainer">
    <form className="register" onSubmit={submitHandler}>
  
    <label className="statement starter" htmlFor="name">Name</label>
    <br></br>
    <input
      id="name"
      style={{width: "100%"}}
      className="formInput"
      type="text"
      value={name}
      placeholder="Your Name"
      onChange={(e) => setName(e.target.value)}
      />
      <br></br>
      <br></br>
    <label className="statement starter" htmlFor="email">Email</label>
    <br></br>
    <input
    id="email"
    style={{width: "100%"}}
    className="formInput"
    type="text"
    value={email}
    placeholder="Email Address"
    onChange={(e) => setEmail(e.target.value)}
    />
    <br></br>
    <br></br>
    <label className="statement starter" htmlFor="password">Password</label>
    <br></br>
    <input
    id="password"
    style={{width: "100%"}}
    className="formInput"
    type="password"
    value={password}
    placeholder="Password"
    onChange={(e) => setPassword(e.target.value)}
    />
    <br></br>
    <br></br>
    <label className="statement starter" htmlFor="confPassword">Confirm Password</label>
    <br></br>
    <input
    id="confPassword"
    style={{width: "100%"}}
    className="formInput"
    type="password"
    value={confirmPassword}
    placeholder="Confirm password"
    onChange={(e) => setConfirmPassword(e.target.value)}
    />
    <br></br>
    <br></br>
    <button id="button-4" className="submit button" type="submit">
        <div id="underline"></div>
        <a>Register</a>
      </button>
      <span className="statement starter">Already have a NWD, login <a href="/login">here...</a></span>
    </form>
    </section>
    </>
  );
}
