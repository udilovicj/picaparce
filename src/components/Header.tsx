import { motion } from 'framer-motion';
import { Menu as MenuIcon, ShoppingBag, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
    >
      {/* Modern backdrop effect */}
      <div className={`absolute inset-0 transition-all duration-300 ${
        scrolled 
          ? 'bg-zinc-900/95 border-b border-zinc-800 backdrop-blur-md' 
          : 'bg-transparent'
      }`}></div>
      
      <div className="container relative mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo - Simplified */}
          <motion.a 
            href="#"
            className="flex items-center text-white relative"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-16 h-16 relative flex items-center justify-center">
              <img 
                src={logo} 
                alt="Pica Parče Logo" 
                className="h-full w-auto object-contain"
              />
            </div>
          </motion.a>
          
          {/* Desktop Navigation - Minimalist */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { name: 'Početna', id: 'hero' },
              { name: 'Meni', id: 'menu' },
              { name: 'O nama', id: 'about' }
            ].map((item, i) => (
              <motion.a
                key={item.name}
                href={`#${item.id}`}
                className="relative text-sm font-medium text-white/70 hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-amber-500 after:transition-all hover:after:w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * i }}
              >
                {item.name}
              </motion.a>
            ))}
            
            <motion.a
              href="#menu"
              className="ml-4 flex items-center gap-2 rounded-md bg-amber-500 px-5 py-2 text-sm font-medium text-zinc-900 hover:bg-amber-400 transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Poruči</span>
            </motion.a>
          </nav>
          
          {/* Mobile Menu Button - Simplified */}
          <motion.button
            className="flex md:hidden items-center justify-center rounded-md h-10 w-10 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <MenuIcon className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu - Simplified */}
      {isMenuOpen && (
        <motion.div 
          className="fixed inset-0 z-50 bg-zinc-900 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between p-6">
            {/* Add logo in mobile menu */}
            <motion.a 
              href="#"
              className="flex items-center text-white relative"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 relative flex items-center justify-center">
                <img 
                  src={logo} 
                  alt="Pica Parče Logo" 
                  className="h-full w-auto object-contain"
                />
              </div>
            </motion.a>
            
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="h-10 w-10 flex items-center justify-center text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-8 p-10">
            {[
              { name: 'Početna', id: 'hero' },
              { name: 'Meni', id: 'menu' },
              { name: 'O nama', id: 'about' }
            ].map((item, i) => (
              <motion.a
                key={item.name}
                href={`#${item.id}`}
                className="text-xl font-medium text-white hover:text-amber-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                {item.name}
              </motion.a>
            ))}
            
            <motion.a
              href="#menu"
              className="mt-6 flex items-center gap-2 rounded-md bg-amber-500 px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-amber-400 transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Poruči</span>
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}