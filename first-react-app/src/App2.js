import React from "react";

class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidUpdate() {
    setTimeout(
      () => console.log(`You clicked ${this.state.count} times`),
      3000
    );
  }

  render() {
    return (
      <>
        <p>You clicked {this.state.count} times</p>
        <button
          onClick={() =>
            this.setState((prev) => ({
              count: prev.count + 1,
            }))
          }
        >
          Click me
        </button>
      </>
    );
  }
}

export default App2;
