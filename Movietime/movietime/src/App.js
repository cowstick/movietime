import React, { useState, useEffect } from "react";
import { useSpring, animated } from '@react-spring/web';
import "./App.css";
import MovieSearch from "./MovieSearch"; // Assuming you already have this component

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // React Spring: Define the curtain animation for left and right curtains
  const leftCurtainStyle = useSpring({
    transform: isOpen ? "translateX(-100%)" : "translateX(0%)", // Opening/closing effect
    config: { tension: 170, friction: 26 }, // Customize the spring animation
  });

  const rightCurtainStyle = useSpring({
    transform: isOpen ? "translateX(100%)" : "translateX(0%)", // Opening/closing effect
    config: { tension: 170, friction: 26 },
  });

  // Simulate curtain opening after 2 seconds
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true); // Open curtains after 2 seconds
    }, 2000);
  }, []);

  return (
    <div className="theater">
      {/* Left Curtain animated with React Spring */}
      <animated.div className="curtain-left" style={leftCurtainStyle}></animated.div>

      <div className="screen-container">
        {/* Movie Title */}
        <h1 className="movie-title">Now Showing</h1>
        
        {/* Movie Screen */}
        <div className="screen">
          {/* Movie Search Box */}
          <MovieSearch />
        </div>
      </div>

      {/* Right Curtain animated with React Spring */}
      <animated.div className="curtain-right" style={rightCurtainStyle}></animated.div>
    </div>
  );
}

export default App;
