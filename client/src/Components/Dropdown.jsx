import React from "react";
import { Link } from "react";
class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "car price" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // <Link to="./carCard"></Link>;

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose your budget to begin:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="2,000">2k</option>
            <option value="5,000">5k</option>
            <option value="10,000">10k</option>
            <option value="15,000">15k</option>
            <option value="20,000">20k</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    );
  }
}
//ReactDOM.render(<Dropdown />, document.getElementById("root"));
export default Dropdown;
