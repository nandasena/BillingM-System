import _ from 'lodash';
import React from 'react'
import { connect } from "react-redux";
import { createInvoice } from "../../actions";
import InvoiceForm from "./invoiceForm";
class Invoicecreate extends React.Component {

 onSubmit =(formValues) => {
     console.log('ss');
     
     this.props.createInvoice(formValues)
     console.log(this.props);
 }

 render() {
    // console.log(this.props);
     return(
         <div>
             <InvoiceForm onSubmit={this.onSubmit} isAddInvoicItems={this.props.isInvoiceAdd} invoiceId={this.props.invoiceId} ></InvoiceForm>
         </div>
     )
 }
}
const mapStateToProps = (state) => {
    return { 
        isInvoiceAdd:state.invioces.isInvoiceAdd,
        invoiceId:state.invioces.invoiceId
    };
}

export default connect(mapStateToProps,{createInvoice})(Invoicecreate);