import React from 'react';
import { render, screen } from '@testing-library/react';
import TableHR from '../componentsMain/tableHR.js'

describe('TableHR', ()=>{
    test('renders TableHR component', () => {
      render(<TableHR />);
    //   screen.debug();
  })
  });