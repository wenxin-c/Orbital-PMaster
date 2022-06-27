import React from 'react';
import { render, screen } from '@testing-library/react';
import TableCost from '../componentsMain/tableCost.js'

describe('TableCost', ()=>{
    test('renders TableCost component', () => {
      render(<TableCost />);
    //   screen.debug();
  })
  });