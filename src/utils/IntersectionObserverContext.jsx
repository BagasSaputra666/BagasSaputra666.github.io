/* eslint-disable react/prop-types */
// IntersectionObserverContext.js
import { createContext, useContext, useEffect, useRef } from 'react';

const IntersectionObserverContext = createContext();

export const IntersectionObserverProvider = ({ children }) => {
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Stop observing after element is visible
          }
        });
      },
      { threshold: 0.1 }
    );

    observerRef.current = observer;

    return () => {
      observer.disconnect(); // Clean up observer on unmount
    };
  }, []);

  return (
    <IntersectionObserverContext.Provider value={observerRef}>
      {children}
    </IntersectionObserverContext.Provider>
  );
};

export const IntersectionObserver = () => {
  return useContext(IntersectionObserverContext);
};
