import { Button } from "./ui/Button"
import { ArrowRight, Phone } from "lucide-react"
import videoSource from '../public/istockphoto-1456786353-640_adpp_is.mp4';
import heroImage from '../public/istockphoto-2217207866-1024x1024.jpg';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 w-full">
      {/* Background Image with Overlay */}
      {/* <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Veterinary care" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div> */}

      {/* Background video */}
      <video
        className="w-full h-full object-cover absolute inset-0 z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-ncvColor-grey/50 z-20"></div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-30">
        <div className="max-w-3xl md:max-w-6xl md:ml-40">
          <div className="inline-block mb-6">
            {/* <span className="text-sm font-semibold text-accent bg-accent/10 px-4 py-2 rounded-full">
              Dal 2016 al vostro servizio
            </span> */}
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-100 leading-tight text-balance">
            {/* Nuova Clinica Veterinaria <span className="text-primary">Val d'Elsa</span> */}
          </h1>

          <div className="[text-shadow:0_1px_4px_rgba(0,0,0,0.8),0_0_20px_rgba(0,0,0,0.4)]">
            <p className="text-lg font-semibold md:text-xl text-muted leading-relaxed mb-2 text-pretty">
              Dal 2016 ci prendiamo cura dei vostri animali con passione, competenza e dedizione.
            </p>
            <p className="text-lg font-semibold md:text-xl text-muted leading-relaxed mb-8 text-pretty">
              Una struttura moderna con spazi accoglienti, tecnologie avanzate e un team medico altamente qualificato.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-white group" onClick={() => document.getElementById("contatti").scrollIntoView()}>
              Prenota una visita
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            {/* <Button size="lg" variant="outline" className="border-2 group bg-transparent">
              <Phone className="mr-2 h-5 w-5" />
              0577 938997
            </Button> */}
          </div>

          {/* <div className="flex flex-wrap gap-8 text-sm text-muted">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">9+</div>
              <div>Anni di esperienza</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">2</div>
              <div>Veterinari esperti</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">1000+</div>
              <div>Animali curati</div>
            </div>
          </div> */}
        </div>
      </div>
    </section >
  )
}
