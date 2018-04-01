import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Animal from './Animal.js';
import { Animals } from '../api/animals.js';
import PetsTable from './PetsTable.js';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

// App Component ~ this covers the whole application

class App extends Component {
  constructor(props){
    super(props);
  }
  getAnimals(){
    return [
      { _id: 1, text: 'Our first dog'},
      { _id: 2, text: 'A cat'},
      { _id: 3, text: 'Second dog'},
    ];
  }

  renderAnimals(){
    let animals = this.props.animals;
    return animals.map((animal) => (
      <Animal key={animal._id} animal={animal} />
    ));
  }

  // renderFirst(){
  //   var firstAnimal = Animals.findOne();
  //   return firstAnimal.animal_type;
  // }

  render(){
    console.log("Hello Dev Tools!");
    console.log(this.getAnimals);
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
