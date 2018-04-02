import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import MediaQuery from 'react-responsive';

import { Animals } from '../api/animals.js';
import {PetsTable} from './PetsTable.js';
import getAnimals from "./Tools";

// App Component ~ this covers the whole application

export class App extends Component {
  constructor(props){
    super(props);
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
        <div>
        <div>Device Test!</div>
        <MediaQuery query="(min-device-width: 1224px)">
          <div>You are a desktop or laptop</div>
          <MediaQuery query="(min-device-width: 1824px)">
            <div>You also have a huge screen</div>
          </MediaQuery>
          <MediaQuery query="(max-width: 1224px)">
            <div>You are sized like a tablet or mobile phone though</div>
          </MediaQuery>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <div>You are a tablet or mobile phone</div>
        </MediaQuery>
        <MediaQuery query="(orientation: portrait)">
          <div>You are portrait</div>
        </MediaQuery>
        <MediaQuery query="(orientation: landscape)">
          <div>You are landscape</div>
        </MediaQuery>
        <MediaQuery query="(min-resolution: 2dppx)">
          <div>You are retina</div>
        </MediaQuery>
      </div>
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
