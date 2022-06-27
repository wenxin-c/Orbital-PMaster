import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import MainPage from '../pages/main.js';
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import TopNavBar from '../componentsCommon/topNavBar.js'
import MainContent from '../componentsMain/bodyMain.js'

describe('MainPage', ()=>{
  test('renders MainPage component', () => {
    render(<MainPage />);
    // screen.debug();
})
});