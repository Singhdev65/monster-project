import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFiled: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchFiled: e.target.value });
  };

  render() {
    const { monsters, searchFiled } = this.state;
    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFiled.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="Search Monster" onChange={this.handleChange} />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
