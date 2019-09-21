import _ from 'lodash';

import React from "react";
import { connect } from "react-redux";
import { createInvoiceItems } from '../../actions'
import ItemDetailsForm from './invoiceItemForm';
import  InvoiceItemGrid  from './itemGrid';
class RenderItemDetails extends React.Component {

    onSubmit = (formValues) => {

        console.log('ff');
        var savedformValues =_.merge(formValues,{invoiceId:this.props.invoiceId})
         console.log(savedformValues);
        this.props.createInvoiceItems(savedformValues);
    }

    
render() {
    console.log('items');
    console.log(this.props.invoiceItems);
        return (
            
       <div>
           <h4>Invoice Items</h4>
           <ItemDetailsForm onSubmit={this.onSubmit}></ItemDetailsForm>
           <InvoiceItemGrid invoiceitems = {this.props.invoiceItems}></InvoiceItemGrid>
       </div>

        );
}

}
 const mapStateToProps =(state) => {
    
    return { 
        invoiceItems: Object.values(state.invoiceItems),
     };
}


export default connect(mapStateToProps,{createInvoiceItems})(RenderItemDetails);
