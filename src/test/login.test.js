import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import Login from '../pages/login.js';
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import './../styles/login.css'
import { FaFacebook, FaTwitter, FaGoogle} from "react-icons/fa";
import {
     Link, Router
  } from "react-router-dom";

describe('Login', ()=>{
  test('renders Login component', () => {
    render(<Login />);
    // screen.debug();
})
});
