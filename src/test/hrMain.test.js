import React from 'react';
import { render, screen } from '@testing-library/react';
import HRManagement from '../componentsMain/hrMain.js'

describe('HRManagement', ()=>{
    test('renders HRManagement component', () => {
      render(<HRManagement />);
    //   screen.debug();
  })
  });