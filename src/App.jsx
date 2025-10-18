import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Contatti from './components/Contatti';
import Servizi from './components/Servizi';
import ChiSiamo from './components/ChiSiamo';

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <Servizi />
      <ChiSiamo />
      <Contatti />
      <Footer />
    </div>
  );
}
