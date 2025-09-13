import { Layout } from '../../components/Layout';
import { LegacyFallback } from '../../components/LegacyFallback';

// Modern component with advanced CSS
const ModernTestComponent = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 transform hover:scale-105 transition-all duration-300">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
        Modern Browser Features
      </h1>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-xl text-white">
          CSS Grid
        </div>
        <div className="bg-gradient-to-r from-pink-400 to-red-500 p-4 rounded-xl text-white">
          Gradients
        </div>
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-xl text-white transform rotate-3">
          Transforms
        </div>
        <div className="bg-gradient-to-r from-indigo-400 to-purple-500 p-4 rounded-xl text-white">
          Backdrop Filter
        </div>
      </div>
      <p className="text-white/80">
        Цей компонент використовує сучасні CSS властивості, які можуть не працювати в старих браузерах.
      </p>
    </div>
  </div>
);

// Legacy fallback component with basic CSS
const LegacyTestComponent = () => (
  <div style={{
    minHeight: '100vh',
    backgroundColor: '#1e1b4b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem'
  }}>
    <div style={{
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      padding: '2rem',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      maxWidth: '600px',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#22d3ee',
        marginBottom: '1rem'
      }}>
        Legacy Browser Support
      </h1>
      <div style={{
        display: 'block',
        marginBottom: '1.5rem'
      }}>
        <div style={{
          display: 'inline-block',
          backgroundColor: '#10b981',
          padding: '1rem',
          borderRadius: '8px',
          color: '#ffffff',
          margin: '0.5rem',
          width: '45%',
          minWidth: '120px'
        }}>
          Базові стилі
        </div>
        <div style={{
          display: 'inline-block',
          backgroundColor: '#ef4444',
          padding: '1rem',
          borderRadius: '8px',
          color: '#ffffff',
          margin: '0.5rem',
          width: '45%',
          minWidth: '120px'
        }}>
          Solid кольори
        </div>
        <div style={{
          display: 'inline-block',
          backgroundColor: '#f59e0b',
          padding: '1rem',
          borderRadius: '8px',
          color: '#ffffff',
          margin: '0.5rem',
          width: '45%',
          minWidth: '120px'
        }}>
          Простий layout
        </div>
        <div style={{
          display: 'inline-block',
          backgroundColor: '#8b5cf6',
          padding: '1rem',
          borderRadius: '8px',
          color: '#ffffff',
          margin: '0.5rem',
          width: '45%',
          minWidth: '120px'
        }}>
          Сумісність
        </div>
      </div>
      <p style={{
        color: 'rgba(255, 255, 255, 0.8)',
        lineHeight: '1.6'
      }}>
        Цей компонент використовує тільки базові CSS властивості, які працюють у всіх браузерах, 
        включаючи Internet Explorer та старі версії Chrome, Firefox, Safari.
      </p>
      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: 'rgba(34, 211, 238, 0.1)',
        borderRadius: '8px',
        border: '1px solid rgba(34, 211, 238, 0.3)'
      }}>
        <strong style={{ color: '#22d3ee' }}>Підтримувані браузери:</strong>
        <br />
        <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.9rem' }}>
          IE 9+, Chrome 1+, Firefox 3.5+, Safari 3+, Opera 10+
        </span>
      </div>
    </div>
  </div>
);

export default function TestLegacyPage() {
  return (
    <Layout>
      <LegacyFallback
        fallback={<LegacyTestComponent />}
      >
        <ModernTestComponent />
      </LegacyFallback>
    </Layout>
  );
}
