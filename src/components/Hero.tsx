import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  
  return (
    <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden bg-zinc-900 pt-24 sm:pt-32">
      {/* Modern background with enhanced visual elements */}
      <div className="absolute inset-0 -z-10">
        {/* Base background */}
        <div className="absolute inset-0 bg-zinc-900"></div>
        
        {/* Enhanced grain texture */}
        <div className="absolute inset-0 opacity-15 mix-blend-overlay" 
          style={{ backgroundImage: "url('/grain.png')" }}></div>
        
        {/* Modern geometric elements - Adjusted for mobile */}
        <div className="absolute -top-12 sm:-top-24 -left-12 sm:-left-24 w-48 sm:w-96 h-48 sm:h-96 rounded-full bg-amber-500/5 blur-[50px] sm:blur-[100px]"></div>
        <div className="absolute top-1/2 right-0 w-40 sm:w-80 h-40 sm:h-80 rounded-full bg-amber-500/5 blur-[40px] sm:blur-[80px]"></div>
        <div className="absolute bottom-0 left-1/3 w-full h-px bg-gradient-to-r from-amber-500/20 via-amber-500/5 to-transparent"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.01)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:40px_40px] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Modern two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left content - Enhanced typography and layout */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Brand badge - Modern minimal */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 py-1.5 px-3 sm:px-4 bg-amber-500/10 rounded-full mb-3 sm:mb-4 lg:mb-6"
            >
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-amber-400"></span>
              <span className="text-amber-400 text-[10px] sm:text-xs font-medium tracking-wider uppercase">Premium kvalitet</span>
            </motion.div>
            
            {/* Main headline - Bold typographic hierarchy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-bold tracking-tight mb-2 sm:mb-3 space-y-0.5 sm:space-y-1 lg:space-y-2">
                <span className="block text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white">Pica</span>
                <span className="block text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                  Parče
                </span>
              </h1>
            </motion.div>
            
            {/* Description - Modern clean typography */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-zinc-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mt-3 sm:mt-4 lg:mt-6"
            >
              Naručite najbolju pizzu u gradu sa autentičnim receptima i premium sastojcima. Svaka pica pripremljena sa strašću.
            </motion.p>
            
            {/* Call To Action section - Modern buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col xs:flex-row gap-2 sm:gap-3 lg:gap-4 pt-3 sm:pt-4 justify-center lg:justify-start"
            >
              <a
                href="#menu"
                className="group relative overflow-hidden rounded-lg bg-amber-500 px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-3.5 text-center font-medium text-zinc-900 shadow-lg shadow-amber-500/20 transition-all hover:shadow-xl hover:shadow-amber-500/30 hover:bg-amber-400"
              >
                <span className="relative z-10 flex items-center justify-center text-sm sm:text-base">
                  <span>Pogledaj meni</span>
                  <ChevronRight size={16} className="ml-1.5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
              
              <a
                href="#about"
                className="group relative overflow-hidden rounded-lg border border-zinc-700 bg-transparent px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-3.5 text-center font-medium text-white transition-all hover:bg-zinc-800"
              >
                <span className="text-sm sm:text-base">O nama</span>
              </a>
            </motion.div>
            
            {/* Key features section - Modern minimal stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 pt-6 sm:pt-8 lg:pt-10"
            >
              {[
                { label: 'Zadovoljnih mušterija', value: '10k+' },
                { label: 'Godina iskustva', value: '15+' },
                { label: 'Vrsta pica', value: '20+' }
              ].map((stat, i) => (
                <div 
                  key={stat.label}
                  className="p-2.5 sm:p-3 lg:p-4 rounded-xl bg-gradient-to-b from-zinc-800/40 to-zinc-900/40 backdrop-blur-sm ring-1 ring-white/[0.05]"
                >
                  <div className="font-bold text-base sm:text-lg lg:text-xl text-amber-400 mb-0.5">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Right content - Image section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative mt-6 sm:mt-8 lg:mt-0"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/10">
              {/* Hero image with glass card overlay */}
              <div className="relative w-full aspect-[4/3] xs:aspect-[16/10] lg:aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop" 
                  alt="Pizza"
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent"></div>
                
                {/* Feature card - Floating glass card */}
                <motion.a 
                  href="#menu"
                  className="absolute bottom-3 xs:bottom-4 sm:bottom-6 left-3 xs:left-4 sm:left-6 right-3 xs:right-4 sm:right-6 p-3 xs:p-4 sm:p-5 backdrop-blur-md bg-white/10 rounded-xl border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/10 group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-medium text-sm xs:text-base sm:text-lg">Najbolji kvalitet</h3>
                      <p className="text-zinc-300 text-[10px] xs:text-xs sm:text-sm mt-0.5 sm:mt-1">Sveži sastojci i autentični recepti</p>
                    </div>
                    <div className="h-7 w-7 xs:h-8 xs:w-8 sm:h-10 sm:w-10 rounded-full bg-amber-500 flex items-center justify-center text-zinc-900 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <ArrowRight size={14} className="xs:w-4 xs:h-4 sm:w-[18px] sm:h-[18px]" />
                    </div>
                  </div>
                </motion.a>
              </div>
            </div>
            
            {/* Decorative elements - Adjusted for mobile */}
            <div className="absolute -z-10 -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 w-12 sm:w-24 h-12 sm:h-24 rounded-full border border-amber-500/20"></div>
            <div className="absolute -z-10 -top-5 sm:-top-10 -left-5 sm:-left-10 w-20 sm:w-40 h-20 sm:h-40 rounded-full border border-amber-500/10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}