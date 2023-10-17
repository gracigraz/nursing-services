import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { HomePage } from "./pages/HomePage/HomePage";

export const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-nosotros" />
        <Route path="/servicios" />
        <Route path="/blog" />
        <Route path="/contacto" />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};
