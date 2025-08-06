"use client" // Ce composant utilise des fonctionnalités côté client comme framer-motion

import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Palette,
  Home,
  Sofa,
  Lightbulb,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Users,
  Leaf,
  Instagram,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"
import AnimatedButton from "@/components/animated-button"
import WhatsAppButton from "@/components/whatsapp-button"
import { TypewriterEffect } from "@/components/typing-animation"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

// Définir les variantes d'animation communes
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

// Variantes pour les conteneurs avec décalage
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

// Variantes pour les éléments avec décalage
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function HomePage() {
  // Refs for intersection observation with explicit types
  const [titleRef, titleHasAnimated] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.1 })
  const [descriptionRef, descriptionHasAnimated] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.1 })
  const [formRef, formHasAnimated] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 })
  const [contactMethodsRef, contactMethodsHasAnimated] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 })
const [submissionStatus, setSubmissionStatus] = useState<{
    success: boolean | null;
    message: string;
  }>({ success: null, message: "" });

  // Clear message after 5 seconds
  useEffect(() => {
    if (submissionStatus.success !== null) {
      const timer = setTimeout(() => {
        setSubmissionStatus({ success: null, message: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);

  async function handleSubmit(e:any) {
    e.preventDefault();
    const form = e.currentTarget;

    const data = {
      name: form.name.value,
      
      email: form.email.value,
      
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmissionStatus({
          success: true,
          message: "Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.",
        });
        form.reset();
      } else {
        setSubmissionStatus({
          success: false,
          message: "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement par email.",
        });
      }
    } catch (error) {
      setSubmissionStatus({
        success: false,
        message: "Erreur de connexion. Vérifiez votre réseau et réessayez.",
      });
    }
  }
  const services = [
    {
      icon: Palette,
      title: "Design d'intérieur",
      description: "Création d'intérieurs sur mesure avec des textures luxueuses et des esthétiques modernes.",
    },
    {
      icon: Home,
      title: "Rénovation architecturale",
      description: "Revitalisation des espaces avec des éléments marocains traditionnels et contemporains.",
    },
    {
      icon: Sofa,
      title: "Personnalisation de meubles",
      description: "Meubles sur mesure pour compléter votre style intérieur unique.",
    },
    {
      icon: Lightbulb,
      title: "Solutions d'éclairage",
      description: "Designs d'éclairage innovants pour améliorer l'ambiance et la fonctionnalité.",
    },
  ]
  const features = [
    {
      icon: CheckCircle,
      title: "Artisanat expert",
      description: "Artisans qualifiés offrant un design et une exécution de haute qualité.",
    },
    {
      icon: Leaf,
      title: "Matériaux durables",
      description: "Utilisation de matériaux écologiques pour un espace de vie plus vert.",
    },
    {
      icon: Users,
      title: "Service personnalisé",
      description: "Une équipe dédiée pour concrétiser votre vision avec soin.",
    },
  ]
  return (
    <div className="flex flex-col min-h-[100dvh] scroll-smooth">
      <SiteHeader />
      <main className="flex-1">
        {/* Section Héros */}
        <section
          id="home"
          className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden bg-secondary"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/WhatsApp Image 2025-07-05 at 01.39.26.jpeg" // Exemple : salon moderne avec TV
              alt="Design d'intérieur élégant"
              layout="fill"
              objectFit="cover"
              className="opacity-40"
            />
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
                baseText="Moroccan Elegance Designs -"
                wordsToAnimate={["Transformons vos espaces avec style"]}
                typingSpeed={100}
                erasingSpeed={50}
                delayBetweenActions={1000}
              />
            </motion.div>
            <motion.p variants={slideUp} className="text-lg md:text-xl lg:text-2xl font-medium">
              Élevez votre maison avec des designs marocains exquis
            </motion.p>
            <motion.p variants={fadeIn} className="text-base md:text-lg leading-relaxed">
              Bienvenue chez Moroccan Elegance Designs, où nous fusionnons l'artisanat marocain traditionnel avec des
              techniques de design modernes. Des murs texturés aux plafonds ornés, nous créons des intérieurs
              magnifiques qui reflètent votre personnalité et votre héritage.
            </motion.p>
            <motion.div variants={slideUp} className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
              <AnimatedButton className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <Link href="#contact">Demander une consultation</Link>
              </AnimatedButton>
              <AnimatedButton className="border-2 border-primary text-primary bg-transparent hover:bg-primary/10 px-8 py-3 text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <Link href="#projects">Voir notre portfolio</Link>
              </AnimatedButton>
            </motion.div>
          </motion.div>
        </section>
        {/* Section À propos */}
        <section
          id="about"
          className="w-full py-20 md:py-32 lg:py-40 bg-background text-foreground relative overflow-hidden"
        >
          <div className="container mx-auto px-16 max-w-6xl">
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
                  Créateurs d'intérieurs intemporels
                </motion.h3>
                <motion.p variants={fadeIn} className="text-lg leading-relaxed text-muted-foreground">
                  Moroccan Elegance Designs, basé à Rabat, se spécialise dans la création d'intérieurs luxueux inspirés
                  du patrimoine marocain. Notre expertise couvre les designs de murs texturés, les éclairages sur mesure
                  et les rénovations architecturales, servant des clients à travers le Maroc.
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
                  src="/DSC_5687.jpg" // Exemple : mur orné
                  width={900}
                  height={700}
                  alt="Design d'intérieur"
                  className="rounded-3xl object-cover shadow-2xl transition-transform transform hover:scale-105 duration-500"
                />
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              </motion.div>
            </div>
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
                Créateurs d'intérieurs intemporels
              </motion.h3>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                className="text-lg leading-relaxed mb-12 opacity-90"
              >
                Moroccan Elegance Designs, basé à Rabat, se spécialise dans la création d'intérieurs luxueux inspirés
                du patrimoine marocain. Notre expertise couvre les designs de murs texturés, les éclairages sur mesure
                et les rénovations architecturales, servant des clients à travers le Maroc.
              </motion.p>
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
        {/* Section Services */}
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
              Élevez votre espace
            </motion.h3>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="max-w-3xl mx-auto text-lg leading-relaxed mb-16 opacity-90"
            >
              Moroccan Elegance Designs propose une gamme de services pour transformer votre maison ou bureau avec des
              designs inspirés du Maroc.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10"
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
        {/* Section Projets */}
        <section id="projects" className="w-full py-20 md:py-32 lg:py-40 bg-background text-foreground">
          <div className="container text-center mx-auto px-16 max-w-6xl">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4"
            >
              Notre portfolio
            </motion.h2>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideUp}
              className="text-xl md:text-2xl font-semibold text-secondary mb-12"
            >
              Inspiré par la beauté marocaine
            </motion.h3>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="max-w-3xl mx-auto text-lg leading-relaxed mb-16 opacity-90"
            >
              Découvrez notre portfolio d'intérieurs et de designs architecturaux qui témoignent de notre engagement
              envers l'artisanat et le style.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10"
            >
              {[
                {
                  title: "Salon luxueux",
                  description: "Un espace de vie moderne avec des murs texturés et un éclairage élégant.",
                  image: "/WhatsApp Image 2025-07-05 at 01.39.25.jpeg",
                },
                {
                  title: "Design de mur orné",
                  description: "Textures murales artisanales avec des motifs intricés.",
                  image: "/WhatsApp Image 2025-07-05 at 01.43.22.jpeg",
                },
                {
                  title: "Maison marocaine traditionnelle",
                  description: "Un mélange d'architecture traditionnelle et de confort moderne.",
                  image: "/WhatsApp Image 2025-07-05 at 01.39.28.jpeg",
                },
                {
                  title: "Art du plafond, Casablanca",
                  description: "Designs de plafonds ornés avec un éclairage ambiant.",
                  image: "/WhatsApp Image 2025-07-05 at 01.43.21 (1).jpeg",
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
                      title: "Salon luxueux, Marrakech",
                      description: "Un espace de vie moderne avec des murs texturés et un éclairage élégant.",
                      image: "/e76e0db568d68266994ebf463ce2b76d.jpg",
                    },
                    {
                      title: "Design de mur orné, Fès",
                      description: "Textures murales artisanales avec des motifs intricés.",
                      image: "/d5048291c9fae766adedbac6a10b6bce.jpg",
                    },
                    {
                      title: "Maison marocaine traditionnelle, Rabat",
                      description: "Un mélange d'architecture traditionnelle et de confort moderne.",
                      image: "/40e4c466b1f739612b7eaa19fe3fa8d8.jpg",
                    },
                    {
                      title: "Art du plafond, Casablanca",
                      description: "Designs de plafonds ornés avec un éclairage ambiant.",
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
        {/* Section Contact */}
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
                  Créons quelque chose de magnifique ensemble
                </motion.h3>
                <motion.p variants={fadeIn} className="text-lg leading-relaxed opacity-90">
                  Moroccan Elegance Designs est prêt à vous aider à transformer votre espace. Contactez-nous pour une
                  consultation ou pour discuter de vos idées de design.
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
                  <p className="text-lg opacity-90">45 Rue des Arts, Rabat, Maroc</p>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center gap-4">
                  <Phone className="h-8 w-8 text-primary flex-shrink-0" />
                  <p className="text-lg opacity-90">+212 6XX XXX XXX</p>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center gap-4">
                  <Mail className="h-8 w-8 text-primary flex-shrink-0" />
                  <p className="text-lg opacity-90">info@moroccanelegance.ma</p>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center gap-4">
                  <Clock className="h-8 w-8 text-primary flex-shrink-0" />
                  <p className="text-lg opacity-90">Lundi au vendredi, 9h00 - 17h00</p>
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
                  Suivez-nous
                </motion.h4>
                <motion.div variants={itemVariants} className="flex gap-6">
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
                onSubmit={handleSubmit}
              >
                
                <motion.div variants={itemVariants} className="grid gap-2">
                  <Label htmlFor="name" className="text-base">
                    Nom
                  </Label>
                  <Input
                    id="name"
                    name="name"
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
                    name="email"
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
                    name="message"
                    placeholder="Décrivez votre projet de design"
                    className="min-h-[140px] p-3 border-gray-300 focus:border-primary focus:ring-primary"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <AnimatedButton className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-xl rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    Envoyer
                  </AnimatedButton>
                </motion.div>
                   {/* Animated status message */}
                  <AnimatePresence>
                    {submissionStatus.success !== null && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className={`p-4 rounded-md border ${
                          submissionStatus.success
                            ? "bg-green-50 border-green-200 text-green-700"
                            : "bg-red-50 border-red-200 text-red-700"
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          {submissionStatus.success ? (
                            <CheckCircle2 className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                          ) : (
                            <AlertCircle className="w-5 h-5 mt-0.5 text-red-500 flex-shrink-0" />
                          )}
                          <p className="text-sm">{submissionStatus.message}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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