import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* import Home from "../pages/Home";
import Account from "../pages/Account"; */
import Categories from "../pages/Categories";
/* import Cart from "../pages/Cart"; */

const AppRouter = () => {
  return (
    <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} /> */}
          <Route path="/categories" element={<Categories />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
    </Router>
  );
};

export default AppRouter;
