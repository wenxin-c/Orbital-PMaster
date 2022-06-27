import React from 'react';
import { render, screen } from '@testing-library/react';
import InputBoxBudget from '../componentsCommon/inputBoxBudget.js'

describe('InputBoxBudget', ()=>{
    test('renders InputBoxBudget component', () => {
      render(<InputBoxBudget />);
    //   screen.debug();
  })
  });