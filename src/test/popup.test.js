import React from 'react';
import { render, screen } from '@testing-library/react';
import Popup from '../componentsCommon/popup.js'

describe('Popup', ()=>{
    test('renders Popup component', () => {
      render(<Popup />);
    //   screen.debug();
  })
  });