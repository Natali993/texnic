
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Simplified Hero Section for legacy browsers
 * Uses basic CSS properties and fallback styles
 */
export const LegacyHeroSection = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#1f2937',
      color: '#ffffff',
      padding: '2rem 1rem',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '4rem'
      }}>
        {/* Main Content Container */}
        <div style={{
          display: 'block',
          textAlign: 'center'
        }}>
          {/* Left Content */}
          <div style={{
            marginBottom: '3rem'
          }}>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              <span style={{ color: '#22d3ee' }}>
                ЕЛЕКТРОМОНТАЖНІ
              </span>
              <br />
              <span style={{ color: '#ffffff' }}>РОБОТИ</span>
            </h1>

            <div style={{
              width: '80px',
              height: '4px',
              backgroundColor: '#22d3ee',
              margin: '0 auto 1.5rem auto'
            }}></div>

            <p style={{
              fontSize: '1.125rem',
              color: '#d1d5db',
              marginBottom: '2rem',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto 2rem auto'
            }}>
              Професійні електромонтажні роботи, монтаж електричних мереж,
              трансформаторних підстанцій та сонячних електростанцій.
            </p>

            {/* Stats Grid - Simplified for legacy browsers */}
            <div style={{
              display: 'block',
              marginBottom: '2rem'
            }}>
              <div style={{
                display: 'inline-block',
                width: '30%',
                margin: '0 1.5%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                verticalAlign: 'top',
                minWidth: '120px'
              }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: '#22d3ee',
                  marginBottom: '0.5rem'
                }}>100+</div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#9ca3af'
                }}>Проектів</div>
              </div>
              
              <div style={{
                display: 'inline-block',
                width: '30%',
                margin: '0 1.5%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                verticalAlign: 'top',
                minWidth: '120px'
              }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: '#22d3ee',
                  marginBottom: '0.5rem'
                }}>20+</div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#9ca3af'
                }}>Років досвіду</div>
              </div>
              
              <div style={{
                display: 'inline-block',
                width: '30%',
                margin: '0 1.5%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                verticalAlign: 'top',
                minWidth: '120px'
              }}>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#9ca3af',
                  lineHeight: '1.3'
                }}>Сертифікати,<br />дозвільні документи</div>
              </div>
            </div>

            {/* Buttons */}
            <div style={{
              marginBottom: '3rem'
            }}>
              <Link
                href="#posluhy"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#06b6d4',
                  color: '#ffffff',
                  padding: '1rem 2rem',
                  borderRadius: '25px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  margin: '0.5rem',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                ПОСЛУГИ
              </Link>
              <Link
                href="/contact#contact-form"
                style={{
                  display: 'inline-block',
                  backgroundColor: 'transparent',
                  color: '#22d3ee',
                  padding: '1rem 2rem',
                  borderRadius: '25px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  margin: '0.5rem',
                  border: '2px solid #22d3ee',
                  cursor: 'pointer'
                }}
              >
                Залишити заявку
              </Link>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div style={{
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              position: 'relative'
            }}>
              <Image
                src="/pictures9.png"
                alt="Електромонтажники європейської зовнішності працюють на вишці"
                width={400}
                height={200}
                style={{
                  borderRadius: '8px',
                  width: '100%',
                  height: 'auto'
                }}
              />

              {/* Quality Badge - Simplified */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '0.75rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                fontSize: '0.875rem'
              }}>
                <div style={{
                  display: 'inline-block',
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#06b6d4',
                  borderRadius: '50%',
                  marginRight: '0.5rem',
                  verticalAlign: 'middle',
                  textAlign: 'center',
                  lineHeight: '24px',
                  fontSize: '12px'
                }}>✓</div>
                <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                  <div style={{ color: '#ffffff', fontWeight: '600' }}>Якість</div>
                  <div style={{ color: '#ffffff', fontSize: '0.75rem' }}>Сертифіковані роботи</div>
                </div>
              </div>

              {/* Speed Badge - Simplified */}
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                right: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '0.75rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                fontSize: '0.875rem'
              }}>
                <div style={{
                  display: 'inline-block',
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#14b8a6',
                  borderRadius: '50%',
                  marginRight: '0.5rem',
                  verticalAlign: 'middle',
                  textAlign: 'center',
                  lineHeight: '24px',
                  fontSize: '12px'
                }}>⏱</div>
                <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                  <div style={{ color: '#ffffff', fontWeight: '600' }}>Швидко</div>
                  <div style={{ color: '#ffffff', fontSize: '0.75rem' }}>Терміни виконання</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Simplified */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        marginLeft: '-12px',
        color: '#22d3ee',
        fontSize: '1.5rem'
      }}>
        ↓
      </div>
    </div>
  );
};

export default LegacyHeroSection;
