import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { InfoCards } from "./components/InfoCards"
import { Mission } from "./components/Mission"
import { Services } from "./components/Services"
import { Team } from "./components/Team"
import { Contacts } from "./components/Contacts"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <InfoCards />
        <Mission />
        <Services />
        <Team />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}

export default App
