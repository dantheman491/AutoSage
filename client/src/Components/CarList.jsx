import React from "react";
//import { useParams } from "react-router-dom";
//this is where the Auto cards go to

function CarList(props) {
  //   const params = useParams();
  //  // const carArray = props.carArray.filter((carArray) => {
  //     return carArray.carName === params.carName;
  //   })[0];
  return (
    <div className="car-list">
      <h3>more cars</h3>
      {/* {carArray && (
        <div>
          <h3>{carArray.carName}</h3>
        </div>
      )} */}
    </div>
  );
}
export default CarList;
