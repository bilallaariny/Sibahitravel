import Link from "next/link"
import { Hammer, Facebook, Linkedin, Instagram } from 'lucide-react'
import { useLocale } from "@/context/locale-context"

export function SiteFooter() {
  const { t, locale } = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 md:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4 md:px-6">
        <div className="flex flex-col gap-4">
          <Link href="#" className="flex items-center gap-2 font-bold text-2xl">
            <Hammer className="h-7 w-7 text-primary" />
            <span>{t("header.companyName")}</span>
          </Link>
          <p className="text-sm leading-relaxed opacity-90">
            {t("footer.tagline")}
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
          <h3 className="text-lg font-semibold text-primary mb-2">{t("footer.quickLinks")}</h3>
          <Link href="#home" className="text-sm hover:underline underline-offset-4 opacity-90">
            {t("footer.home")}
          </Link>
          <Link href="#about" className="text-sm hover:underline underline-offset-4 opacity-90">
            {t("footer.about")}
          </Link>
          <Link href="#services" className="text-sm hover:underline underline-offset-4 opacity-90">
            {t("footer.services")}
          </Link>
          <Link href="#projects" className="text-sm hover:underline underline-offset-4 opacity-90">
            {t("footer.projects")}
          </Link>
          <Link href="#contact" className="text-sm hover:underline underline-offset-4 opacity-90">
            {t("footer.contact")}
          </Link>
        </div>
        <div className="grid gap-3">
          <h3 className="text-lg font-semibold text-primary mb-2">{t("footer.contactHeading")}</h3>
          <p className="text-sm opacity-90">{t("footer.address")}</p>
          <p className="text-sm opacity-90">{t("footer.phone")}</p>
          <p className="text-sm opacity-90">{t("footer.email")}</p>
          <p className="text-sm opacity-90">{t("footer.hours")}</p>
        </div>
        <div className="grid gap-3">
          <h3 className="text-lg font-semibold text-primary mb-2">{t("footer.legalInfo")}</h3>
          <p className="text-sm opacity-90">
            {t("footer.copyright").replace("{year}", currentYear.toString())}
          </p>
          <Link href="#" className="text-sm hover:underline underline-offset-4 opacity-90">
            {t("footer.privacyPolicy")}
          </Link>
          <p className="text-sm opacity-90">{t("footer.certifications")}</p>
        </div>
      </div>
    </footer>
  )
}
