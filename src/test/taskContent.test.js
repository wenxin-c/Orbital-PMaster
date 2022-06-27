import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskContent from '../componentsTime/taskContent.js'

describe('TaskContent', ()=>{
    test('renders TaskContent component', () => {
      render(<TaskContent />);
    //   screen.debug();
  })
  });