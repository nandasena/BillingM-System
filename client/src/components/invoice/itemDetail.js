import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import { connect } from "react-redux";
import ItemDetailsForm from './invoiceItemForm';

class RenderItemDetails extends React.Component {


render() {
        return (
       <div>
           <h4>Invoice Items</h4>
           <ItemDetailsForm></ItemDetailsForm>
       </div>

        );
}

}
const mapStateToProps =(state) => {
    return { 
        invioces: Object.values(state.invioces),
    };
}
export default connect(mapStateToProps,null)(RenderItemDetails);
