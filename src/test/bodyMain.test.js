import React from 'react';
import { render, screen } from '@testing-library/react';
import MainContent from '../componentsMain/bodyMain.js'

describe('MainContent', ()=>{
    test('renders MainContent component', () => {
      render(<MainContent />);
    //   screen.debug();
  })
  });