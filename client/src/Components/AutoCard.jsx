//this is where the auto cards are created
import React from "react";
import axios from "axios";
function AutoCard(props) {
  const [singleCar, getSingleCar] = useState();

  useEffect(() => {
    const getAutoInfo = async () => {
      const resp = await axios.get(baseURL, config);
      getCarInfo(resp.data.records);
    };
    getSingleCar();
  }, []);

  return (
    <div>
      <h1>List of cars </h1>
    </div>
  );
}
export default AutoCard;
