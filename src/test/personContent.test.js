import React from 'react';
import { render, screen } from '@testing-library/react';
import PersonContent from '../componentsPerson/personContent.js'

describe('PersonContent', ()=>{
    test('renders PersonContent component', () => {
      render(<PersonContent />);
    //   screen.debug();
  })
  });