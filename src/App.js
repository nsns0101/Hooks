import React, { useState } from "react";

/* React */
// class App extends React.Component {
//   state = {
//     item: 0
//   };

//   incrementItem = () => {
//     this.setState({
//       item: this.state.item + 1
//     });
//   };
//   decrementItem = () => {
//     this.setState({
//       item: this.state.item - 1
//     });
//   };

//   render() {
//     const { item } = this.state;
//     console.log(item);
//     return (
//       <div className="App">
//         <h2>Hello {item}</h2>
//         <button onClick={this.incrementItem}>incrementItem</button>
//         <button onClick={this.decrementItem}>decrementItem</button>
//       </div>
//     );
//   }
// }

//React Hooks
const App2 = () => {
  const [item, setItem] = useState(0);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h2>Hello {item}</h2>
      <button onClick={incrementItem}>incrementItem</button>
      <button onClick={decrementItem}>decrementItem</button>
    </div>
  );
};

export default App2;
