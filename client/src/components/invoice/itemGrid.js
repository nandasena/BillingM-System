import React from 'react'
import { Table } from 'semantic-ui-react'
import { connect } from "react-redux";
import { deleteInvoiceItems,EditInvoiceItems } from '../../actions';

//import { getFormValues } from "redux-form";

class InvoiceItemGrid extends React.Component {

  renderTableBody(invoiceitems) {
    console.log('dddddd')
    console.log(this.props.invoiceitems)
    if(invoiceitems.length !== 0) {
      return(
          <Table.Body>
          {invoiceitems.map( (item ,key)=> {
                  return(
                    <Table.Row key={item.id}>
                      <Table.Cell>{item.ItemNumber}</Table.Cell>
                      <Table.Cell>{item.ItemName}</Table.Cell>
                      <Table.Cell>{item.Quantity}</Table.Cell>
                      <Table.Cell>{item.Amount}</Table.Cell>
                      <Table.Cell>{this.renderOptions(item.id)}</Table.Cell>
                  </Table.Row>
                );})
          }
      </Table.Body>
      );
    }
    else {
      return <Table.Body></Table.Body>;
    }
    

  }

  deleteItems =(key) => {
    debugger;
    this.props.deleteInvoiceItems(key);
  };

  renderOptions(key) {

    return(
      <div>
        <button className="ui button"><i className="edit icon"></i></button>
        <button className="ui button"><i className="trash icon" onClick ={() => this.deleteItems(key)}></i></button>
      </div>
    )

  }
  render() {

       return(

    <Table celled fixed singleLine>
     <Table.Header>
       <Table.Row>
         <Table.HeaderCell>ItemOn</Table.HeaderCell>
         <Table.HeaderCell>Name</Table.HeaderCell>
         <Table.HeaderCell>Qty</Table.HeaderCell>
         <Table.HeaderCell>Amount</Table.HeaderCell>
         <Table.HeaderCell></Table.HeaderCell>
       </Table.Row>
     </Table.Header>
        {this.renderTableBody(this.props.invoiceitems)}
    
   </Table>
   );

  }

}

const mapStateToProps =(state) => {
    return {
      invoiceItems: Object.values(state.invoiceItems),
    };
}
export default connect(mapStateToProps,{deleteInvoiceItems})(InvoiceItemGrid)
// export const InvoiceItemGrid = ({ values = { invoice: [] } }) => {


//   return(

//     <Table celled fixed singleLine>
//     <Table.Header>
//       <Table.Row>
//         <Table.HeaderCell>ItemOn</Table.HeaderCell>
//         <Table.HeaderCell>Name</Table.HeaderCell>
//         <Table.HeaderCell>Qty</Table.HeaderCell>
//         <Table.HeaderCell>Amount</Table.HeaderCell>
//       </Table.Row>
//     </Table.Header>

//     <Table.Body>
//         {values.invoice.map( item => {
//                 return(
//                   <Table.Row key={item.ItemNumber}>
//                     <Table.Cell>{item.ItemNumber}</Table.Cell>
//                     <Table.Cell>{item.ItemName}</Table.Cell>
//                     <Table.Cell>{item.Quantity}</Table.Cell>
//                     <Table.Cell>{item.Amount}</Table.Cell>
//                   </Table.Row>
//                 );})
//         }
//     </Table.Body>
//   </Table>
//   );



// }

/*const mapStateToProps= (state) => {
  return {
      invioces: Object.values(state.invioces)
  };
}*/

 //default  InvoiceItemGrid