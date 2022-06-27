import React from 'react';
import { render, screen } from '@testing-library/react';
import SummaryContent from '../componentsMain/summaryContent.js'

describe('SummaryContent', ()=>{
    test('renders SummaryContent component', () => {
      render(<SummaryContent />);
    //   screen.debug();
  })
  });