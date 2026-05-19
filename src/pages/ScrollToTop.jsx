import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Forces the window context to snap to the absolute top coordinates instantly on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}