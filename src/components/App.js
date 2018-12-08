import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';


class App extends React.Component {

  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    console.log("Adding a fish 🐟");
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Shaun is cool" age={500} cool={true} />
        </div>
          <Order />
          <Inventory addFish={this.addFish}/>
      </div>
    );
  }
}

export default App;
