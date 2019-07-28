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
            return this.props.invioces.map(invoice => {
                return(
                   
                        <tr class="" key={invoice.id}>
                            <td class="">{invoice.invoiceNumber}</td>
                            <td class="">September 14, 2013</td>
                            <td class="">{invoice.customerName}</td>
                            <td class="">{invoice.balanceAmount}</td>
                        </tr>
                    )
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
               
                <table class="ui single line table content">
                    <thead class="">
                        <tr class="">
                        <th class="">invoiceNumber</th>
                        <th class="">Order Date</th>
                        <th class="">Customer Name</th>
                        <th class="">Balance Amount</th>
                        </tr>
                    </thead>
                    <tbody class="">
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