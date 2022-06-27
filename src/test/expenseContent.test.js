import React from 'react';
import { render, screen } from '@testing-library/react';
import ExpenseContent from '../componentsExpense/expenseContent.js'

describe('ExpenseContent', ()=>{
    test('renders ExpenseContent component', () => {
      render(<ExpenseContent />);
    //   screen.debug();
  })
  });