import './App.css'
import Header from './components/HeaderFooter/Header'
import Accueil from './components/Accueil/Accueil'
import { LangueProvider } from './contexts/LangueContext';
import { ChoixProvider } from './contexts/ChoixContext';
import { useContext, useState} from "react";
import HeaderMobile from './components/HeaderFooter/HeaderMobile.jsx';
import ChoixSide from './components/ChoixSide.jsx';

function App() {

  const [MenuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <LangueProvider>
      <ChoixProvider>
        <HeaderMobile MenuOpen={MenuOpen} setMenuOpen={setMenuOpen} />
        <section className='AccueilHeader'>
          <Header MenuOpen={MenuOpen} setMenuOpen={setMenuOpen} />
          <Accueil />
        </section>
        <ChoixSide />

      </ChoixProvider>
    </LangueProvider>
    </>
  )
}

export default App
