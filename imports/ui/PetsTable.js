import React, {Component} from 'react';

import ReactTable from "react-table";
import "react-table/react-table.css";

// Animals data table

export default class PetsTable extends Component {
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
            Header: "Location",
            accessor: "location"
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
