import React from 'react'
import { connect } from "react-redux";
import { createInvoice } from "../../actions";
import InvoiceForm from "./invoiceForm";
import {  } from "./invoiceItemForm";
class Invoicecreate extends React.Component {

 onSubmit =(formValues) => {
     this.props.createInvoice(formValues)
 }

 render() {
    // console.log(this.props);
     return(
         <div>
             <InvoiceForm onSubmit={this.onSubmit} isAddInvoicItems={this.props.isInvoiceAdd}></InvoiceForm>
         </div>
     )
 }
}
const mapStateToProps = (state) => {
    return { isInvoiceAdd:state.invioces.isInvoiceAdd };
}

export default connect(mapStateToProps,{createInvoice})(Invoicecreate);