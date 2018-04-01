import React, { Component } from 'react';

// Animal Component ~ An animal in the catalogue

export default class Animal extends Component {
  render() {
    return (
      <li>{this.props.animal.Animal_Name}</li>
    );
  }
}
