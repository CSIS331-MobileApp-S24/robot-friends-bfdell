import logo from './logo.svg';
import './App.css';
import CardList from './CardList';
import { robots } from './robots'

function App() {
  return (
    <div className = "tc">
      <h1>RobotFriends</h1>
      <CardList robots={robots} />
    </div>
  );
}

export default App;
