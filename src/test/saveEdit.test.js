import React from 'react';
import { render, screen } from '@testing-library/react';
import SaveEditButton from '../componentsCommon/saveEdit.js'

describe('SaveEditButton', ()=>{
    test('renders SaveEditButton component', () => {
      render(<SaveEditButton />);
    //   screen.debug();
  })
  });