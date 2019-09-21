import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import { connect } from "react-redux";


class ItemDetailsForm extends React.Component {

    onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
    }

render() {
        return (
            <div className="inline form">
                <form  className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                    <Field className="ui input" name="ItemNumber" component={this.renderInput}  label="ItemNumber" ></Field>
                    <Field className="field" name="ItemName" component={this.renderInput}  label="Name"></Field>
                    <Field className="field" name="Quantity" component={this.renderInput} label="Qty"></Field>
                    <Field className="field" name="Amount" component={this.renderInput} label="Amount"></Field>
                    <button className="ui button primary">Add</button>
                </form>
               
            </div>

        );
}

renderInput = ({input,label,meta}) => {
   
    return(
        <div className="inline field">
            <label className="six wide field" >{label}</label>
            <input {...input}></input>
        </div>
    );
}

}
// const mapStateToProps =(state) => {
//     return { 
//         invioces: Object.values(state.invioces),
//     };
// }

export default reduxForm(
    {
        form:'InvoiceItemForm'//,
        //validate:validate
    }
)(ItemDetailsForm);

// export default connect(mapStateToProps,null)(ItemDetailsForm);
