import { combineReducers } from "redux";
import { reducer as formReducer  } from "redux-form";
import invoicReducer from './invoiceReducer'
import invoiceItems from './invoiceItemReducer'
export default combineReducers({
    invioces: invoicReducer,
    form: formReducer,
    invoiceItems: invoiceItems

});