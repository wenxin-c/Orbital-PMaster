import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import NewExpense from '../pages/newExpense.js';
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavBar from '../componentsCommon/topNavBar.js'
import ExpenseBody from './../componentsExpense/expenseBody.js'

describe('NewExpense', ()=>{
  test('renders NewExpense component', () => {
    render(<NewExpense />);
    // screen.debug();
})
});