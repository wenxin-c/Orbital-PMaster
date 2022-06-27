import React from 'react';
import { render, screen } from '@testing-library/react';
import Summary from '../componentsMain/summaryMain.js'

describe('Summary', ()=>{
    test('renders Summary component', () => {
      render(<Summary />);
    //   screen.debug();
  })
  });