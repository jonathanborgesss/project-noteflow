import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importações do React Router
// Page Layout
import Page from "./components/sections/Page";

// Header
import Header from "./components/sections/Header";
import Navigation from "./components/sections/Navigation";
import Hero from "./components/sections/Hero";
import Reviews from "./components/sections/Reviews";

// Main
import Main from "./components/sections/Main";
import Logos from "./components/sections/Logos";
import Features from "./components/sections/Features";
import FAQs from "./components/sections/FAQs/FAQs";
import Testimonials from "./components/sections/Tesimonials/Testimonials";

import SignInSignUp from './components/login/SignInSignUp';

// Footer
import Footer from "./components/sections/Footer";

// Modal
import { ModalContextProvider } from "./contexts/ModalContext";

// Mobile Menu
import MobileMenu from "./components/sections/MobileMenu/MobileMenu";
import { MobileMenuContextProvider } from "./contexts/MobileMenuContext";

function App() {
  return (
    <ModalContextProvider>
      <MobileMenuContextProvider>
          <Navigation />
          <Routes>
            {/* Rota principal */}
            <Route
              path="/"
              element={
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
              }
            />

            {/* Rota de login */}
            <Route path="/login" element={<SignInSignUp />} />
          </Routes>
          <MobileMenu />
      </MobileMenuContextProvider>
    </ModalContextProvider>
  );
}

export default App;