import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Animal from './Animal.js';
import { Animals } from '../api/animals.js';
import {PetsTable} from './PetsTable.js';
import getAnimals from "./Tools";

// App Component ~ this covers the whole application

export class App extends Component {
  constructor(props){
    super(props);
  }


  renderAnimals(){
    let animals = this.props.animals;
    return animals.map((animal) => (
      <Animal key={animal._id} animal={animal} />
    ));
  }

  render(){
    console.log("Hello Dev Tools!");
    this.state = getAnimals(this.props.animals);
    let data = this.state
    return (
      <div className="container">
        <header>
          <h1> Find a pet </h1>
        </header>
        <PetsTable data={data}/>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    animals: Animals.find({}).fetch(),
  };
})(App);

// Seperate from the App Component class, we are calling withTracker, giving it our Component.
// We are giving App the props of our animals
// App re-renders when the database changes.
