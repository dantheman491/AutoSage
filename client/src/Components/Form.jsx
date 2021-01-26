import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../Services";

function Form(props) {
  const [carName, setCarName] = useState("");
  const [averagePrice, setAveragePrice] = useState("");
  const [description, setDescription] = useState("");
  const params = useParams();

  useEffect(() => {
    if (props.carInfo.length > 0 && params.id) {
      const addCar = props.carInfo.find((carInfo) => params.id === carInfo.id);
      setCarName(addCar.fields.carName);
      setAveragePrice(addCar.fields.averagePrice);
      setDescription(addCar.fields.description);
    }
  }, [params.id, props.carInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      carName,
      averagePrice,
      description,
    };
    await axios.post(baseURL, { fields }, config);
    props.setToggleFetch((prev) => !prev);
  };
  return (
    <form id="addcarform" action="">
      <label id="carName" htmlFor="Car Name">
        Car Year, Make, Model:
      </label>
      <input
        name="type"
        type="text"
        value={carName}
        onChange={(e) => setCarName(e.target.value)}
      />
      <label id="averagePrice" htmlFor="averagePrice">
        Average Price:
      </label>
      <input
        name="Average Price"
        type="number"
        value={averagePrice}
        onChange={(e) => setAveragePrice(e.target.valueAsNumber)}
      />
      <label id="description" htmlFor="description">
        Description:
      </label>
      <input
        name="description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button id="submit" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
