import React from 'react';
import { render, screen } from '@testing-library/react';
import CostManagement from '../componentsMain/costMain.js'

describe('CostManagement', ()=>{
    test('renders CostManagement component', () => {
      render(<CostManagement />);
    //   screen.debug();
  })
  });