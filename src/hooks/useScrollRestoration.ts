import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Global map to store scroll positions for each route
const scrollPositions = new Map<string, number>();

// Global navigation state - single source of truth
const navigationState = {
  isBackOrForward: false,
};

// Export function to access navigation state
export function getNavigationState() {
  return navigationState;
}

// Export function to reset navigation flag
export function resetNavigationFlag() {
  navigationState.isBackOrForward = false;
}

/**
 * Hook to save and restore scroll position when navigating
 * - Saves scroll position continuously while on a page
 * - Restores scroll position when using browser back button
 * - Scrolls to top when clicking links (forward navigation)
 */
export function useScrollRestoration() {
  const location = useLocation();
  const prevPathname = useRef<string>(location.pathname);

  // Disable browser's native scroll restoration for manual control
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Detect back/forward navigation via popstate event
  useEffect(() => {
    const handlePopState = () => {
      navigationState.isBackOrForward = true;
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Save scroll position on every scroll
  useEffect(() => {
    const handleScroll = () => {
      scrollPositions.set(location.pathname, window.scrollY);
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle scroll restoration on pathname change
  useEffect(() => {
    // Only execute on route change
    if (location.pathname === prevPathname.current) {
      return;
    }

    prevPathname.current = location.pathname;

    // Only restore scroll position if this is a back/forward navigation
    if (navigationState.isBackOrForward) {
      // Use requestAnimationFrame to ensure DOM is updated before scrolling
      const frameId = requestAnimationFrame(() => {
        const savedPos = scrollPositions.get(location.pathname) ?? 0;
        window.scrollTo(0, savedPos);
        
        // Reset flag AFTER restoration is complete
        navigationState.isBackOrForward = false;
      });
      
      return () => cancelAnimationFrame(frameId);
    }
    // For forward navigation (link clicks), ScrollToTop component handles scrolling to 0
  }, [location.pathname]);
}
