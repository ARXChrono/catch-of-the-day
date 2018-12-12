import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from "../base";


class App extends React.Component {

  state = {
    fishes: {},
    order: {}
  };

  componentDidMount(){
    // console.log("Mounted!");
    // sync with url from router
    const fishes = { ...this.state.fishes };
    // i shouldn't have to do this, not sure if its loading on mounted lifecycle.
    const { params } = this.props.match;
    console.log(`${params.storeId/fishes}`);

    this.ref = base.syncState(`${params.storeId/fishes}`, {
      context: this,
      state: 'fishes'
    });
  }

  componentWillUnmount(){
    // console.log("unmounted!");
    // base.removeBinding(this.ref);
  }

  addFish = fish => {

    // 1. take a copy of existing state
    const fishes = { ...this.state.fishes };

    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;

    // 3 . Set the new fishes object to state
    this.setState({
      fishes: fishes
    });

    // console.log("Adding a fish 🐟");
    // this.state.fishes.push(push);
  }

  loadSampleFishes = () => {
    // alert('loading samples!');
    this.setState({
      fishes: sampleFishes
    });
  }

  addToOrder = (key) => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. Either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1 ;
    // 3. Call SetState to update our state object
    this.setState({order});
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Shaun is cool" age={500} cool={true} />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key} // must pass key as prop a 2nd time to be used
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
          <Order fishes={this.state.fishes} order={this.state.order}/>
          <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
      </div>
    );
  }
}

export default App;
