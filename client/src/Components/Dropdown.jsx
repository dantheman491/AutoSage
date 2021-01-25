import React from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

//import CarList from "./CarList";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "0",
      filterCars: [],
    };

    console.log(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    //Link to carList
    //Show carCard
    //<Link to="/Cars"></Link>;
    const filteredCars = this.props.carArray.filter((cars) => {
      return cars.fields.averagePrice === this.state.value;
    });
    this.setState({
      filterCars: filteredCars,
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form id="dropdownresult" onSubmit={this.handleSubmit}>
          <h2>SAGE ADVICE ON CARS THAT FIT YOUR BUDGET</h2>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Select a value to begin">
              Select a value to begin
            </option>
            <option value="2,000">2,000</option>
            <option value="5,000">5,000</option>
            <option value="10,000">10,000</option>
            <option value="15,000">15,000</option>
            <option value="20,000">20,000</option>
          </select>
          <button>Direct</button>
        </form>
        {this.state.value && (
          <div className="carinfo">
            {this.state.filterCars.map((car) => {
              return (
                <div className="carlist">
                  <Link key to={`/carName/${car.fields.carName}`}>
                    <h3>{car.fields.carName}</h3>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
//ReactDOM.render(<Dropdown />, document.getElementById("root"));
export default Dropdown;
