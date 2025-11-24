import { motion } from 'framer-motion';
import { Menu, X, Building2 } from 'lucide-react';
import { useState } from 'react';

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };
  
  const menuItems = [
    { id: 'hero', label: 'Início' },
    { id: 'about', label: 'Quem Somos' },
    { id: 'services', label: 'Serviços' },
    { id: 'contact', label: 'Contacto' },
  ];
  
  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-background/90 border-b border-border/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <motion.button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 tap-target"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-md" />
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <Building2 className="text-primary-foreground" size={24} />
              </div>
            </div>
            <div className="text-left">
              <span className="block text-xl font-bold text-foreground tracking-tight leading-tight">
                Habicon<sup className="text-primary text-xs">®</sup>
              </span>
              <p className="text-xs text-muted-foreground">Construção</p>
            </div>
          </motion.button>
          
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative tap-target p-2 rounded-lg hover:bg-primary/10 transition-colors"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <X size={24} className="text-primary" />
              ) : (
                <Menu size={24} className="text-foreground" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </motion.header>
      
      {/* Mobile Menu */}
      <motion.nav
        className="fixed top-[4.5rem] left-0 right-0 z-30 backdrop-blur-2xl bg-background/95 border-b border-border/50"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        style={{ overflow: 'hidden' }}
      >
        <div className="px-6 py-6 space-y-2">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-4 py-3 rounded-lg font-semibold text-foreground tap-target hover:bg-primary/10 hover:text-primary transition-all relative overflow-hidden group"
              initial={{ x: -50, opacity: 0 }}
              animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                {item.label}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.nav>
    </>
  );
}
