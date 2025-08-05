import Link from "next/link"
import { Hammer, Facebook, Linkedin, Instagram } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 md:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4 md:px-6">
        <div className="flex flex-col gap-4">
          <Link href="#" className="flex items-center gap-2 font-bold text-2xl">
            <Hammer className="h-7 w-7 text-primary" />
            <span>Sibahi Travel</span>
          </Link>
          <p className="text-sm leading-relaxed opacity-90">
            Votre partenaire de confiance pour tous vos projets de construction au Maroc.
          </p>
          <div className="flex gap-5 mt-4">
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-6 w-6 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6 hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
        <div className="grid gap-3">
          <h3 className="text-lg font-semibold text-primary mb-2">Liens rapides</h3>
          <Link href="#home" className="text-sm hover:underline underline-offset-4 opacity-90">
            Accueil
          </Link>
          <Link href="#about" className="text-sm hover:underline underline-offset-4 opacity-90">
            À propos
          </Link>
          <Link href="#services" className="text-sm hover:underline underline-offset-4 opacity-90">
            Services
          </Link>
          <Link href="#projects" className="text-sm hover:underline underline-offset-4 opacity-90">
            Projets
          </Link>
          <Link href="#contact" className="text-sm hover:underline underline-offset-4 opacity-90">
            Contact
          </Link>
        </div>
        <div className="grid gap-3">
          <h3 className="text-lg font-semibold text-primary mb-2">Contact</h3>
          <p className="text-sm opacity-90">123 Avenue Mohammed V, Rabat, Maroc</p>
          <p className="text-sm opacity-90">+212 5XX XXX XXX</p>
          <p className="text-sm opacity-90">contact@sibahitravel.ma</p>
          <p className="text-sm opacity-90">Lun-Ven: 8h00 - 18h00</p>
        </div>
        <div className="grid gap-3">
          <h3 className="text-lg font-semibold text-primary mb-2">Informations légales</h3>
          <p className="text-sm opacity-90">© {new Date().getFullYear()} Sibahi Travel. Tous droits réservés.</p>
          <Link href="#" className="text-sm hover:underline underline-offset-4 opacity-90">
            Politique de confidentialité
          </Link>
          <p className="text-sm opacity-90">Certifications: ISO 9001</p>
        </div>
      </div>
    </footer>
  )
}
