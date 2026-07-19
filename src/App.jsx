import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Commercial from "./components/Commercial";
import Branches from "./components/Branches";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import OrderPage from "./components/OrderPage";
import ContactPage from "./components/ContactPage";
import WhatsAppFloat from "./components/WhatsAppFloat";

// home page - assembles all the main sections in order
function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Commercial />
      <Branches />
      <Reviews />
    </>
  );
}

// wrapping everything in CartProvider so the order basket
// state is available from any page or component
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
