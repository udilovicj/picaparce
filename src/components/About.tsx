import { motion } from 'framer-motion';
import { Clock, MapPin, Star, Phone } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-10 relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.02),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.8),transparent_80%)] bg-zinc-900"></div>
      
      {/* Refined noise texture */}
      <div className="absolute inset-0 bg-[url('/grain.png')] opacity-[0.15] mix-blend-overlay"></div>
      
      {/* Modern floating accent */}
      <motion.div 
        className="absolute -left-1/4 top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-amber-500/10 to-orange-500/5 blur-[120px] rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Modern header */}
        <motion.div 
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-medium text-white mb-2 inline-flex items-center gap-2">
            <span className="text-amber-400 bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-1.5 rounded-lg ring-1 ring-amber-400/20">
              <Star className="w-5 h-5" />
            </span>
            O Nama
          </h2>
          <p className="text-zinc-400 text-sm">
            Saznajte više o nama
          </p>
        </motion.div>

        {/* Info cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {/* Contact Card */}
          <motion.div 
            className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-zinc-800/40 to-zinc-900/40 backdrop-blur-sm transition-all duration-300 ring-1 ring-white/[0.05] hover:ring-amber-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -2 }}
          >
            <div className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center shadow-lg">
                  <Phone className="w-4 h-4 text-zinc-900" />
                </div>
                <h3 className="text-white text-sm font-medium">Kontakt</h3>
              </div>
              
              <div className="space-y-2">
                <p className="text-lg font-bold text-amber-400">+381 62 103 4411</p>
                <p className="text-zinc-400 text-xs">
                  Dostupni smo za sve vaše porudžbine i pitanja
                </p>
              </div>
              
              <motion.a
                href="tel:+381621034411"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 bg-gradient-to-r from-amber-400/10 to-orange-400/5 text-white text-xs font-medium px-3 py-2 rounded-lg ring-1 ring-amber-400/20 hover:ring-amber-400/40 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-3 h-3 text-amber-400" />
                <span>Pozovite odmah</span>
              </motion.a>
            </div>
          </motion.div>
          
          {/* Hours Card */}
          <motion.div 
            className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-zinc-800/40 to-zinc-900/40 backdrop-blur-sm transition-all duration-300 ring-1 ring-white/[0.05] hover:ring-amber-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -2 }}
          >
            <div className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center shadow-lg">
                  <Clock className="w-4 h-4 text-zinc-900" />
                </div>
                <h3 className="text-white text-sm font-medium">Radno vreme</h3>
              </div>
              
              <div className="space-y-2">
                <div className="p-2 rounded-lg bg-gradient-to-r from-amber-400/10 to-orange-400/5 ring-1 ring-amber-400/20">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white/80 text-xs">Ponedeljak - Subota</span>
                    <span className="px-1.5 py-0.5 rounded-md bg-amber-400/20 text-amber-400 text-[10px] font-medium">Otvoreno</span>
                  </div>
                  <div className="text-sm font-bold text-white">09:00 - 22:30</div>
                </div>
                
                <div className="p-2 rounded-lg bg-gradient-to-r from-zinc-800/40 to-zinc-900/40 ring-1 ring-white/[0.05]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white/80 text-xs">Nedelja</span>
                    <span className="px-1.5 py-0.5 rounded-md bg-red-400/10 text-red-400 text-[10px] font-medium">Zatvoreno</span>
                  </div>
                  <div className="text-sm text-white/60">Ne radimo</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Rating Card */}
          <motion.div 
            className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-zinc-800/40 to-zinc-900/40 backdrop-blur-sm transition-all duration-300 ring-1 ring-white/[0.05] hover:ring-amber-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -2 }}
          >
            <div className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center shadow-lg">
                  <Star className="w-4 h-4 text-zinc-900" />
                </div>
                <h3 className="text-white text-sm font-medium">Naša ocena</h3>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400" fill="#f59e0b" />
                  ))}
                </div>
                
                <div className="flex items-end gap-1">
                  <span className="text-2xl font-bold text-white">4.8</span>
                  <span className="text-sm text-white/60 font-medium">/5</span>
                </div>
                
                <div className="p-2 rounded-lg bg-gradient-to-r from-amber-400/10 to-orange-400/5 ring-1 ring-amber-400/20">
                  <p className="text-zinc-400 text-xs">
                    Bazirano na <span className="text-amber-400 font-medium">580+</span> ocena
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Location section */}
        <motion.div 
          className="rounded-xl overflow-hidden bg-gradient-to-b from-zinc-800/40 to-zinc-900/40 backdrop-blur-sm ring-1 ring-white/[0.05]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Info column */}
            <div className="p-4 relative">
              <div className="mb-4">
                <div className="inline-flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center shadow-lg">
                    <MapPin className="w-4 h-4 text-zinc-900" />
                  </div>
                  <h3 className="text-white text-sm font-medium">Lokacija</h3>
                </div>
                
                <div className="space-y-2">
                  <p className="text-lg font-bold text-amber-400">Ilije Garašanina 26/1</p>
                  <p className="text-sm text-white/80">Beograd, 11000</p>
                </div>
              </div>
              
              <div className="p-2 rounded-lg bg-gradient-to-r from-amber-400/10 to-orange-400/5 ring-1 ring-amber-400/20 mb-4">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-400 text-xs">
                    Nalazimo se u centru grada, na uglu ulica Ilije Garašanina i Majke Jevrosime.
                  </p>
                </div>
              </div>
              
              <motion.a
                href="https://maps.google.com/?q=Ilije+Garašanina+26,+Beograd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-orange-400 text-zinc-900 text-xs font-medium px-3 py-2 rounded-lg shadow-lg hover:shadow-amber-500/20 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MapPin className="w-3 h-3" />
                Otvori u Google mapi
              </motion.a>
            </div>
            
            {/* Map column */}
            <div className="w-full h-[300px] lg:h-full relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.9350673555257!2d20.47242931207547!3d44.81006167654829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7a9f5dcfa08f%3A0xb287de31f8f9f2a0!2sIlije%20Gara%C5%A1anina%2026%2C%20Beograd!5e0!3m2!1sen!2srs!4v1650123456789!5m2!1sen!2srs" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
              
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/[0.05]"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}