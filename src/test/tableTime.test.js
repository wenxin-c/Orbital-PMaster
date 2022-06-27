import React from 'react';
import { render, screen } from '@testing-library/react';
import TableTime from '../componentsMain/tableTime.js'

describe('TableTime', ()=>{
    test('renders TableTime component', () => {
      render(<TableTime />);
    //   screen.debug();
  })
  });