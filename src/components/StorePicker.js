import React from 'react';
import { getFunName } from '../helpers';


class StorePicker extends React.Component {

  myInput = React.createRef();

  goToStore = (event) => {
    // stop form from submitting
    event.preventDefault();

    // get text from Input
    const storeName = this.myInput.value.value;
    // console.log(this.myInput.value.value);

    // route to /store/whatever-input-they-entered
    this.props.history.push(`/store/${storeName}`);
  }

  render(){
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
