import React from 'react'
import { connect } from "react-redux";
import { fetchInvoices } from "../../actions/index";

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
                        <div className="ui relaxed divided list" key={invoice.id}>
                            <div className="item">
                                <i className="large github middle aligned icon"></i>
                                <div className="content">
                                    <a className="header">{invoice.invoiceNumber}</a>
                                <div className="description">{invoice.balanceAmount}</div>
                                </div>
                            </div>
                        </div>
                    )
            })
        }

    }

    render() {
        console.log(this.props);
        return(
            <div>
                <h2>invioces</h2>
                {this.renderInvoiceList()}
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