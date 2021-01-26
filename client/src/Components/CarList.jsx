import React from "react";
import { Link } from "react-router-dom";
//this is where the Auto cards go to

function CarList(props) {
  console.log(props);
  return (
    <div className="car-list">
      <div className="carinfo">
        <img
          id="arrow"
          src="https://static.thenounproject.com/png/849651-200.png"
        ></img>
        {props.cars.map((car) => {
          return (
            <div className="carlist">
              <Link key={car.id} to={`/carName/${car.fields.carName}`}>
                <h3>{car.fields.carName}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default CarList;
