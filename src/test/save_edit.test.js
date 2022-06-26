import React from 'react';
import { render, screen } from '@testing-library/react';
import SaveEditButton from '../componentsCommon/save_edit.js'

describe('SaveEditButton', ()=>{
    test('renders SaveEditButton component', () => {
      render(<SaveEditButton />);
    //   screen.debug();
  })
  });