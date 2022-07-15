import React from 'react';
import { render} from '@testing-library/react';
import Confirmation from '../componentsCommon/confirmation.js'

describe('Confirmation', ()=>{
    test('renders Confirmation component', () => {
      render(<Confirmation />);
    //   screen.debug();
  })
  });