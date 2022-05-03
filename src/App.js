import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  NavBar,
  Cryptocurrencies,
  Home,
  News,
  Exchanges,
  CryptoDetails,
} from "./Component";
function App() {
  return (
    <div className="App grid grid-cols-5">
      <div className="nav__bar">
        <NavBar />
      </div>
      <div className="main col-start-2 col-span-4">
        <div className="Route">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/exchanges" element={<Exchanges />} />
            <Route
              exact
              path="/cryptocurrencies"
              element={<Cryptocurrencies />}
            />
            <Route
              exact
              path="crypto/:coinrankingUrl"
              element={<CryptoDetails />}
            />
            <Route exact path="/news" element={<News />} />
          </Routes>
        </div>
      </div>
      <footer className="footer w-full bg-[#0b0b45] text-center p-7 text-white col-span-5">
        <h1 className="text-xl font-bold">CryptoHub</h1>
        <p>All Rights Reserved</p>
        <div className="nav flex justify-center items-center space-x-5 py-5 text-blue-500">
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          <Link to="/news">News</Link>
        </div>
      </footer>
    </div>
  );
}

export default App;
