import React from 'react';
import { Router } from 'react-router-dom';
import InvoiceList from './invoice/invoiceList'
import SideMenu from './Layout/sideMenu'
import Header from './Layout/Header'
import history  from "../helpers/history";

const App = () => {
    return (

        <div>
            <Router history={history}>
                <Header></Header>
                <SideMenu></SideMenu>
                <InvoiceList></InvoiceList>
            </Router>
        </div>
    )
}

export default App;