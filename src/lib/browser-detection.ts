/**
 * Browser feature detection utilities
 * Detects support for modern CSS features and applies fallbacks for legacy browsers
 */

export interface BrowserCapabilities {
  cssVariables: boolean;
  flexbox: boolean;
  grid: boolean;
  gradients: boolean;
  transforms: boolean;
  backdropFilter: boolean;
  clipPath: boolean;
}

/**
 * Detect if the browser supports CSS custom properties (variables)
 */
export function supportsCSSVariables(): boolean {
  if (typeof window === 'undefined') return true; // SSR fallback
  
  try {
    const testElement = document.createElement('div');
    testElement.style.setProperty('--test-var', 'test');
    return testElement.style.getPropertyValue('--test-var') === 'test';
  } catch {
    return false;
  }
}

/**
 * Detect if the browser supports Flexbox
 */
export function supportsFlexbox(): boolean {
  if (typeof window === 'undefined') return true; // SSR fallback
  
  try {
    const testElement = document.createElement('div');
    testElement.style.display = 'flex';
    return testElement.style.display === 'flex';
  } catch {
    return false;
  }
}

/**
 * Detect if the browser supports CSS Grid
 */
export function supportsGrid(): boolean {
  if (typeof window === 'undefined') return true; // SSR fallback
  
  try {
    const testElement = document.createElement('div');
    testElement.style.display = 'grid';
    return testElement.style.display === 'grid';
  } catch {
    return false;
  }
}

/**
 * Detect if the browser supports CSS gradients
 */
export function supportsGradients(): boolean {
  if (typeof window === 'undefined') return true; // SSR fallback
  
  try {
    const testElement = document.createElement('div');
    testElement.style.background = 'linear-gradient(to right, #000, #fff)';
    return testElement.style.background.includes('gradient');
  } catch {
    return false;
  }
}

/**
 * Detect if the browser supports CSS transforms
 */
export function supportsTransforms(): boolean {
  if (typeof window === 'undefined') return true; // SSR fallback
  
  try {
    const testElement = document.createElement('div');
    testElement.style.transform = 'translateX(10px)';
    return testElement.style.transform === 'translateX(10px)';
  } catch {
    return false;
  }
}

/**
 * Detect if the browser supports backdrop-filter
 */
export function supportsBackdropFilter(): boolean {
  if (typeof window === 'undefined') return true; // SSR fallback
  
  try {
    const testElement = document.createElement('div');
    testElement.style.backdropFilter = 'blur(10px)';
    return testElement.style.backdropFilter === 'blur(10px)';
  } catch {
    return false;
  }
}

/**
 * Detect if the browser supports clip-path
 */
export function supportsClipPath(): boolean {
  if (typeof window === 'undefined') return true; // SSR fallback
  
  try {
    const testElement = document.createElement('div');
    testElement.style.clipPath = 'circle(50%)';
    return testElement.style.clipPath === 'circle(50%)';
  } catch {
    return false;
  }
}

/**
 * Get all browser capabilities
 */
export function getBrowserCapabilities(): BrowserCapabilities {
  return {
    cssVariables: supportsCSSVariables(),
    flexbox: supportsFlexbox(),
    grid: supportsGrid(),
    gradients: supportsGradients(),
    transforms: supportsTransforms(),
    backdropFilter: supportsBackdropFilter(),
    clipPath: supportsClipPath(),
  };
}

/**
 * Check if the browser is considered "legacy" (lacks multiple modern features)
 */
export function isLegacyBrowser(): boolean {
  const capabilities = getBrowserCapabilities();
  const modernFeatures = Object.values(capabilities);
  const supportedFeatures = modernFeatures.filter(Boolean).length;
  
  // Consider it legacy if it supports less than 4 out of 7 modern features
  return supportedFeatures < 4;
}

/**
 * Apply legacy fallback class to document body if needed
 */
export function applyLegacyFallbacks(): void {
  if (typeof window === 'undefined') return; // SSR guard
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyLegacyFallbacks);
    return;
  }
  
  if (isLegacyBrowser()) {
    document.body.classList.add('legacy-fallback');
    console.log('Legacy browser detected, applying fallback styles');
  }
}

/**
 * Initialize browser detection and apply fallbacks
 * Call this function early in your app initialization
 */
export function initializeBrowserDetection(): void {
  if (typeof window === 'undefined') return; // SSR guard
  
  // Apply fallbacks immediately if possible
  applyLegacyFallbacks();
  
  // Also apply on window load as a backup
  window.addEventListener('load', applyLegacyFallbacks);
}
