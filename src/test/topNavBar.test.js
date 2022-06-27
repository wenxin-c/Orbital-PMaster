import React from 'react';
import { render, screen } from '@testing-library/react';
import TopNavBar from '../componentsCommon/topNavBar.js'

describe('TopNavBar', ()=>{
    test('renders TopNavBar component', () => {
      render(<TopNavBar />);
    //   screen.debug();
  })
  });