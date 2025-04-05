import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Categories from "../pages/Categories";
import Ropa from "../pages/categories/Ropa";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import Cuenta from "../pages/Account";
import HelpPage from "../pages/HelpPage";
import logoSrc from "../assets/ye.png";
import Pagos from "../pages/Pagos";

const logo = {
  src: logoSrc,
  alt: "Logo",
  text: "Young Essence"
};

const menuItems = [
  { label: "Inicio", link: "/" },
  { label: "Categorías", link: "/categories" },
  { label: "Cuenta", link: "/account" },
  { label: "Carrito", link: "/cart" },
  { label: "Ayuda", link: "/help" },
  { label: "Pagos", link: "/pagos" }
];

const buttons = [
  { label: "Iniciar Sesión", link: "/login" }
];

const AppRouter = () => {
  return (
    <Router>
      <Navbar logo={logo} menuItems={menuItems} buttons={buttons} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/account" element={<Cuenta />} />
        <Route path="/categories/ropa" element={<Ropa />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/pagos" element={<Pagos />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
