import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';
import { Plus, Star, Clock, Flame, Utensils, Pizza } from 'lucide-react';

// Importujem slike iz assets foldera i koristim Vite način importa
// @ts-ignore - ignorišemo TS error za dinamički import
const margaritaImg = new URL('../assets/margarita.avif', import.meta.url).href;
// @ts-ignore
const vesuvioImg = new URL('../assets/vesuvio.avif', import.meta.url).href;
// @ts-ignore
const funghiImg = new URL('../assets/funghi.avif', import.meta.url).href;
// @ts-ignore
const capricozaImg = new URL('../assets/capricoza.avif', import.meta.url).href;
// @ts-ignore
const kulenImg = new URL('../assets/kulen.avif', import.meta.url).href;
// @ts-ignore
const staggioniImg = new URL('../assets/staggioni.avif', import.meta.url).href;
// @ts-ignore
const formaggiImg = new URL('../assets/formaggi.avif', import.meta.url).href;
// @ts-ignore
const vegeImg = new URL('../assets/vege.avif', import.meta.url).href;
// @ts-ignore
const specijalImg = new URL('../assets/specijal.avif', import.meta.url).href;
// @ts-ignore
const kalconaImg = new URL('../assets/kalcona.avif', import.meta.url).href;
// @ts-ignore
const hrskaviFiieImg = new URL('../assets/hrskavi pileci file.avif', import.meta.url).href;
// @ts-ignore
const srezSusamImg = new URL('../assets/hrskavi susam.avif', import.meta.url).href;
// @ts-ignore
const karadjordjevaImg = new URL('../assets/karadjordjeva.avif', import.meta.url).href;
// @ts-ignore
const tortSunkaImg = new URL('../assets/tortsunka.avif', import.meta.url).href;
// @ts-ignore
const tortPecenicaImg = new URL('../assets/tortpecenica.avif', import.meta.url).href;
// @ts-ignore
const tortHrskImg = new URL('../assets/torthrsk.avif', import.meta.url).href;
// @ts-ignore
const tortVegeImg = new URL('../assets/tortvege.avif', import.meta.url).href;
// @ts-ignore
const mocarelaSalataImg = new URL('../assets/mocarelasalata.avif', import.meta.url).href;
// @ts-ignore
const cezarImg = new URL('../assets/cezar.avif', import.meta.url).href;
// @ts-ignore
const slanaSunkaImg = new URL('../assets/slanasunka.avif', import.meta.url).href;
// @ts-ignore
const slanaPecenicaImg = new URL('../assets/slanapecenica.avif', import.meta.url).href;
// @ts-ignore
const slanaPrsutaImg = new URL('../assets/slanaprsuta.avif', import.meta.url).href;
// @ts-ignore
const slanaKulenImg = new URL('../assets/slanakulen.avif', import.meta.url).href;
// @ts-ignore
const slatkaPalacinkaImg = new URL('../assets/slatkapalacinka.avif', import.meta.url).href;
// @ts-ignore
const pepsiImg = new URL('../assets/pepsi0.5.avif', import.meta.url).href;
// @ts-ignore
const sevenUpImg = new URL('../assets/7up.avif', import.meta.url).href;
// @ts-ignore
const aquaVivaImg = new URL('../assets/aquaviva.avif', import.meta.url).href;
// @ts-ignore
const knjazMilosImg = new URL('../assets/knjazmilos.avif', import.meta.url).href;

type MenuItem = {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  regular_price: string;
  family_price: string;
  image: string;
  popular?: boolean;
  new?: boolean;
};

// Real menu data from Pizza Parče (directly from Wolt)
const sampleData: MenuItem[] = [
  // PIZZA 24cm
  {
    id: '1',
    name: 'Margherita 24cm',
    description: 'Pelat, sir, origano',
    category: 'pizzas',
    regular_price: '350',
    family_price: '950',
    price: '',
    image: margaritaImg,
    popular: true
  },
  {
    id: '2',
    name: 'Vesuvio 24cm',
    description: 'Pelat, sir, šunka, origano',
    category: 'pizzas',
    regular_price: '380',
    family_price: '1000',
    price: '',
    image: vesuvioImg
  },
  {
    id: '3',
    name: 'Funghi 24cm',
    description: 'Pelat, sir, pečurke, origano',
    category: 'pizzas',
    regular_price: '380',
    family_price: '950',
    price: '',
    image: funghiImg
  },
  {
    id: '4',
    name: 'Capricciosa 24cm',
    description: 'Pelat, sir, šunka, pečurke, origano',
    category: 'pizzas',
    regular_price: '420',
    family_price: '1100',
    price: '',
    image: capricozaImg
  },
  {
    id: '5',
    name: 'Pizza Kulen 24cm',
    description: 'Pelat, sir, peperoni kobasica, origano',
    category: 'pizzas',
    regular_price: '450',
    family_price: '1050',
    price: '',
    image: kulenImg,
    popular: true
  },
  {
    id: '6',
    name: 'Quattro stagioni 24cm',
    description: 'Pelat, sir, šunka, šampinjoni, kulen, masline, jaje, origano',
    category: 'pizzas',
    regular_price: '450',
    family_price: '1200',
    price: '',
    image: staggioniImg
  },
  {
    id: '7',
    name: 'Quattro formaggi 24cm',
    description: '4 vrste sira',
    category: 'pizzas',
    regular_price: '460',
    family_price: '1150',
    price: '',
    image: formaggiImg,
    popular: true
  },
  {
    id: '8',
    name: 'Vegetariana 24cm',
    description: 'Pelat, sir, šampinjoni, masline, paradajz, rukola, paprika, luk, origano, kukuruz',
    category: 'pizzas',
    regular_price: '400',
    family_price: '1100',
    price: '',
    image: vegeImg
  },
  {
    id: '9',
    name: 'Special 24cm',
    description: 'Pelat, sir, pečenica, peperoni, slanina, jaje, masline, origano',
    category: 'pizzas',
    regular_price: '480',
    family_price: '1350',
    price: '',
    image: specijalImg
  },
  {
    id: '10',
    name: 'Calzone',
    description: 'Pelat, sir, šunka, šampinjoni, origano',
    category: 'pizzas',
    regular_price: '250',
    family_price: '',
    price: '',
    image: kalconaImg
  },

  // PILETINA
  {
    id: '11',
    name: 'Hrskavi pileći file',
    description: 'U domaćem somunu, tartar sos, pavlaka, zelena salata',
    category: 'chicken',
    price: '320',
    regular_price: '',
    family_price: '',
    image: hrskaviFiieImg,
    popular: true
  },
  {
    id: '12',
    name: 'Pileći file sa susamom',
    description: 'U domaćem somunu, tartar sos, pavlaka, zelena salata',
    category: 'chicken',
    price: '320',
    regular_price: '',
    family_price: '',
    image: srezSusamImg
  },
  {
    id: '13',
    name: 'Pileća Karađorđeva šnicla',
    description: 'Tradicionalno srpsko jelo',
    category: 'chicken',
    price: '450',
    regular_price: '',
    family_price: '',
    image: karadjordjevaImg,
    popular: true
  },

  // TORTILJE
  {
    id: '14',
    name: 'Tortilja šunka',
    description: 'Šunka, kačkavalj, pavlaka, paradajz, zelena salata',
    category: 'tortillas',
    price: '240',
    regular_price: '',
    family_price: '',
    image: tortSunkaImg
  },
  {
    id: '15',
    name: 'Tortilja pečenica',
    description: 'Pečenica, kačkavalj, pavlaka, paradajz, zelena salata',
    category: 'tortillas',
    price: '250',
    regular_price: '',
    family_price: '',
    image: tortPecenicaImg
  },
  {
    id: '16',
    name: 'Tortilja hrskava piletina',
    description: 'Piletina, tartar, pavlaka, zelena salata',
    category: 'tortillas',
    price: '350',
    regular_price: '',
    family_price: '',
    image: tortHrskImg,
    popular: true
  },
  {
    id: '17',
    name: 'Vege tortilja',
    description: 'Paradajz, zelena salata, rukola, masline, šampinjoni, kukuruz, paprika, luk',
    category: 'tortillas',
    price: '250',
    regular_price: '',
    family_price: '',
    image: tortVegeImg
  },

  // OBROK SALATE
  {
    id: '18',
    name: 'Piletina mocarela salata',
    description: 'Hrskava piletina, mocarela, zelena salata, kupus, paradajz, dresing',
    category: 'salads',
    price: '400',
    regular_price: '',
    family_price: '',
    image: mocarelaSalataImg
  },
  {
    id: '19',
    name: 'Cezar salata',
    description: 'Piletina, zelena salata, paradajz, kupus, pančeta',
    category: 'salads',
    price: '400',
    regular_price: '',
    family_price: '',
    image: cezarImg,
    popular: true
  },

  // SLANE PALAČINKE
  {
    id: '20',
    name: 'Slana palačinka šunka',
    description: 'Šunka, kačkavalj, pavlaka',
    category: 'pancakes',
    price: '280',
    regular_price: '',
    family_price: '',
    image: slanaSunkaImg
  },
  {
    id: '21',
    name: 'Slana palačinka pečenica',
    description: 'Pečenica, kačkavalj, pavlaka',
    category: 'pancakes',
    price: '300',
    regular_price: '',
    family_price: '',
    image: slanaPecenicaImg
  },
  {
    id: '22',
    name: 'Slana palačinka kulen',
    description: 'Kulen, kačkavalj, pavlaka',
    category: 'pancakes',
    price: '300',
    regular_price: '',
    family_price: '',
    image: slanaKulenImg
  },
  {
    id: '23',
    name: 'Slana palačinka pršuta',
    description: 'Pršuta, kačkavalj, pavlaka',
    category: 'pancakes',
    price: '350',
    regular_price: '',
    family_price: '',
    image: slanaPrsutaImg,
    popular: true
  },

  // SLATKE PALAČINKE
  {
    id: '24',
    name: 'Palačinka po izboru',
    description: 'Odaberi krem i dodatke',
    category: 'sweet',
    price: '230',
    regular_price: '',
    family_price: '',
    image: slatkaPalacinkaImg,
    popular: true
  },

  // PIĆE
  {
    id: '25',
    name: 'Pepsi 0.5l',
    description: 'Osvežavajuće gazirano piće',
    category: 'drinks',
    price: '100',
    regular_price: '',
    family_price: '',
    image: pepsiImg
  },
  {
    id: '26',
    name: '7 up 0.5l',
    description: 'Osvežavajuće gazirano piće',
    category: 'drinks',
    price: '100',
    regular_price: '',
    family_price: '',
    image: sevenUpImg
  },
  {
    id: '27',
    name: 'Aqua Viva 0.5l',
    description: 'Prirodna voda',
    category: 'drinks',
    price: '60',
    regular_price: '',
    family_price: '',
    image: aquaVivaImg
  },
  {
    id: '28',
    name: 'Kisela voda Knjaz Miloš 0.5l',
    description: 'Gazirana mineralna voda',
    category: 'drinks',
    price: '90',
    regular_price: '',
    family_price: '',
    image: knjazMilosImg
  }
];

// Add-on items for vege tortillas and pancakes
const vegeAddons = [
  { id: 'va1', name: 'Biljni kačkavalj 40g', price: '30' },
  { id: 'va2', name: 'Tunjevina 50g', price: '100' }
];

const pancakeAddons = [
  { id: 'pa1', name: 'Plazma', price: '40' },
  { id: 'pa2', name: 'Banana', price: '50' },
  { id: 'pa3', name: 'Višnja (Cherry)', price: '50' },
  { id: 'pa4', name: 'Malina (Raspberries)', price: '80' },
  { id: 'pa5', name: 'Džem (Jam)', price: '90' },
  { id: 'pa6', name: 'Med (Honey)', price: '40' },
  { id: 'pa7', name: 'Lešnik (Hazelnut)', price: '40' },
  { id: 'pa8', name: 'Orah (Walnut)', price: '40' },
  { id: 'pa9', name: 'Kokos (Coconut)', price: '30' },
  { id: 'pa10', name: 'Eurokrem (Eurocreme)', price: '230' },
  { id: 'pa11', name: 'Nutela (Nutella)', price: '230' }
];

export default function Menu() {
  const [items, setItems] = useState<MenuItem[]>(sampleData);
  const [category, setCategory] = useState('pizzas');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<{[key: string]: 'small' | 'large'}>({});
  
  useEffect(() => {
    fetchItems();
    
    // Initialize all pizza items to small size by default
    const initialSizes: {[key: string]: 'small' | 'large'} = {};
    sampleData.forEach(item => {
      if (item.category === 'pizzas') {
        initialSizes[item.id] = 'small';
      }
    });
    setSelectedSizes(initialSizes);
  }, []);

  async function fetchItems() {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('menu_items')
      .select('*')
      .order('name');
      
    if (error) {
      console.error('Error fetching items:', error);
      toast.error('Greška pri učitavanju menija');
      setIsLoading(false);
      return;
    }
    
    if (data && data.length > 0) {
      setItems(data);
    }
    setIsLoading(false);
  }

  const categories = [
    { id: 'pizzas', name: 'Pice', icon: <Pizza size={12} /> },
    { id: 'chicken', name: 'Piletina', icon: <Utensils size={12} /> },
    { id: 'tortillas', name: 'Tortilje', icon: <Utensils size={12} /> },
    { id: 'salads', name: 'Salate', icon: <Utensils size={12} /> },
    { id: 'pancakes', name: 'Slane Palačinke', icon: <Utensils size={12} /> },
    { id: 'sweet', name: 'Slatke Palačinke', icon: <Utensils size={12} /> },
    { id: 'drinks', name: 'Piće', icon: <Utensils size={12} /> },
  ];

  const filteredItems = items.filter(item => item.category === category);

  // Define container variants for the list animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  // Define variants for menu items
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  // Toggle size for pizza items
  const togglePizzaSize = (id: string) => {
    setSelectedSizes(prev => ({
      ...prev,
      [id]: prev[id] === 'small' ? 'large' : 'small'
    }));
  };

  // Get the current price based on selected size
  const getCurrentPrice = (item: MenuItem) => {
    if (item.category === 'pizzas') {
      return selectedSizes[item.id] === 'small' ? item.regular_price : item.family_price;
    }
    return item.price;
  };

  // Get the current name based on selected size
  const getCurrentName = (item: MenuItem) => {
    if (item.category === 'pizzas' && item.family_price) {
      // Replace '24cm' with '42cm' if large size is selected
      return selectedSizes[item.id] === 'small' 
        ? item.name 
        : item.name.replace('24cm', '42cm');
    }
    return item.name;
  };

  return (
    <section id="menu" className="py-10 relative overflow-hidden">
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
              <Utensils className="w-5 h-5" />
            </span>
            Naš Meni
          </h2>
          <p className="text-zinc-400 text-sm">
            Istražite našu ponudu specijaliteta
          </p>
        </motion.div>

        {/* Modern category selector */}
        <div className="sticky top-16 z-30 mb-6">
          <motion.div 
            className="flex justify-center"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-full max-w-full sm:max-w-fit inline-flex p-1 bg-zinc-900/80 backdrop-blur-2xl border border-white/[0.08] rounded-xl shadow-xl shadow-black/10">
              <div className="flex gap-1 overflow-x-auto scrollbar-none px-2 py-1 -mx-2 min-w-full sm:min-w-0">
                {categories.map((cat) => (
                  <motion.button
                    key={cat.id}
                    className={`relative flex-shrink-0 whitespace-nowrap px-3 py-1.5 text-[11px] sm:text-xs rounded-lg flex items-center gap-1.5 transition-all duration-200 ${
                      category === cat.id 
                        ? 'text-amber-900 font-medium' 
                        : 'text-white/70 hover:text-white/90 hover:bg-white/[0.02]'
                    }`}
                    onClick={() => setCategory(cat.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className={`${category === cat.id ? 'text-amber-900' : 'text-amber-400'}`}>
                      {cat.icon}
                    </span>
                    <span>{cat.name}</span>
                    {category === cat.id && (
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-lg -z-10 ring-1 ring-amber-400/30"
                        layoutId="activeCategory"
                        transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Modern menu grid */}
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          {isLoading ? (
            <div className="flex justify-center py-8">
              <div className="flex flex-col items-center gap-2">
                <div className="w-6 h-6 border-2 border-amber-400/20 border-t-amber-400 rounded-full animate-spin"></div>
                <p className="text-zinc-500 text-xs animate-pulse">Učitavanje menija...</p>
              </div>
            </div>
          ) : (
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={category}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
                >
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                      <motion.div
                        key={item.id}
                        variants={itemVariants}
                        className={`group relative overflow-hidden rounded-xl bg-gradient-to-b from-zinc-800/40 to-zinc-900/40 backdrop-blur-sm transition-all duration-300 ring-1 ring-white/[0.05] hover:ring-amber-500/20 ${
                          category === 'sweet' ? 'col-span-full xs:col-span-2 sm:col-start-auto lg:col-span-2 max-w-2xl mx-auto' : ''
                        }`}
                        whileHover={{ y: -2 }}
                      >
                        {/* Modern image container */}
                        <div className={`relative overflow-hidden rounded-t-xl ${category === 'sweet' ? 'h-40 sm:h-48' : 'h-32 sm:h-40'} w-full`}>
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                            style={{ objectFit: 'cover' }}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.onerror = null;
                              target.src = margaritaImg;
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent opacity-90"></div>
                          
                          {/* Modern badges */}
                          <div className="absolute top-2 left-2 flex gap-1.5">
                            {item.popular && (
                              <motion.div 
                                className="flex items-center gap-1 bg-gradient-to-r from-amber-400 to-orange-400 text-amber-900 px-1.5 py-0.5 rounded-full text-[10px] font-medium shadow-lg shadow-amber-900/10 ring-1 ring-amber-400/30"
                                initial={{ opacity: 0, scale: 0.8, x: -10 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                              >
                                <Star size={10} className="fill-amber-900" />
                                <span>Popularno</span>
                              </motion.div>
                            )}
                            {item.new && (
                              <motion.div 
                                className="flex items-center gap-1 bg-gradient-to-r from-emerald-400 to-teal-400 text-emerald-900 px-1.5 py-0.5 rounded-full text-[10px] font-medium shadow-lg shadow-emerald-900/10 ring-1 ring-emerald-400/30"
                                initial={{ opacity: 0, scale: 0.8, x: -10 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                              >
                                <Flame size={10} />
                                <span>Novo</span>
                              </motion.div>
                            )}
                          </div>
                        </div>
                        
                        {/* Modern content area */}
                        <div className="p-3">
                          <div className="flex justify-between items-start gap-2 mb-1">
                            <h3 className="text-white text-sm font-medium group-hover:text-amber-400 transition-colors duration-300 line-clamp-1">
                              {getCurrentName(item)}
                            </h3>
                            
                            {/* Modern price tag */}
                            <div className="flex-shrink-0 bg-gradient-to-r from-amber-400/10 to-orange-400/5 px-1.5 py-0.5 rounded-lg text-xs font-semibold text-amber-400 ring-1 ring-amber-400/20">
                              {getCurrentPrice(item)} rsd
                            </div>
                          </div>
                          
                          <p className="text-zinc-400 text-xs line-clamp-2 mb-2 min-h-[32px]">{item.description}</p>

                          {/* Show pancake add-ons directly in the card for sweet category */}
                          {category === 'sweet' && (
                            <div className="mt-3">
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                                {pancakeAddons.map((addon) => (
                                  <div 
                                    key={addon.id} 
                                    className="flex justify-between items-center py-1 px-1.5 rounded-lg bg-zinc-800/40 ring-1 ring-white/[0.05] hover:ring-amber-500/20 transition-colors"
                                  >
                                    <span className="text-white text-[10px]">{addon.name.split('(')[0]}</span>
                                    <span className="text-amber-400 text-[10px] font-medium">{addon.price}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {/* Modern size selector for pizzas */}
                          {category === 'pizzas' && item.family_price && (
                            <div className="flex items-center justify-center gap-2 mt-1">
                              <button 
                                onClick={() => togglePizzaSize(item.id)}
                                className={`flex-1 flex items-center justify-center gap-1 py-1 px-2 rounded-lg transition-all duration-200 ${
                                  selectedSizes[item.id] === 'small' 
                                    ? 'bg-gradient-to-r from-amber-400/10 to-orange-400/5 text-white ring-1 ring-amber-400/20' 
                                    : 'bg-zinc-800/40 text-zinc-400 ring-1 ring-white/[0.05] hover:bg-zinc-800/60'
                                }`}
                              >
                                <span className={`w-1.5 h-1.5 rounded-full ${selectedSizes[item.id] === 'small' ? 'bg-amber-400' : 'bg-zinc-600'}`}></span>
                                <span className="text-xs">24cm</span>
                              </button>
                              <button 
                                onClick={() => togglePizzaSize(item.id)}
                                className={`flex-1 flex items-center justify-center gap-1 py-1 px-2 rounded-lg transition-all duration-200 ${
                                  selectedSizes[item.id] === 'large' 
                                    ? 'bg-gradient-to-r from-amber-400/10 to-orange-400/5 text-white ring-1 ring-amber-400/20' 
                                    : 'bg-zinc-800/40 text-zinc-400 ring-1 ring-white/[0.05] hover:bg-zinc-800/60'
                                }`}
                              >
                                <span className={`w-1.5 h-1.5 rounded-full ${selectedSizes[item.id] === 'large' ? 'bg-amber-400' : 'bg-zinc-600'}`}></span>
                                <span className="text-xs">42cm</span>
                              </button>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-full flex items-center justify-center py-10">
                      <div className="text-center p-4 rounded-xl bg-gradient-to-b from-zinc-800/40 to-zinc-900/40 backdrop-blur-sm ring-1 ring-white/[0.05] shadow-xl">
                        <div className="mb-3 text-amber-500/60 bg-gradient-to-br from-amber-500/10 to-orange-500/5 p-2 rounded-lg ring-1 ring-amber-500/20">
                          <Utensils size={20} />
                        </div>
                        <h3 className="text-white text-sm font-medium mb-1">Nema proizvoda u ovoj kategoriji</h3>
                        <p className="text-zinc-400 text-xs">Uskoro dodajemo nove proizvode!</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>
        
        {/* Modern add-ons sections */}
        {category === 'tortillas' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 max-w-xl mx-auto bg-gradient-to-b from-zinc-800/40 to-zinc-900/40 backdrop-blur-sm ring-1 ring-white/[0.05] rounded-xl p-3"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xs font-medium text-amber-400 uppercase tracking-wide">
                DODATAK U VEGE TORTILJU
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {vegeAddons.map((addon) => (
                <div key={addon.id} className="flex justify-between items-center py-1.5 px-2 rounded-lg bg-zinc-800/40 ring-1 ring-white/[0.05] hover:ring-amber-500/20 transition-colors">
                  <span className="text-white text-xs">{addon.name}</span>
                  <span className="text-amber-400 text-xs font-medium">{addon.price} din</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
        
        {/* Modern info footer */}
        <motion.div 
          className="max-w-md mx-auto mt-8 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="py-2 px-4 bg-gradient-to-b from-zinc-800/40 to-zinc-900/40 backdrop-blur-sm ring-1 ring-white/[0.05] rounded-xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
                <span className="text-zinc-400">Pon-Sub:</span>
                <span className="text-white font-medium">09:00–22:30</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></div>
                <span className="text-zinc-400">Ned:</span>
                <span className="text-white font-medium">Zatvoreno</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}