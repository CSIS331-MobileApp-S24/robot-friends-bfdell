import logo from "./logo.svg";
import "./App.css";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state={robots: robots, searchfield: ""};
  }

  onSearchChange = (event) =>  {
    this.setState({searchfield: event.target.value});
    console.log(this.state.searchfield);
  }

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    console.log(filteredRobots);
    return (
      <div className="tc">
        <h1>RobotFriends</h1>
        <SearchBox searchChange={this.onSearchChange}></SearchBox>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
