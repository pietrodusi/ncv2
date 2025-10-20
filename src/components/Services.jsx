import {
  Stethoscope,
  Syringe,
  Scissors,
  Activity,
  Pill,
  Shield,
  Microscope,
  Bone,
  TestTube,
  PawPrint,
  Eye,
  Apple,
  Calendar,
  Video,
  Dog
} from "lucide-react"
import { PiToothBold } from 'react-icons/pi';

const servicesData = [
  {
    id: 1,
    name: "Medicina preventiva",
    description:
      "Visite di routine, protocolli vaccinali, microchip e trattamenti antiparassitari per garantire la salute e la protezione del tuo animale fin da cucciolo.",
    icon: Shield,
  },
  {
    id: 2,
    name: "Visite specialistiche",
    description:
      "Consulenze dedicate in ortopedia, cardiologia, oncologia, oftalmologia, medicina interna, nutrizione e riproduzione, con professionisti specializzati.",
    icon: Stethoscope,
  },
  {
    id: 3,
    name: "Diagnostica per immagini",
    description:
      "Radiografie digitali, ecografie ed endoscopie, con tecniche avanzate per diagnosi precise e tempestive.",
    icon: Activity,
  },
  {
    id: 4,
    name: "Chirurgia e anestesia",
    description:
      "Interventi di routine e specialistici in sale operatorie attrezzate, con anestesia sicura, monitoraggio personalizzato e gestione del dolore.",
    icon: Scissors,
  },
  {
    id: 5,
    name: "Chirurgia mini-invasiva e laparoscopica",
    description:
      "Interventi con accessi ridotti che assicurano meno dolore, minor rischio di complicanze e recupero più rapido.",
    icon: Syringe,
  },
  {
    id: 6,
    name: "Odontostomatologia",
    description:
      "Cure dentali complete: pulizia, estrazioni, trattamento di patologie orali e chirurgia maxillo-facciale.",
    icon: PiToothBold,
  },
  {
    id: 7,
    name: "Oncologia",
    description: "Diagnosi e terapie personalizzate per pazienti oncologici, con attenzione al benessere globale.",
    icon: Microscope,
  },
  {
    id: 8,
    name: "Ortopedia e traumatologia",
    description:
      "Trattamento di patologie muscolo-scheletriche, traumi e fratture con approcci chirurgici e riabilitativi.",
    icon: Bone,
  },
  {
    id: 9,
    name: "Medicina interna",
    description:
      "Gestione di malattie complesse che coinvolgono apparati digestivo, respiratorio, urinario, endocrino e altro.",
    icon: Pill,
  },
  {
    id: 10,
    name: "Laboratorio analisi",
    description: "Esami ematici, biochimici, citologici, ormonali e urinari.",
    icon: TestTube,
  },
  {
    id: 11,
    name: "Assistenza animali esotici",
    description: "Cure dedicate a conigli, roditori, rettili e uccelli, con protocolli e attrezzature specifiche.",
    icon: PawPrint,
  },
  {
    id: 12,
    name: "Endoscopia",
    description: "Tecniche diagnostiche e operative per l'esplorazione delle vie respiratorie, digestive e urinarie.",
    icon: Eye,
  },
  {
    id: 13,
    name: "Nutrizione e dietetica clinica",
    description: "Consulenze nutrizionali personalizzate e diete bilanciate per animali sani o con patologie.",
    icon: Apple,
  },
  {
    id: 14,
    name: "Riproduzione e ostetricia",
    description: "Assistenza al ciclo riproduttivo, diagnosi di gravidanza e gestione del parto.",
    icon: Dog,
  },
  {
    id: 15,
    name: "Piani salute personalizzati",
    description:
      "Programmi annuali di prevenzione con controlli periodici, esami di screening e vaccinazioni programmate.",
    icon: Calendar,
  },
  {
    id: 16,
    name: "Telemedicina e supporto a distanza",
    description:
      "Consulenze online e follow-up per garantire assistenza anche quando non è possibile recarsi in clinica.",
    icon: Video,
  },
]

export function Services() {
  return (
    <section id="servizi" className="py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
              I nostri servizi
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Cure complete per i vostri animali
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesData.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-surface-dark group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{service.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
