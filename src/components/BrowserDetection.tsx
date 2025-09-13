'use client';

import { useEffect } from 'react';
import { initializeBrowserDetection } from '@/lib/browser-detection';

/**
 * Component that initializes browser detection and applies legacy fallbacks
 * Should be included early in the app, preferably in the root layout
 */
export function BrowserDetection() {
  useEffect(() => {
    initializeBrowserDetection();
  }, []);

  // This component doesn't render anything visible
  return null;
}

export default BrowserDetection;
