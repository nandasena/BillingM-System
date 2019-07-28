import { combineReducers } from "redux";
import { reducer as formReducer  } from "redux-form";
import invoicReducer from './invoiceReducer'
export default combineReducers({
    invioces: invoicReducer,
    form: formReducer

});