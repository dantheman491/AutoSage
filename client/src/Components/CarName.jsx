import React from "react";
import { useParams } from "react-router-dom";
//this page will be the summary of the individual car
function CarName(props) {
  const params = useParams();
  console.log(props);
  const car = props.carDetail.find((car) => {
    return car.fields.carName === params.name;
  });
  console.log(car);
  return (
    <div className="car-details">
      {car && (
        <div id="cars10">
          <h3 id="carname2">{car.fields.averagePrice}</h3>

          <h2 id="carname1">{car.fields.carName}</h2>
          <div id="cardescription">
            <h4 id="carname3">{car.fields.description}</h4>
          </div>
        </div>
      )}
    </div>
  );
}
export default CarName;
