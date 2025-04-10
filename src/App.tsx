import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import { motion } from 'framer-motion';

function App() {
  // Set loading to false initially so animation doesn't show
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Preload important assets
    const imageUrls = [
      'https://images.unsplash.com/photo-1564936281291-294551497d81?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571066811602-716837d681de?q=80&w=1844&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80&w=1200',
      // Add more images if needed
    ];

    // Preload images without animation
    const preloadImages = async () => {
      const imagePromises = imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
      } catch (error) {
        console.error('Failed to preload resources:', error);
      }
    };

    preloadImages();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900">
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: '#262626', // zinc-800
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 10px 40px -10px rgba(0,0,0,0.7)',
          },
          success: {
            iconTheme: {
              primary: '#f59e0b',
              secondary: '#000',
            },
          },
        }}
      />
      
      <motion.div
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <Header />
        <Hero />
        <Menu />
        <About />
        
        {/* Improved back to top button with scroll behavior */}
        <ScrollToTopButton />
      </motion.div>
    </div>
  );
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  return (
    <motion.button
      className="fixed right-6 bottom-6 z-40 h-12 w-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white flex items-center justify-center shadow-xl shadow-orange-600/20"
      initial={{ opacity: 0, y: 10 }}
      animate={{ 
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 10,
        pointerEvents: visible ? 'auto' : 'none',
      }}
      transition={{ duration: 0.2 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      whileHover={{ 
        scale: 1.1, 
        boxShadow: '0 15px 30px -10px rgba(251, 146, 60, 0.4)' 
      }}
      whileTap={{ scale: 0.95 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    </motion.button>
  );
}

export default App;