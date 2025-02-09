import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Categories from "../pages/Categories";
import Ropa from "../pages/categories/Ropa";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import logoSrc from "../assets/ye.png";

const logo = {
  src: logoSrc,
  alt: "Logo",
  text: "Young Essence"
};

const menuItems = [
  { label: "Inicio", link: "/" },
  { label: "Categorías", link: "/categories" },
  { label: "Cuenta", link: "/account" },
  { label: "Carrito", link: "/cart" }
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
        <Route path="/categories/ropa" element={<Ropa />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;