import React, {Component} from 'react';

import ReactTable from "react-table";
import "react-table/react-table.css";

// Animals data table

export default class PetsTable extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     data: getAnimals()
  //   }
  // }
  render(){
    return(
      <ReactTable
      columns={[
      {
        Header: "Pet",
        columns: [
          {
            Header: "Pet Name",
            accessor: "petName"
          },
          {
            Header: "Animal",
            id: "animal",
            accessor: d => d.animal
          }
        ]
      },
      {
        Header: "Details",
        columns: [
          {
            Header: "Breed",
            accessor: "breed"
          },
          {
            Header: "Gender",
            accessor: "gender"
          },
          {
            Header: "Color",
            accessor: "color"
          },
          {
            Header: "Address",
            accessor: "address"
          }
        ]
      },
      {
        Header: 'Stats',
        columns: [
          {
            Header: "Visits",
            accessor: "visits"
          }
        ]
      }
    ]}
      className="-striped -highlight"/>
    );}
}
