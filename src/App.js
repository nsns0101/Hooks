import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component {
  state = {
    item: 0
  };

  incrementItem = () => {
    this.setState({
      item: this.state.item + 1
    });
  };
  decrementItem = () => {
    this.setState({
      item: this.state.item - 1
    });
  };

  render() {
    const { item } = this.state;
    console.log(item);
    return (
      <div className="App">
        <h2>Hello {item}</h2>
        <button onClick={this.incrementItem}>incrementItem</button>
        <button onClick={this.decrementItem}>decrementItem</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
