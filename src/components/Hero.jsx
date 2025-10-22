import { Button } from "./ui/Button"
import { ArrowRight, Phone, View } from "lucide-react"
import videoSource from '../public/istockphoto-1456786353-640_adpp_is.mp4';

export function Hero() {

  console.log(window.innerWidth);
  console.log(navigator.userAgentData.mobile);

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center w-full">
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
      {/* <div className="container mx-auto relative z-30 pt-[10%]"> */}
      <div className="container relative mx-auto z-30 max-w-3xl lg:max-w-6xl px-8 lg:mt-[40lvh] mt-[60lvh]">
        <div className="[text-shadow:0_1px_4px_rgba(0,0,0,0.8),0_0_20px_rgba(0,0,0,0.4)]">
          <p className="text-lg font-semibold lg:text-xl text-muted leading-relaxed mb-2 text-pretty">
            Dal 2016 ci prendiamo cura dei vostri animali con passione, competenza e dedizione.
          </p>
          <p className="text-lg font-semibold lg:text-xl text-muted leading-relaxed mb-8 text-pretty">
            Una struttura moderna con spazi accoglienti, tecnologie avanzate e un team medico altamente qualificato.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary-hover text-white group" onClick={() => document.getElementById("contatti").scrollIntoView()}>
            Prenota una visita
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        {/* </div> */}
      </div>
    </section >
  )
}
