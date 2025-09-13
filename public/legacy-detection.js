/**
 * Legacy browser detection script
 * This script runs immediately to detect legacy browsers and apply fallback styles
 * It's included as a blocking script in the head to prevent FOUC (Flash of Unstyled Content)
 */

(function() {
  'use strict';
  
  // Feature detection functions
  function supportsCSSVariables() {
    try {
      var testElement = document.createElement('div');
      testElement.style.setProperty('--test-var', 'test');
      return testElement.style.getPropertyValue('--test-var') === 'test';
    } catch (e) {
      return false;
    }
  }
  
  function supportsFlexbox() {
    try {
      var testElement = document.createElement('div');
      testElement.style.display = 'flex';
      return testElement.style.display === 'flex';
    } catch (e) {
      return false;
    }
  }
  
  function supportsGrid() {
    try {
      var testElement = document.createElement('div');
      testElement.style.display = 'grid';
      return testElement.style.display === 'grid';
    } catch (e) {
      return false;
    }
  }
  
  function supportsGradients() {
    try {
      var testElement = document.createElement('div');
      testElement.style.background = 'linear-gradient(to right, #000, #fff)';
      return testElement.style.background.indexOf('gradient') !== -1;
    } catch (e) {
      return false;
    }
  }
  
  function supportsTransforms() {
    try {
      var testElement = document.createElement('div');
      testElement.style.transform = 'translateX(10px)';
      return testElement.style.transform === 'translateX(10px)';
    } catch (e) {
      return false;
    }
  }
  
  function supportsBackdropFilter() {
    try {
      var testElement = document.createElement('div');
      testElement.style.backdropFilter = 'blur(10px)';
      return testElement.style.backdropFilter === 'blur(10px)';
    } catch (e) {
      return false;
    }
  }
  
  // Check browser capabilities
  function getBrowserCapabilities() {
    return {
      cssVariables: supportsCSSVariables(),
      flexbox: supportsFlexbox(),
      grid: supportsGrid(),
      gradients: supportsGradients(),
      transforms: supportsTransforms(),
      backdropFilter: supportsBackdropFilter()
    };
  }
  
  // Determine if browser is legacy
  function isLegacyBrowser() {
    var capabilities = getBrowserCapabilities();
    var features = Object.keys(capabilities);
    var supportedCount = 0;
    
    for (var i = 0; i < features.length; i++) {
      if (capabilities[features[i]]) {
        supportedCount++;
      }
    }
    
    // Consider it legacy if it supports less than 4 out of 6 modern features
    return supportedCount < 4;
  }
  
  // Apply legacy class and switch content
  function applyLegacyClass() {
    if (isLegacyBrowser()) {
      document.documentElement.className += ' legacy-browser';
      if (document.body) {
        document.body.className += ' legacy-fallback';
        switchToLegacyContent();
      } else {
        // If body doesn't exist yet, wait for it
        document.addEventListener('DOMContentLoaded', function() {
          document.body.className += ' legacy-fallback';
          switchToLegacyContent();
        });
      }

      // Log for debugging
      if (window.console && console.log) {
        console.log('Legacy browser detected, applying fallback styles');
      }
    }
  }

  // Switch to legacy content
  function switchToLegacyContent() {
    // Hide modern content, show legacy content
    var modernElements = document.querySelectorAll('.modern-content');
    var legacyElements = document.querySelectorAll('.legacy-content');

    for (var i = 0; i < modernElements.length; i++) {
      modernElements[i].style.display = 'none';
    }

    for (var j = 0; j < legacyElements.length; j++) {
      legacyElements[j].style.display = 'block';
    }
  }
  
  // Run detection immediately
  applyLegacyClass();
  
  // Also run when DOM is ready as a backup
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyLegacyClass);
  }
  
})();
