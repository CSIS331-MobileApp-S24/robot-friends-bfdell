import logo from "./logo.svg";
import "./App.css";
import CardList from "./CardList";
import { robots } from "./robots";
import Scroll from "./Scroll";
import SearchBox from "./SearchBox";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { robots: robots, searchfield: "" };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    console.log(this.state.searchfield);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      }).then((users) => {
        console.log({ users });
        this.setState({ robots: users });
      });
  }

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    console.log(filteredRobots);
    return (
      <div className="tc">
        <h1 className="f1">Robot Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={robots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
