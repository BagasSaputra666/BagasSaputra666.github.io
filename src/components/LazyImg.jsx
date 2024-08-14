/* eslint-disable react/prop-types */
import { useEffect, useRef, useState, memo } from 'react';

const LazyImage = ({ src, data, alt, additionalClass = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Salin nilai imgRef.current ke variabel lokal
    const imgElement = imgRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.unobserve(entry.target); // Stop observing after image is loaded
        }
      });
    });

    if (imgElement) {
      observer.observe(imgElement);
    }

    return () => {
      // Gunakan variabel lokal untuk memastikan referensi tetap konsisten
      if (imgElement) {
        observer.unobserve(imgElement);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      className={`lazy ${isLoaded ? 'animate' : ''} ${additionalClass}`}
      src={isLoaded ? data : src}
      alt={alt}
      loading="lazy"
    />
  );
};

export default memo(LazyImage);
