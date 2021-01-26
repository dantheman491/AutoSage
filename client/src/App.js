import "./App.css";
import "./Components/Header.css";
import "./Components/Form.css";
import "./Components/CarName.css";
import "./Components/Footer.css";
import "./Components/CarList.css";
import axios from "axios";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import CarName from "./Components/CarName";
import Footer from "./Components/Footer";
import Dropdown from "./Components/Dropdown";
import { baseURL, config } from "./Services";
import Form from "./Components/Form";
import { useEffect } from "react";

function App() {
  const [carInfo, getCarInfo] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

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

      <Route exact path="/">
        <div className="placeholder">
          <Dropdown carArray={carInfo} />
        </div>
      </Route>

      <Route path="/addACar">
        <Form carInfo={carInfo} setToggleFetch={setToggleFetch} />
        <h2>A form goes here!</h2>
      </Route>
      <Route path="/edit/:id">
        <Form carInfo={carInfo} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/carName/:name">
        <CarName carDetail={carInfo} />
      </Route>
      <div className="mainfooter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
