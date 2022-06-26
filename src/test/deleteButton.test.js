import React from 'react';
import { render, screen } from '@testing-library/react';
import DeleteButton from '../componentsCommon/deleteButton.js'

describe('DeleteButton', ()=>{
    test('renders DeleteButton component', () => {
      render(<DeleteButton />);
    //   screen.debug();
  })
  });