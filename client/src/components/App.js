import React from 'react';
import { Router, Route,Switch } from 'react-router-dom';
import InvoiceList from './invoice/invoiceList'
import SideMenu from './Layout/sideMenu'
import Header from './Layout/Header'
import history  from "../helpers/history";
import Invoicecreate from './invoice/invoiceCreate'
import InvoiceEdit from "./invoice/invoiceEdit";

const App = () => {
    return (

        <div>
            <Router history={history}>
                <Header></Header>
                <div>
                    <Switch>
                        <Route path="/" exact component={InvoiceList}></Route>
                        <Route path="/invoice/new" exact  component={Invoicecreate}></Route>
                        <Route path="/invoice/edit/:id" exact component={InvoiceEdit}></Route>
                    </Switch>
                </div>
                {/* <SideMenu></SideMenu> */}
                {/* <InvoiceList></InvoiceList> */}
                {/* <Invoicecreate></Invoicecreate> */}
            </Router>
        </div>
    )
}

export default App;