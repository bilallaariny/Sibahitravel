"use client" // This component uses client-side features like framer-motion

import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Building,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Users,
  Leaf,
  Wrench,
  MapIcon as City,
  RouteIcon as Road,
  Handshake,
  Sparkles,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react"
import AnimatedButton from "@/components/animated-button"
import WhatsAppButton from "@/components/whatsapp-button"
import { TypewriterEffect } from "@/components/typing-animation"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { motion } from "framer-motion"

// Define common animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
}

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

const slideDown = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
}

// Stagger children for containers
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Adjust stagger delay as needed
    },
  },
}

// Child variants for staggered animations
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function HomePage() {
  const services = [
    {
      icon: Building,
      title: "Construction tous corps d'état",
      description:
        "Réalisation de bâtiments résidentiels, commerciaux et industriels, de la conception à la livraison.",
    },
    {
      icon: Wrench,
      title: "Travaux de réhabilitation",
      description:
        "Rénovation et restauration de bâtiments anciens ou endommagés, avec respect des normes patrimoniales.",
    },
    {
      icon: City,
      title: "Aménagements urbains",
      description: "Création d'espaces publics, routes, trottoirs et infrastructures urbaines.",
    },
    {
      icon: Road,
      title: "Travaux publics",
      description: "Construction de ponts, réseaux d'assainissement, et autres infrastructures d'envergure.",
    },
    {
      icon: Handshake,
      title: "Négociation et conseil",
      description: "Accompagnement dans la gestion de projets, études de faisabilité et optimisation des coûts.",
    },
    {
      icon: Sparkles,
      title: "Solutions durables",
      description:
        "Intégration de technologies et matériaux écoresponsables pour des constructions respectueuses de l'environnement.",
    },
  ]
  const features = [
    {
      icon: CheckCircle,
      title: "Expertise technique",
      description: "Une maîtrise parfaite des techniques de construction modernes et traditionnelles.",
    },
    {
      icon: Leaf,
      title: "Engagement durable",
      description:
        "Une approche écoresponsable intégrant des matériaux durables et des pratiques respectueuses de l'environnement.",
    },
    {
      icon: Handshake,
      title: "Proximité client",
      description: "Une écoute attentive et un accompagnement personnalisé à chaque étape de votre projet.",
    },
    {
      icon: Users,
      title: "Équipe qualifiée",
      description: "Plus de 200 collaborateurs formés et passionnés, soutenus par un parc d'équipements modernes.",
    },
  ]
  return (
    <div className="flex flex-col min-h-[100dvh] scroll-smooth ">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="home"
          className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden bg-secondary "
        >
          {/* Placeholder for video background with a creative overlay */}
          <div className="absolute inset-0 z-0 ">
            <Image
              src="/e76e0db568d68266994ebf463ce2b76d.jpg"
              alt="Construction site background"
              layout="fill"
              objectFit="cover"
              className="opacity-40"
            />
            {/* Creative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/40 to-transparent"></div>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative z-10 space-y-6 px-4 md:px-6 max-w-5xl text-white pt-16"
          >
            <motion.div variants={slideUp}>
              <TypewriterEffect
                baseText="Sibahi Travel -"
                wordsToAnimate={["Construisons l’avenir ensemble"]}
                typingSpeed={100}
                erasingSpeed={50}
                delayBetweenActions={1000}
              />
            </motion.div>
            <motion.p variants={slideUp} className="text-lg md:text-xl lg:text-2xl font-medium">
              Votre partenaire de confiance pour tous vos projets de construction au Maroc
            </motion.p>
            <motion.p variants={fadeIn} className="text-base md:text-lg leading-relaxed">
              Bienvenue chez Sibahi Travel, votre expert en travaux divers et bâtiment au Maroc. Depuis notre création,
              nous mettons notre savoir-faire et notre passion au service de vos projets, qu’ils soient résidentiels,
              commerciaux ou industriels. Avec une équipe qualifiée et un engagement fort envers la qualité et la
              durabilité, nous transformons vos idées en réalité. Confiez-nous vos ambitions, et bâtissons un avenir
              solide ensemble.
            </motion.p>
            <motion.div variants={slideUp} className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
              <AnimatedButton className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <Link href="#contact">Demandez un devis gratuit</Link>
              </AnimatedButton>
              <AnimatedButton className="border-2 border-primary text-primary bg-transparent hover:bg-primary/10 px-8 py-3 text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <Link href="#projects">Découvrez nos réalisations</Link>
              </AnimatedButton>
            </motion.div>
          </motion.div>
        </section>
        {/* About Section */}
        <section
          id="about"
          className="w-full py-20 md:py-32 lg:py-40 bg-background text-foreground relative overflow-hidden"
        >
          <div className="container mx-auto px-16 max-w-6xl">
            {/* Desktop Grid Layout */}
            <div className="hidden md:grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={slideLeft}
                className="space-y-8"
              >
                <motion.h2
                  variants={slideUp}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight"
                >
                  Qui sommes-nous ?
                </motion.h2>
                <motion.h3 variants={slideUp} className="text-xl md:text-2xl font-semibold text-secondary">
                  Une entreprise marocaine au service de l'excellence
                </motion.h3>
                <motion.p variants={fadeIn} className="text-lg leading-relaxed text-muted-foreground">
                  Sibahi Travel s'est imposée comme l'un des acteurs majeurs du secteur du bâtiment et des travaux
                  publics au Maroc. Basée à <span className="font-semibold text-foreground">Rabat</span>, notre
                  entreprise intervient sur l'ensemble du territoire national, couvrant une large gamme de projets :
                  construction de bâtiments, travaux de réhabilitation, aménagements urbains et travaux
                  d'infrastructure.
                </motion.p>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={containerVariants}
                  className="grid gap-6"
                >
                  {features.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className={`flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-sm`}
                      >
                        <Icon className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-lg">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={slideRight}
                className="flex justify-center relative"
              >
                <Image
                  src="/d5048291c9fae766adedbac6a10b6bce.jpg"
                  width={900}
                  height={700}
                  alt="About Us"
                  className="rounded-3xl object-cover shadow-2xl transition-transform transform hover:scale-105 duration-500"
                />
                {/* Decorative element */}
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              </motion.div>
            </div>
            {/* Mobile Layout */}
            <div className="md:hidden text-center">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={slideUp}
                className="text-4xl font-bold text-primary mb-4"
              >
                Qui sommes-nous ?
              </motion.h2>
              <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={slideUp}
                className="text-xl font-semibold text-secondary mb-8"
              >
                Une entreprise marocaine au service de l'excellence
              </motion.h3>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                className="text-lg leading-relaxed mb-12 opacity-90"
              >
                Sibahi Travel s'est imposée comme l'un des acteurs majeurs du secteur du bâtiment et des travaux publics
                au Maroc. Basée à <span className="font-semibold text-foreground">Rabat</span>, notre entreprise
                intervient sur l'ensemble du territoire national, couvrant une large gamme de projets : construction de
                bâtiments, travaux de réhabilitation, aménagements urbains et travaux d'infrastructure.
              </motion.p>
              {/* Mobile Carousel Layout */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
                className="relative"
              >
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4 items-stretch">
                    {features.map((feature, index) => {
                      const Icon = feature.icon
                      return (
                        <CarouselItem key={index} className="pl-4 basis-full">
                          <motion.div variants={itemVariants} className="p-1 h-full">
                            <div className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 h-full flex flex-col bg-gray-50 p-6">
                              <div className="flex flex-col items-center text-center space-y-4">
                                <Icon className="h-12 w-12 text-primary" />
                                <h4 className="text-2xl font-bold text-foreground">{feature.title}</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                              </div>
                            </div>
                          </motion.div>
                        </CarouselItem>
                      )
                    })}
                  </CarouselContent>
                </Carousel>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section
          id="services"
          className="w-full py-20 md:py-32 lg:py-40 bg-secondary text-secondary-foreground relative overflow-hidden"
        >
          <div className="container text-center mx-auto px-16 max-w-6xl">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4"
            >
              Nos services
            </motion.h2>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideUp}
              className="text-xl md:text-2xl font-semibold mb-12"
            >
              Une expertise complète pour tous vos besoins en Bâtiment
            </motion.h3>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="max-w-3xl mx-auto text-lg leading-relaxed mb-16 opacity-90"
            >
              Sibahi Travel propose une gamme complète de services pour répondre aux besoins variés de ses clients. Que
              vous soyez un particulier, une entreprise ou une collectivité, nous avons les compétences et les
              ressources pour mener à bien vos projets.
            </motion.p>
            {/* Desktop Grid Layout */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className={`bg-white text-foreground p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group`}
                  >
                    <Icon className="h-14 w-14 text-primary mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="text-2xl font-bold mb-3">{service.title}</h4>
                    <p className="text-base text-muted-foreground">{service.description}</p>
                  </motion.div>
                )
              })}
            </motion.div>
            {/* Mobile Carousel Layout */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="md:hidden relative"
            >
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4 items-stretch">
                  {services.map((service, index) => {
                    const Icon = service.icon
                    return (
                      <CarouselItem key={index} className="pl-4 basis-full">
                        <motion.div variants={itemVariants} className="p-1 h-full">
                          <div className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 h-full flex flex-col bg-white text-foreground p-8">
                            <div className="flex flex-col items-center text-center space-y-6">
                              <Icon className="h-16 w-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                              <h4 className="text-2xl font-bold text-foreground">{service.title}</h4>
                              <p className="text-base text-muted-foreground leading-relaxed">{service.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      </CarouselItem>
                    )
                  })}
                </CarouselContent>
              </Carousel>
            </motion.div>
          </div>
        </section>
        {/* Projects Section */}
        <section id="projects" className="w-full py-20 md:py-32 lg:py-40 bg-background text-foreground">
          <div className="container text-center mx-auto px-16 max-w-6xl">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4"
            >
              Nos réalisations
            </motion.h2>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideUp}
              className="text-xl md:text-2xl font-semibold text-secondary mb-12"
            >
              Des projets qui témoignent de notre savoir-faire
            </motion.h3>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="max-w-3xl mx-auto text-lg leading-relaxed mb-16 opacity-90"
            >
              Découvrez une sélection de nos projets phares, réalisés avec rigueur et passion à travers le Maroc. Chaque
              chantier est une preuve de notre engagement envers la qualité, l’innovation et la satisfaction de nos
              clients.
            </motion.p>
            {/* Desktop Grid Layout */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10"
            >
              {[
                {
                  title: "Complexe résidentiel Al Amal, Casablanca",
                  description: "Construction d’un ensemble de 150 logements modernes avec espaces verts et commodités.",
                  image: "/8e7a74878b08a9b9668ad7bfbcc9e7e4.jpg",
                },
                {
                  title: "Réhabilitation de l’Hôtel Historique, Fès",
                  description: "Restauration d’un bâtiment patrimonial tout en intégrant des équipements modernes.",
                  image: "/f8291e1bc6bcb7469e23f27360746f9b.jpg",
                },
                {
                  title: "Route régionale, Marrakech",
                  description:
                    "Réalisation d’une voie de 20 km avec infrastructures d’assainissement et éclairage public.",
                  image: "/40e4c466b1f739612b7eaa19fe3fa8d8.jpg",
                },
                {
                  title: "Centre commercial Oasis, Rabat",
                  description: "Construction d’un espace commercial de 10 000 m² avec parking souterrain.",
                  image: "/989c893296002988f651484665b32433.jpg",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className={`group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02]`}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    width={800}
                    height={500}
                    alt={project.title}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                    <h4 className="text-2xl font-bold mb-2 text-primary-foreground">{project.title}</h4>
                    <p className="text-sm opacity-90">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            {/* Mobile Carousel Layout */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="md:hidden relative"
            >
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4 items-stretch">
                  {[
                    {
                      title: "Complexe résidentiel Al Amal, Casablanca",
                      description:
                        "Construction d’un ensemble de 150 logements modernes avec espaces verts et commodités.",
                      image: "/8e7a74878b08a9b9668ad7bfbcc9e7e4.jpg",
                    },
                    {
                      title: "Réhabilitation de l’Hôtel Historique, Fès",
                      description: "Restauration d’un bâtiment patrimonial tout en intégrant des équipements modernes.",
                      image: "/f8291e1bc6bcb7469e23f27360746f9b.jpg",
                    },
                    {
                      title: "Route régionale, Marrakech",
                      description:
                        "Réalisation d’une voie de 20 km avec infrastructures d’assainissement et éclairage public.",
                      image: "/40e4c466b1f739612b7eaa19fe3fa8d8.jpg",
                    },
                    {
                      title: "Centre commercial Oasis, Rabat",
                      description: "Construction d’un espace commercial de 10 000 m² avec parking souterrain.",
                      image: "/989c893296002988f651484665b32433.jpg",
                    },
                  ].map((project, index) => (
                    <CarouselItem key={index} className="pl-4 basis-full">
                      <motion.div variants={itemVariants} className="p-1 h-full">
                        <div className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 h-full flex flex-col">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            width={800}
                            height={500}
                            alt={project.title}
                            className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                            <h4 className="text-2xl font-bold mb-2 text-primary-foreground">{project.title}</h4>
                            <p className="text-sm opacity-90">{project.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </motion.div>
          </div>
        </section>
        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-20 md:py-32 lg:py-40 bg-secondary text-secondary-foreground relative overflow-hidden"
        >
          <div className="container grid md:grid-cols-2 gap-16 items-start mx-auto px-16 max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideLeft}
              className="space-y-10"
            >
              <div className="space-y-4">
                <motion.h2
                  variants={slideUp}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight"
                >
                  Contactez-nous
                </motion.h2>
                <motion.h3 variants={slideUp} className="text-xl md:text-2xl font-semibold">
                  Prêts à donner vie à votre projet
                </motion.h3>
                <motion.p variants={fadeIn} className="text-lg leading-relaxed opacity-90">
                  Sibahi Travel est à votre disposition pour discuter de vos projets, répondre à vos questions ou vous
                  fournir un devis personnalisé. Contactez-nous dès maintenant et commençons à bâtir l’avenir ensemble.
                </motion.p>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
                className="grid gap-8"
              >
                <motion.div variants={itemVariants} className="flex items-center gap-4">
                  <MapPin className="h-8 w-8 text-primary flex-shrink-0" />
                  <p className="text-lg opacity-90">123 Avenue Mohammed V, Rabat, Maroc</p>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center gap-4">
                  <Phone className="h-8 w-8 text-primary flex-shrink-0" />
                  <p className="text-lg opacity-90">+212 5XX XXX XXX</p>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center gap-4">
                  <Mail className="h-8 w-8 text-primary flex-shrink-0" />
                  <p className="text-lg opacity-90">contact@sibahitravel.ma</p>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center gap-4">
                  <Clock className="h-8 w-8 text-primary flex-shrink-0" />
                  <p className="text-lg opacity-90">Lundi au vendredi, 8h00 - 18h00</p>
                </motion.div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
                className="space-y-4"
              >
                <motion.h4 variants={slideUp} className="text-2xl font-semibold text-primary">
                  Suivez-nous sur les réseaux sociaux
                </motion.h4>
                <motion.div variants={itemVariants} className="flex gap-6">
                  <Link href="#" aria-label="Facebook">
                    <div className="p-3 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors duration-300">
                      <Facebook className="h-7 w-7 text-primary" />
                    </div>
                  </Link>
                  <Link href="#" aria-label="LinkedIn">
                    <div className="p-3 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors duration-300">
                      <Linkedin className="h-7 w-7 text-primary" />
                    </div>
                  </Link>
                  <Link href="#" aria-label="Instagram">
                    <div className="p-3 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors duration-300">
                      <Instagram className="h-7 w-7 text-primary" />
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideRight}
              className="bg-white text-foreground p-8 md:p-10 rounded-2xl shadow-2xl"
            >
              <motion.h4 variants={slideUp} className="text-3xl font-bold text-primary mb-8">
                Envoyez-nous un message
              </motion.h4>
              <motion.form
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
                className="grid gap-6"
              >
                <motion.div variants={itemVariants} className="grid gap-2">
                  <Label htmlFor="name" className="text-base">
                    Nom
                  </Label>
                  <Input
                    id="name"
                    placeholder="Votre nom"
                    className="p-3 border-gray-300 focus:border-primary focus:ring-primary"
                  />
                </motion.div>
                <motion.div variants={itemVariants} className="grid gap-2">
                  <Label htmlFor="email" className="text-base">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Votre email"
                    className="p-3 border-gray-300 focus:border-primary focus:ring-primary"
                  />
                </motion.div>
                <motion.div variants={itemVariants} className="grid gap-2">
                  <Label htmlFor="message" className="text-base">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Décrivez votre projet ou votre question"
                    className="min-h-[140px] p-3 border-gray-300 focus:border-primary focus:ring-primary"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <AnimatedButton className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-xl rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    Envoyer ma demande
                  </AnimatedButton>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
