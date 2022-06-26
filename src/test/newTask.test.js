import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import NewTask from '../pages/newTask.js';
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavBar from '../componentsCommon/topNavBar.js'
import TaskContent from './../componentsTime/taskContent.js'

describe('NewTask', ()=>{
  test('renders NewTask component', () => {
    render(<NewTask />);
    // screen.debug();
})
});