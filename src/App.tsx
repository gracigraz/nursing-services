import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { AboutUsPage } from "./pages/AboutUsPage/AboutUsPage";
import { ServicesPage } from "./pages/ServicesPage/ServicesPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-nosotros" element={<AboutUsPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/blog" element={<HomePage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
