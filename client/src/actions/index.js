import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_INVOICE ,
    FETCH_INVOICES,
    FETCH_INVOICE ,
    DELETE_INVOICE ,
    EDIT_INVOICE 
} from './types'
import apiSource from '../baseApi/apiSource';

export const createInvoice =(fromValues) => {
    return (async (dispatch) => {
        const response =await apiSource.post('/invoices',{...fromValues});
        dispatch({type: CREATE_INVOICE,payload: response.data})
    })
}

export const fetchInvoices = () => async dispatch => {
    const response =await apiSource.get('/invoices');
    dispatch({type: FETCH_INVOICES,payload: response.data});
}
