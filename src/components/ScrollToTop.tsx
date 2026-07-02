import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getNavigationState, resetNavigationFlag } from '@/hooks/useScrollRestoration';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const isFirstMount = useRef(true);

  // Scroll to top on forward navigation (link clicks)
  useEffect(() => {
    // Skip scroll on first mount
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    // Check if this is a back/forward navigation
    const isBackOrForward = getNavigationState().isBackOrForward;
    
    if (!isBackOrForward) {
      // Forward navigation (link click): scroll to top immediately
      window.scrollTo(0, 0);
      // Explicitly reset flag to ensure clean state for next navigation
      resetNavigationFlag();
    }
    // If it's back/forward, useScrollRestoration will handle restoration and flag reset
  }, [pathname]);

  return null;
}
