import { useEffect, useState } from 'react';

export const useInView = (ref, options = {}) => {
  const [inView, setInView] = useState(false); 
  const [hasBeenInView, setHasBeenInView] = useState(false); 

  useEffect(() => {
    if (!ref.current || hasBeenInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setHasBeenInView(true); 
        }
      },
      { threshold: 0.3, ...options }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options, hasBeenInView]);

  return inView;
};
