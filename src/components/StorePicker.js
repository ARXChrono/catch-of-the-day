import React from 'react';
import { getFunName } from '../helpers';


class StorePicker extends React.Component {

  // constructor(){
  //   super();
  //   // console.log("Gonna create a component");
  //   this.goToStore = this.goToStore.bind(this);
  // }

  myInput = React.createRef();

  // goToStore(event){
  goToStore = (event) => {
    // stop form from submitting
    event.preventDefault();
    // get text from Input

    console.log(this);
    // undefined needs binding on methods with constructor
    // alternatively instead of declaring a method on component, declare a property with an arrow function to bind this

    // route to /store/whatever-input-they-entered
  }


  componentDidMount(){
    // console.log("mounted!");
    // console.log(this);
  }

  render(){
    // console.log(this);
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
        ref={this.myInput}
        type="text"
        required placeholer="Store Name"
        defaultValue={getFunName()}/>
        <button type="submit"> Visit Store </button>
      </form>
    )
  }
}

export default StorePicker;
