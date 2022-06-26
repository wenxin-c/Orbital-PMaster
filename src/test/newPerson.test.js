import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import NewPerson from '../pages/newPerson.js';
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavBar from '../componentsCommon/topNavBar.js'
import PersonContent from './../componentsPerson/personContent.js'

describe('NewPerson', ()=>{
  test('renders NewPerson component', () => {
    render(<NewPerson />);
    // screen.debug();
})
});