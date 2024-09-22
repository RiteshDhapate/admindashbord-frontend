"use client";
import React, { createContext, useEffect, useState } from "react";

// Create the context
export const MyContext = createContext();

const MyProvider = ({ children }) => {
   const [isGreaterThanMd, setIsGreaterThanMd] = useState(false);

   // Function to check window size
   const checkWindowSize = () => {
     if (window.innerWidth >= 768) {
       setIsGreaterThanMd(true);
     } else {
       setIsGreaterThanMd(false);
     }
   };

   // Add event listener on window resize
   useEffect(() => {
     // Check the window size initially
     checkWindowSize();

     // Listen to the window resize event
     window.addEventListener("resize", checkWindowSize);

     // Clean up the event listener when the component unmounts
     return () => window.removeEventListener("resize", checkWindowSize);
   }, []);
    
  return (
    <MyContext.Provider value={{ isGreaterThanMd, setIsGreaterThanMd }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
