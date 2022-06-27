import React from 'react';
import { render, screen } from '@testing-library/react';
import Heading from '../componentsCommon/headingContent.js'

describe('Heading', ()=>{
    test('renders Heading component', () => {
      render(<Heading />);
    //   screen.debug();
  })
  });