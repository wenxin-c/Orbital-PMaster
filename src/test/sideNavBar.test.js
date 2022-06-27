import React from 'react';
import { render, screen } from '@testing-library/react';
import SideNavBar from '../componentsCommon/sideNavBar.js'

describe('SideNavBar', ()=>{
    test('renders SideNavBar component', () => {
      render(<SideNavBar />);
    //   screen.debug();
  })
  });