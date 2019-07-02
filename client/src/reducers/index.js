import { combineReducers } from "redux";
import invoicReducer from './invoiceReducer'
export default combineReducers({
    invioces: invoicReducer
});