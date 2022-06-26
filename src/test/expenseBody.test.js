import React from 'react';
import { render, screen } from '@testing-library/react';
import ExpenseBody from '../componentsExpense/expenseBody.js'

describe('ExpenseBody', ()=>{
    test('renders ExpenseBody component', () => {
      render(<ExpenseBody />);
    //   screen.debug();
  })
  });