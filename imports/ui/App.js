import React, { Component } from 'react';
import Animal from './Animal.js';

// App Component ~ this covers the whole application

export default class App extends Component {
  getAnimals(){
    return [
      { _id: 1, text: 'Our first dog'},
      { _id: 2, text: 'A cat'},
      { _id: 3, text: 'Second dog'},
    ];
  }

  renderAnimals(){
    return this.getAnimals().map((animal) => (
      <Animal key={animal._id} animal={animal} />
    ));
  }

  render(){
    return (
      <div className="container">
        <header>
          <h1> Find a pet </h1>
        </header>
        <ul>
          {this.renderAnimals()}
        </ul>
      </div>
    );
  }
}
