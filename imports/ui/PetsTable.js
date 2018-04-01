import React, {Component} from 'react';

import ReactTable from "react-table";
import "react-table/react-table.css";
import { Animals } from "../api/animals.js";
import {App} from "./App"


// Animals data table

export class PetsTable extends Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.data);
    data = this.props.data;
    return(
      <ReactTable
      data={data}
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
