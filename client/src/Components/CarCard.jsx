import React from "react";
import { useParams } from "react-router-dom";

function CarCard(props) {
  const params = useParams();
  const carArray = props.carArray.filter((carArray) => {
    return carArray.carName === params.carName;
  })[0];
  return (
    <div className="car-list">
      {carArray && (
        <div>
          <h3>{carArray.carName}</h3>
        </div>
      )}
    </div>
  );
}
export default CarCard;
