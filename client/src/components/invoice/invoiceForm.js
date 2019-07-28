import React from 'react';
import { Field,FieldArray,reduxForm } from 'redux-form';
import InvoiceItemGrid from './itemGrid';
import RenderItemDetails from './itemDetail';
class InvoiceForm extends React.Component {

 
    onSubmit =(formValues) => {
        this.props.onSubmit(formValues);
    }


    renderInput = ({input,label,meta}) => {
        return(
            <div className="inline field">
                <label className="five wide field">{label}</label>
                <input {...input}></input>
            </div>
        );
    }
    renderItemDetailsForm(isInvoiceAdd) {
        
        if (isInvoiceAdd===true) {
            return(
            <RenderItemDetails></RenderItemDetails>
            )
        }
        else {
            return(
                <div>No data</div>
            )
        }
    }
    //const className=`field ${meta.error && meta.touched ? 'error':''}`;
    
    render() {
         
        const syleleft= {
            float:'left'
           
        };
        const syleright= {
            float:'right'
        };
        const wrap= {
            width:"600px"
        }
        return(
            <div className="inline form" style={wrap} >
                <div style={syleleft} > 
                    <form  className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    
                    <Field className="ui input" name="invoicNumber" component={this.renderInput}  label="InvoicNumber"></Field>
                    <Field className="field" name="address" component={this.renderInput}  label="Address"></Field>
                    <Field className="field" name="phoneNumber" component={this.renderInput} label="PhoneNumber"></Field>
                    <Field className="field" name="customerName" component={this.renderInput} label="Customer Name"></Field>
                    <Field className="field" name="comments" component={this.renderInput} label="Comments"></Field>
                    <button className="ui button primary">Add Invoice</button>
                    </form>
                </div>
                <div style={syleright}>
                    {this.renderItemDetailsForm(this.props.isAddInvoicItems.isInvoiceAdd)}
                </div>

                
  
            </div>


        )
    }
}

export default reduxForm(
    {
        form:'invoiceForm'
    }
)(InvoiceForm)


