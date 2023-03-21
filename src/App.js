import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

import NavBar from "./Components/NavBar/NavBar";

import ConfirmBuy from "./Components/ConfirmBuy/ConfirmBuy";
import Home from "./Components/Home/Home";
import SuccessPage from "./Components/SuccessPage/SuccessPage";

function App() {
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [basket, setBasket] = useState([]);
  const [modelOpen, setModalOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [Infos, setInfos] = useState({
    firstName: "",
    lastName: "",
    Address: "",
  });

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  useEffect(() => {
    let total = 0;
    basket.map((item) => {
      total = total + item.price;
    });
    setTotalPrice(total);
  }, [basket, modelOpen]);
  return (
    <Router>
      <div className="App">
        <NavBar
          searched={searched}
          setResults={setResults}
          setSearched={setSearched}
          basket={basket}
          handleOpenModal={handleOpenModal}
        />
        <Routes>
          <Route
            path={"/"}
            element={
              <Home
                handleCloseModal={handleCloseModal}
                modelOpen={modelOpen}
                totalPrice={totalPrice}
                searched={searched}
                setSearched={setSearched}
                results={results}
                setResults={setResults}
                basket={basket}
                setBasket={setBasket}
              />
            }
          />
          <Route
            path={"/Acheter"}
            element={
              <ConfirmBuy basket={basket} setBasket={setBasket} Total={totalPrice} setInfos={setInfos} Infos={Infos} />
            }
          />
          <Route path={"/Succes"} element={<SuccessPage Infos={Infos} setInfos={setInfos} handleCloseModal={handleCloseModal} setResults={setResults} setSearched={setSearched} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
