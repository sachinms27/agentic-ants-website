"use client";

import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId) {
              setActiveSection(sectionId);
              window.history.replaceState(null, '', `#${sectionId}`);
            }
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0
      }
    );

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Handle scroll to top - remove hash
    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection((prev) => {
          if (prev !== '') {
            window.history.replaceState(null, '', window.location.pathname);
            return '';
          }
          return prev;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
}
