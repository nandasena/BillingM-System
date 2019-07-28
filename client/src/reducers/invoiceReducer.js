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

const INTIAL_STATE = {
    isInvoiceAdd:{isInvoiceAdd:false}
}

export default (state = {...INTIAL_STATE} ,action) => {
   switch (action.type) {
       case FETCH_INVOICES:
           return { ...state, ..._.mapKeys(action.payload,'id')};
       case CREATE_INVOICE:
           return{...state,isInvoiceAdd:{isInvoiceAdd:true},[action.payload.id]: action.payload};
        default:
            return state;
   } 
}