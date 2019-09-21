import React from 'react'
import { connect } from "react-redux";
import { fetchInvoices } from "../../actions/index";
import { Link } from "react-router-dom";

class InvoiceList extends React.Component {

    
    componentDidMount() {
        this.props.fetchInvoices();
        
    }

    renderInvoiceList() {
        if (this.props.invioces === null) {
            return (
                <div className="ui segment">
                    <div className="ui active dimmer">
                        <div className="ui text loader">Loading</div>
                    </div>
                    <p></p>
                </div>
            )
        }
        else {
            
            console.log('sdfsdf'+this.props.invioces);
            return this.props.invioces.map(invoice => {

                
                if (this.props.invioces.length>1) {
                    return(
                        <tr className="" key={invoice.id}>
                            <td className="">{invoice.invoiceNumber}</td>
                            <td className="">{invoice.invoicDate}</td>
                            <td className="">{invoice.customerName}</td>
                            <td className="">{invoice.balanceAmount}</td>
                        </tr>
                    )   
                }
                else {
                   return( <p>no data</p>)
                }

            })
        }

    }

    renderCreate() {
       
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to="/invoice/new" className="ui button primary">Create Invoice</Link>
                </div>
            )
        
    }

    render() {
        console.log(this.props);
        return(
            <div>
                <h2>invioces</h2>
               
                <table className="ui single line table content">
                    <thead className="">
                        <tr className="">
                        <th className="">invoiceNumber</th>
                        <th className="">Order Date</th>
                        <th className="">Customer Name</th>
                        <th className="">Balance Amount</th>
                        </tr>
                    </thead>
                    <tbody className="">
                    {this.renderInvoiceList()}

                    </tbody>
                </table>
            {this.renderCreate()}
            </div>
        )

    }
}

const mapStateToProps= (state) => {
    return {
        invioces: Object.values(state.invioces)
    };
}

export default  connect(mapStateToProps,{fetchInvoices})(InvoiceList);