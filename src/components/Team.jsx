import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { useRef, useEffect, useState } from "react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import SashaPadula from '../public/team/SashaPadula.jpg'
import FrancescoPaesano from '../public/team/FrancescoPaesano.jpg'
import AlessandroMarigliano from '../public/team/AlessandroMarigliano.jpg'
import CatalinaAlbert from '../public/team/CatalinaAlbert.jpg'
import GiuliaBiagioni from '../public/team/GiuliaBiagioni.jpg'
import GiacomoDusi from '../public/team/GiacomoDusi.jpg'
import LauraCarraresi from '../public/team/LauraCarraresi.jpg'

import placeholder from '../public/team/LOGO DEFINITIVO-09.png'

const teamData = [
  {
    id: 1,
    name: "Dott. Giacomo Dusi",
    position: "Direttore sanitario",
    image: GiacomoDusi,
    description: "Si occupa principalmente di chirurgia, chirurgia mini-invasiva ed endoscopia.",
  },
  {
    id: 2,
    name: "Dott.ssa Laura Carraresi",
    position: "Veterinaria",
    image: LauraCarraresi,
    description: "Si occupa principalmente di ecografia, diagnostica per immagini e medicina interna.",
  },
  {
    id: 3,
    name: "Dott.ssa Giulia Biagioni",
    position: "Veterinaria",
    image: GiuliaBiagioni,
    description: "Si occupa principalmente di nutrizione, riproduzione e medicina interna.",
  },
  {
    id: 4,
    name: "Dott.ssa Catalina Albert",
    position: "Veterinaria",
    image: CatalinaAlbert,
    description: "Si occupa principalmente di chirurgia e medicina interna.",
  },
  {
    id: 5,
    name: "Dott. Giovanni Magnanelli",
    position: "Veterinario",
    image: placeholder,
    description: "Si occupa principalmente di anestesia e terapia del dolore.",
  },
  {
    id: 6,
    name: "Dott. Francesco Paesano",
    position: "Veterinario",
    image: FrancescoPaesano,
    description: "Si occupa di odontostomatologia e chirurgia maxillo-facciale.",
  },
  {
    id: 7,
    name: "Dott. Giuseppe Bartoletta",
    position: "Veterinario",
    image: placeholder,
    description: "Si occupa di ortopedia.",
  },
  {
    id: 8,
    name: "Dott.ssa Chiara Pescatori",
    position: "Veterinaria",
    image: placeholder,
    description: "Si occupa di cardiologia ed ecografia.",
  },
  {
    id: 9,
    name: "Dott. Daniele Betti",
    position: "Veterinario",
    image: placeholder,
    description: "Si occupa di oftalmologia.",
  },
  {
    id: 10,
    name: "Dott. Alessandro Marigliano",
    position: "Veterinario",
    image: AlessandroMarigliano,
    description: "Si occupa di animali esotici.",
  },
  {
    id: 11,
    name: "Dott.ssa Silvia Porcelli",
    position: "Veterinaria",
    image: placeholder,
    description: "Si occupa di oncologia.",
  },
  {
    id: 12,
    name: "Dott. Emanuele Mussi",
    position: "Veterinario",
    image: placeholder,
    description: "Si occupa di endoscopia.",
  },
  {
    id: 13,
    name: "Samantha Ventani",
    position: "Tecnico veterinario",
    image: placeholder,
    description: "Tecnico veterinario specializzato nell'assistenza clinica.",
  },
  {
    id: 14,
    name: "Sasha Padula",
    position: "Tecnico veterinario",
    image: SashaPadula,
    description: "Tecnico veterinario specializzato nell'assistenza clinica.",
  },
]

export function Team() {
  const swiperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state
        setIsVisible(entry.isIntersecting);

        // Control autoplay based on visibility
        const swiper = swiperRef.current?.swiper;
        if (swiper) {
          if (entry.isIntersecting) {
            swiper.autoplay.start();
          } else {
            swiper.autoplay.stop();
          }
        }
      },
      {
        threshold: 0.1 // Trigger when at least 10% of the component is visible
      }
    );

    // Start observing the Swiper container
    if (swiperRef.current) {
      observer.observe(swiperRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
              Il nostro team
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Professionisti dedicati alla cura dei vostri animali
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Un team di veterinari esperti e tecnici qualificati, sempre aggiornati sulle ultime tecniche e tecnologie
            per garantire il miglior servizio possibile.
          </p>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          speed={800}
          effect="slide"
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 32,
            },
          }}
          className="team-swiper"
        >
          {teamData.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-surface-dark group h-full">
                <div className="aspect-square overflow-hidden bg-muted min-h-[400px] filter grayscale hover:grayscale-0 transition duration-500 ease-in-out">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 min-h-[160px]">
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-accent mb-3">{member.position}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section >
  )
}
