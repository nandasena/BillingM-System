import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import { connect } from "react-redux";

class ItemDetailsForm extends React.Component {


render() {
    console.log('retrun')
    console.log(this.props.invioces)
        return (

            <form  className="ui form" >
                <Field className="ui input" name="ItemNumber" component={this.renderInput}  label="ItemNumber" ></Field>
                <Field className="field" name="Name" component={this.renderInput}  label="Name"></Field>
                <Field className="field" name="Qty" component={this.renderInput} label="Qty"></Field>
                <Field className="field" name="Amount" component={this.renderInput} label="Amount"></Field>
            
            </form>
        );
}

renderInput = ({input,label,meta}) => {
   
    return(
        <div className="inline field">
            <label>{label}</label>
            <input {...input}></input>
        </div>
    );
}

}
const mapStateToProps =(state) => {
    return { 
        invioces: Object.values(state.invioces),
    };
}
export default connect(mapStateToProps,null)(ItemDetailsForm);
