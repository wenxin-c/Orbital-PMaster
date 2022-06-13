import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

// class ScrollToTop extends React.Component {
//     componentDidUpdate(prevProps) {
//       const { location } = this.props;
//       if (location.pathname !== prevProps.location.pathname) {
//         window.scrollTo(0, 0);
//       }
//     }
  
//     render() {
//       const { children } = this.props;
//       return children;
//     }
//   }

export default ScrollToTop;