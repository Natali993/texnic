'use client';

import { useEffect, useState } from 'react';
import { getBrowserCapabilities, isLegacyBrowser } from '@/lib/browser-detection';

/**
 * Development component to test browser detection
 * Shows current browser capabilities and allows manual testing
 */
export function BrowserTestPanel() {
  const [capabilities, setCapabilities] = useState<any>(null);
  const [isLegacy, setIsLegacy] = useState<boolean | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setCapabilities(getBrowserCapabilities());
    setIsLegacy(isLegacyBrowser());
  }, []);

  if (!isVisible) {
    return (
      <div style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 9999,
        backgroundColor: '#1f2937',
        color: '#ffffff',
        padding: '8px 12px',
        borderRadius: '4px',
        fontSize: '12px',
        cursor: 'pointer',
        border: '1px solid #374151'
      }} onClick={() => setIsVisible(true)}>
        🔧 Browser Test
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      zIndex: 9999,
      backgroundColor: '#1f2937',
      color: '#ffffff',
      padding: '16px',
      borderRadius: '8px',
      fontSize: '12px',
      maxWidth: '300px',
      border: '1px solid #374151',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '12px'
      }}>
        <strong>Browser Detection Test</strong>
        <button 
          onClick={() => setIsVisible(false)}
          style={{
            background: 'none',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          ×
        </button>
      </div>
      
      <div style={{ marginBottom: '12px' }}>
        <strong>Status: </strong>
        <span style={{ 
          color: isLegacy ? '#ef4444' : '#10b981',
          fontWeight: 'bold'
        }}>
          {isLegacy ? 'Legacy Browser' : 'Modern Browser'}
        </span>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <strong>Capabilities:</strong>
      </div>

      {capabilities && (
        <div style={{ fontSize: '11px', lineHeight: '1.4' }}>
          {Object.entries(capabilities).map(([feature, supported]) => (
            <div key={feature} style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginBottom: '4px'
            }}>
              <span>{feature}:</span>
              <span style={{ 
                color: supported ? '#10b981' : '#ef4444',
                fontWeight: 'bold'
              }}>
                {supported ? '✓' : '✗'}
              </span>
            </div>
          ))}
        </div>
      )}

      <div style={{ 
        marginTop: '12px', 
        paddingTop: '12px', 
        borderTop: '1px solid #374151' 
      }}>
        <button
          onClick={() => {
            document.body.classList.toggle('legacy-fallback');
            window.location.reload();
          }}
          style={{
            backgroundColor: '#06b6d4',
            color: '#ffffff',
            border: 'none',
            padding: '6px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '11px',
            width: '100%'
          }}
        >
          Toggle Legacy Mode
        </button>
      </div>

      <div style={{ 
        marginTop: '8px',
        fontSize: '10px',
        color: '#9ca3af',
        textAlign: 'center'
      }}>
        Current classes: {document.body.className}
      </div>
    </div>
  );
}

export default BrowserTestPanel;
