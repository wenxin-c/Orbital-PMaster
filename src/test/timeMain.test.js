import React from 'react';
import { render, screen } from '@testing-library/react';
import TimeManagement from '../componentsMain/timeMain.js'

describe('TimeManagement', ()=>{
    test('renders TimeManagement component', () => {
      render(<TimeManagement />);
    //   screen.debug();
  })
  });