import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import Header from "./components/header/Header";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
