import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import ScrollToTop from '../pages/wrapper.js';
import { useEffect } from "react";
import { useLocation } from "react-router";

describe('ScrollToTop', ()=>{
  test('renders ScrollToTop component', () => {
    render(<ScrollToTop />);
    // screen.debug();
})
});