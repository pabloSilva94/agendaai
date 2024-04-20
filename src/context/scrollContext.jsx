import React, { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export const useScrollContext = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const containerRef = useRef(null);

  const scrollToCurrentDay = () => {
    if (containerRef.current) {
      const diaAtualElement = containerRef.current.querySelector(".currentDay");
      console.log(diaAtualElement);

      if (diaAtualElement) {
        diaAtualElement.scrollIntoViewIfNeeded({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  };

  return (
    <ScrollContext.Provider value={{ containerRef, scrollToCurrentDay }}>
      {children}
    </ScrollContext.Provider>
  );
};
