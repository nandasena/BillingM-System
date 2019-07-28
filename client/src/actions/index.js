import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_INVOICE ,
    FETCH_INVOICES,
    FETCH_INVOICE ,
    DELETE_INVOICE ,
    EDIT_INVOICE,
    IS_INVOICE_CREATED,
    ADD_INVOICEITEMS 
} from './types'
import history from '../helpers/history'
import apiSource from '../baseApi/apiSource';

export const createInvoice =(fromValues) => {
    return (async (dispatch) => {
        const response =await apiSource.post('/invoices',{...fromValues});
        dispatch({type: CREATE_INVOICE,payload: response.data})
       // history.push('/');

       
    })
}

export const fetchInvoices = () => async dispatch => {
    const response =await apiSource.get('/invoices');
    dispatch({type: FETCH_INVOICES,payload: response.data});
}

export const createInvoiceItems =(fromValues) => {
    return (async (dispatch) => {
        const response =await apiSource.post('/InvoiceItem',{...fromValues});
        dispatch({type: ADD_INVOICEITEMS,payload: response.data})
       // history.push('/');

       
    })
}

