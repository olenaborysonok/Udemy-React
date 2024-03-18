import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: 'Linda001',
        },
        {
          name: 'Frank',
          id: 'Frank001',
        },
        {
          name: 'Jacky',
          id: 'Jacky001',
        },
        {
          name: 'Andrei',
          id: 'Andrei001',
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
