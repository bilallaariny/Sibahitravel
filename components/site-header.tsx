"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Hammer, Facebook, Linkedin, Instagram } from "lucide-react"
import AnimatedButton from "./animated-button"
import { smoothScrollTo } from "./utils/smooth-scroll"
import Image from "next/image"

export function SiteHeader() {
  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    smoothScrollTo(id);
  };

  const handleMobileNavClick = (e: any, id: string) => {
    handleNavClick(e, id);
    // Close the mobile menu after clicking
    document.querySelector('button[aria-expanded="true"]')?.click();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-secondary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-2 py-4 max-w-6xl md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-primary text-2xl tracking-wide">
         <Image
                       src="/6_sibahi_travaux_Export_couleur_horiz 2.png"
                       alt="Construction site background"
                       width={220}
                       height={110}
                      
                      
                     />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
          >
            Accueil
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
          >
            À propos
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#services"
            onClick={(e) => handleNavClick(e, 'services')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
          >
            Services
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#projects"
            onClick={(e) => handleNavClick(e, 'projects')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
          >
            Projets
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
          >
            Contact
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <AnimatedButton
            className="ml-6 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-105"
          >
            <Link 
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Demandez un devis gratuit
            </Link>
          </AnimatedButton>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
            <Link href="/" className="flex items-center gap-2 font-bold text-primary text-2xl mb-8">
              <Hammer className="h-7 w-7" />
              <span>Sibahi Travel</span>
            </Link>
            <nav className="grid gap-6 text-lg font-medium">
              <Link 
                href="#home" 
                onClick={(e) => handleMobileNavClick(e, 'home')}
                className="hover:text-primary transition-colors"
              >
                Accueil
              </Link>
              <Link 
                href="#about" 
                onClick={(e) => handleMobileNavClick(e, 'about')}
                className="hover:text-primary transition-colors"
              >
                À propos
              </Link>
              <Link 
                href="#services" 
                onClick={(e) => handleMobileNavClick(e, 'services')}
                className="hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link 
                href="#projects" 
                onClick={(e) => handleMobileNavClick(e, 'projects')}
                className="hover:text-primary transition-colors"
              >
                Projets
              </Link>
              <Link 
                href="#contact" 
                onClick={(e) => handleMobileNavClick(e, 'contact')}
                className="hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <Button asChild className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                <Link 
                  href="#contact"
                  onClick={(e) => handleMobileNavClick(e, 'contact')}
                >
                  Demandez un devis gratuit
                </Link>
              </Button>
              <div className="flex gap-6 mt-8 justify-center">
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-7 w-7 text-secondary hover:text-primary transition-colors" />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-7 w-7 text-secondary hover:text-primary transition-colors" />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-7 w-7 text-secondary hover:text-primary transition-colors" />
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}