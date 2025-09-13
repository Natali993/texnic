'use client';

import { useEffect, useState } from 'react';
import { isLegacyBrowser } from '@/lib/browser-detection';

interface LegacyFallbackProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

/**
 * Component that renders different content based on browser capabilities
 * Shows fallback content for legacy browsers, modern content for modern browsers
 */
export function LegacyFallback({ children, fallback }: LegacyFallbackProps) {
  const [isLegacy, setIsLegacy] = useState<boolean | null>(null);

  useEffect(() => {
    // Check browser capabilities after component mounts
    setIsLegacy(isLegacyBrowser());
  }, []);

  // During SSR and initial hydration, render modern content by default
  // The legacy detection script will handle showing the correct version
  if (isLegacy === null) {
    return (
      <>
        <div className="modern-content">
          {children}
        </div>
        <div className="legacy-content" style={{ display: 'none' }}>
          {fallback}
        </div>
      </>
    );
  }

  // After hydration, render appropriate content
  return isLegacy ? <>{fallback}</> : <>{children}</>;
}

/**
 * Hook to check if current browser is legacy
 */
export function useIsLegacyBrowser(): boolean | null {
  const [isLegacy, setIsLegacy] = useState<boolean | null>(null);

  useEffect(() => {
    setIsLegacy(isLegacyBrowser());
  }, []);

  return isLegacy;
}

export default LegacyFallback;
