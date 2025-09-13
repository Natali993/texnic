'use client';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Simplified CategoryCard for legacy browsers
 */
const LegacyCategoryCard = ({ category, index }: { category: any, index: number }) => {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      marginBottom: '1.5rem',
      position: 'relative',
      border: '1px solid #e5e7eb'
    }}>
      {/* Image Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '200px',
        overflow: 'hidden'
      }}>
        <Image
          src={category.imageSrc}
          alt={category.altText}
          fill
          style={{
            objectFit: 'cover'
          }}
        />
        
        {/* Number Badge */}
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          width: '32px',
          height: '32px',
          backgroundColor: '#06b6d4',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: '0.875rem'
        }}>
          {index + 1}
        </div>
      </div>

      {/* Content */}
      <div style={{
        padding: '1.5rem'
      }}>
        <h3 style={{
          fontSize: '1.125rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '1rem',
          lineHeight: '1.4'
        }}>
          {category.name}
        </h3>
        
        <div style={{
          width: '48px',
          height: '4px',
          backgroundColor: '#06b6d4',
          borderRadius: '2px',
          marginBottom: '1rem'
        }}></div>

        <Link 
          href={category.href}
          style={{
            display: 'inline-block',
            backgroundColor: '#06b6d4',
            color: '#ffffff',
            padding: '0.75rem 1.5rem',
            borderRadius: '25px',
            fontWeight: '600',
            textDecoration: 'none',
            fontSize: '0.875rem',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          ДЕТАЛЬНІШЕ
        </Link>
      </div>
    </div>
  );
};

/**
 * Simplified SpecializedServicesSection for legacy browsers
 */
export function LegacySpecializedServicesSection() {
  const categories = [
    {
      name: 'ЕЛЕКТОМОНТАЖНІ РОБОТИ',
      imageSrc: '/pictures8.png',
      altText: 'Професійний електрик європейської зовнішності встановлює внутрішню електропроводку',
      href: '/elektromontazhni-roboty',
    },
    {
      name: 'ЕЛЕКТРОТЕХНІЧНА ЛАБОРАТОРІЯ',
      imageSrc: '/pictures5.png',
      altText: 'Послуги вимірювання ізоляції',
      href: '/electrichna-laboratoria/',
    },
    {
      name: 'БЛИСКАВКОЗАХИСТ',
      imageSrc: '/bluskzaxpng.webp',
      altText: 'Встановлення камер відеоспостереження та систем безпеки',
      href: '/blyskaykozahyst',
    },
    {
      name: 'ПРОТИПОЖЕЖНА ОБРОБКА',
      imageSrc: '/pictures2.png',
      altText: 'Встановлення протипожежних систем та електричної сигналізації',
      href: '/antifire-obrobka/',
    },
    {
      name: 'СОНЯЧНІ ЕЛЕКТРОСТАНЦІЇ',
      imageSrc: '/pictures4.png',
      altText: 'Електричні панелі управління та системи автоматизації',
      href: '/sonychni-elektrostancii/'
    }
  ];

  return (
    <div style={{
      padding: '5rem 0',
      backgroundColor: '#f9fafb'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#06b6d4',
            marginBottom: '1.5rem'
          }}>
            ПОСЛУГИ
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            backgroundColor: '#06b6d4',
            margin: '0 auto 1.5rem auto'
          }}></div>
          <p style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Оберіть категорію, щоб дізнатись деталі
          </p>
        </div>

        {/* Categories Grid - Simplified for legacy browsers */}
        <div style={{
          display: 'block',
          marginBottom: '4rem'
        }}>
          {/* Desktop: 3 columns, Mobile: 1 column */}
          <div style={{
            display: 'block'
          }}>
            {categories.map((category, index) => (
              <div key={index} style={{
                display: 'inline-block',
                width: '31%',
                margin: '0 1%',
                verticalAlign: 'top',
                minWidth: '280px'
              }}>
                <LegacyCategoryCard category={category} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action - Simplified */}
        <div style={{
          textAlign: 'center'
        }}>
          <div style={{
            backgroundColor: '#1f2937',
            borderRadius: '12px',
            padding: '3rem',
            position: 'relative'
          }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: '1rem'
            }}>
              Потрібна консультація спеціаліста?
            </h3>
            <p style={{
              color: '#d1d5db',
              marginBottom: '2rem',
              fontSize: '1.125rem',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto 2rem auto'
            }}>
              Зв'яжіться з нами, і ми допоможемо підібрати найкраще рішення для ваших електромонтажних потреб
            </p>
            <div style={{
              display: 'block'
            }}>
              <Link 
                href="/contact#contact-form"
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
                Залишити заявку
              </Link>
              <Link 
                href="#posluhy"
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
                ПОСЛУГИ
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="display: inline-block"][style*="width: 31%"] {
            display: block !important;
            width: 100% !important;
            margin: 0 0 1.5rem 0 !important;
          }
        }
      `}</style>
    </div>
  );
}

export default LegacySpecializedServicesSection;
