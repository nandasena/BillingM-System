import React from 'react'
import { Table } from 'semantic-ui-react'
import { connect } from "react-redux";
//import { getFormValues } from "redux-form";

const InvoiceItemGrid = ({ values = { invoice: [] } }) => {

  return(
    <Table celled fixed singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ItemOn</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Qty</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {values.invoice.map( item => {
                return(
                  <Table.Row key={item.id}>
                    <Table.Cell>{item.id}</Table.Cell>
                    <Table.Cell>{item.Name}</Table.Cell>
                    <Table.Cell>{item.Quantity}</Table.Cell>
                    <Table.Cell>{item.Amount}</Table.Cell>
                  </Table.Row>
                );})
        }
    </Table.Body>
  </Table>
  );



}

const mapStateToProps= (state) => {
  return {
      invioces: Object.values(state.invioces)
  };
}

export default (InvoiceItemGrid)