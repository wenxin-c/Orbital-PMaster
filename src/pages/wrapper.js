import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * @file: wrapper.js
 * @author: wenxin
 * 
 * This is to jump to the top of the new page when using react router for frontend routing among different pages. 
 * 
 * @param {in} props 
 * @returns react-dom
 */
const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};


export default ScrollToTop;