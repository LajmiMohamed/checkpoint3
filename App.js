import React from 'react';
import './App.css';

import  {Button,Form,FormGroup,Label,Input } from 'reactstrap';
import  {FacebookLoginButton } from 'react-social-login-buttons';
function App() {
  return (
    <form className="login-form">
      <h1>
        <span className="font-weight-bold">mywebsite</span>.com
      </h1>
      <h2 className="text-center">welcome</h2>
      <FormGroup>
        <Label>Email</Label>
        <input className="email" type="email" placeholder="Email"/>
      </FormGroup>
      <FormGroup>
        <Label>password</Label>
        <input className="password" type="password" placeholder="password"/>
      </FormGroup>
      <button className="btn-lg btn-dark btn-block">Log in</button>
      <div className="text-center pt-3">
        or continue with your social account

      </div>
      <FacebookLoginButton className="mt-3 mb-3"/>
   <div className="text-center">
     <a href="/sign-up">sign up</a>
<span className="p-2">|</span>
<a href="/forget-password">forget password</a>

   </div>
    </form>
  );
}

export default App;
