import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Animal from './Animal.js';
import { Animals } from '../api/animals.js';
import PetsTable from './PetsTable.js';

// App Component ~ this covers the whole application

class App extends Component {
  constructor(props){
    super(props);
  }
  getAnimals(){
    let animals = this.props.animals;
    return animals.map(animal => {
      return {
        petName: animal.Animal_Name,
        animal: animal.animal_type,
        breed: animal.Animal_Breed,
        gender: animal.Animal_Gender,
        color: animal.Animal_Color,
        address: animal.Address
      };
    });
  }

  renderAnimals(){
    let animals = this.props.animals;
    return animals.map((animal) => (
      <Animal key={animal._id} animal={animal} />
    ));
  }

  render(){
    console.log("Hello Dev Tools!");
    console.log(this.getAnimals());
    return (
      <div className="container">
        <header>
          <h1> Find a pet </h1>
        </header>
        <PetsTable />
      </div>
    );
  }
}

// Seperate from the App Component class, we are calling withTracker, giving it our Component.
export default withTracker(() => {
  return {
    animals: Animals.find({}).fetch(),
  };
})(App);
// We are giving App the props of our animals
// App re-renders when the database changes.
