import "./App.css";
import axios from "axios";
import { useState } from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header";
//import CarList from "./Components/CarList";
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
      <h1>Auto Sage</h1>

      <Route exact path="/">
        <div className="placeholder">
          <Dropdown carArray={carInfo} />
        </div>
      </Route>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
