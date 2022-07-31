import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    numero: 0
  };

  adicionar = () => {
    if (this.state.numero < 10) {
      this.setState({
        numero: this.state.numero + 1
      });
    }
  };

  remover = () => {
    if (this.state.numero > 0) {
      this.setState({
        numero: this.state.numero - 1
      });
    }
  };

  render() {
    return (
      <div Class="cont">
        <h1>Contador</h1>
        <button onClick={this.remover}>-</button>
        <h2>{this.state.numero}</h2>
        <button onClick={this.adicionar}>+</button>
      </div>
    );
  }
}

export default App;
