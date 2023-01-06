import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import Loading from '../../components/Loading/Loading';
import { ErrorMessage } from '../../components/Error/ErrorMessage';
import { login } from "../../actions/userActions";
import Footer from '../../components/Footer/Footer';
import PropagateLoader from "react-spinners/PropagateLoader";

export default function Login( props ) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {

    if (userInfo) {
      navigate('/');
    }
  }, [userInfo]);


const override = {
  display: "block",
  margin: 0,
  borderColor: "red",
};

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email,password));
  };

  return (
  <>
    <section className="loginContainer" onMouseOver={props.hide}>
    {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      <form onSubmit={submitHandler}>


          { email ? <label className="statement starter" htmlFor="email">Email</label> : <></> }
          <br></br>
        <input
        style={{width: "100%"}}
          id="email"
          className="formInput register"
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          />
 <br></br>
 <br></br>

       
 { password ?   <label className="statement starter" htmlFor="password">Password</label> : <></> }
          <br></br>
        <input
        id="password"
        style={{width: "100%"}}
        className="formInput register"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
          />
 <br></br>
 <br></br>
        <button className="loginButton" type="submit">
        <div id="underline"></div>
        <a>Login</a>
      </button>


      <br></br><br></br>
      <span className="statement starter">If you haven't already registered, click <a href="/register">here...</a></span>
      </form>


  </section>
 
</>
  );
}
