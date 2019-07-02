import _ from 'lodash'
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_INVOICE ,
    FETCH_INVOICES,
    FETCH_INVOICE ,
    DELETE_INVOICE ,
    EDIT_INVOICE
} from  '../actions/types'


export default (state = {} ,action) => {
   switch (action.type) {
       case FETCH_INVOICES:
           return { ...state, ..._.mapKeys(action.payload,'id')};
        default:
            return state;
   } 
}