import "./App.css";
import axios from "axios";
import { useState } from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header";
import CarCard from "./Components/CarCard";
import Footer from "./Components/Footer";
import Dropdown from "./Components/Dropdown";
import { baseURL, config } from "./Services";
import { useEffect } from "react";

function App() {
  const [carInfo, getCarInfo] = useState([]);

  useEffect(() => {
    const getAutos = async () => {
      const resp = await axios.get(baseURL, config);
      getCarInfo(resp.data.records);
    };
    getAutos();
  }, []);
  return (
    <div className="App">
      <Header />
      <Route exact path="/"></Route>
      <h1>Auto Sage</h1>
      <div className="placeholder">
        <Dropdown />
        <Route path="/:CarCard">
          <CarCard carArray={carInfo} />
        </Route>
      </div>
      <Footer />
    </div>
  );
}

export default App;
