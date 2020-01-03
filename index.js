import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

let nombre = "Uriel";

function A(){
  return <p>Hola {nombre} </p>;
}
function B(){
  return <p>{nombre}: 10</p>;
}
class MiComponenteDeClase extend Component{
  render(){
    return <p>Hola soy de clase </p>
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <A />
        <B />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
