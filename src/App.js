import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Navbar} from './components/navbar';
import { Shop } from "./pages/shop/shop";
import { PetBeheavior} from "./pages/shop/petbeheavior";
import { Login } from "./pages/shop/login"
import { Cart } from "./pages/cart/cart";
import { About } from "./pages/shop/about"
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />

            <Route path="/petbeheavior" element={<PetBeheavior />} />
            <Route path="login" element={<Login/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/cart" element={<Cart />}/>
          </Routes>
        </Router>
        </ShopContextProvider>

    </div>
  );
}

export default App;
