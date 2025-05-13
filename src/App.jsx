import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Importações do React Router
import Page from "./components/sections/Page";
import Header from "./components/sections/Header";
import Navigation from "./components/sections/Navigation";
import Hero from "./components/sections/Hero";
import Reviews from "./components/sections/Reviews";
import Main from "./components/sections/Main";
import Logos from "./components/sections/Logos";
import Features from "./components/sections/Features";
import FAQs from "./components/sections/FAQs/FAQs";
import Testimonials from "./components/sections/Tesimonials/Testimonials";
import SignInSignUp from './components/login/SignInSignUp';
import Footer from "./components/sections/Footer";
import { ModalContextProvider } from "./contexts/ModalContext";
import MobileMenu from "./components/sections/MobileMenu/MobileMenu";
import { MobileMenuContextProvider } from "./contexts/MobileMenuContext";

function App() {
  return (
    <ModalContextProvider>
      <MobileMenuContextProvider>
        <Routes>
          {/* Rota principal */}
          <Route path="/" element={
            <>
              <Navigation />
              <Page>
                <Header>
                  <Hero />
                  <Reviews />
                </Header>
                <Main>
                  <Logos />
                  <Features />
                  <FAQs />
                  <Testimonials />
                </Main>
                <Footer />
              </Page>
            </>
          } />

          {/* Rota de login */}
          <Route path="/login" element={
            <>
              <Navigation />
              <SignInSignUp />
            </>
          } />
        </Routes>
        <MobileMenu />
      </MobileMenuContextProvider>
    </ModalContextProvider>
  );
}

export default App;