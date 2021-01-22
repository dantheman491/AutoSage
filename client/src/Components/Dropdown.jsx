import React from "react";
//import { Link } from "react";
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
        <form onSubmit={this.handleSubmit}>
          <label>Choose your budget to begin:</label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="2,000">2k</option>
            <option value="5,000">5k</option>
            <option value="10,000">10k</option>
            <option value="15,000">15k</option>
            <option value="20,000">20k</option>
          </select>
          <button>Submit</button>
        </form>
        {this.state.value && (
          <div className="carinfo">
            {this.state.filterCars.map((car) => {
              return (
                <div className="carlist">
                  <h3>{car.fields.carName} </h3>
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
