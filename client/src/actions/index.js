import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_INVOICE ,
    FETCH_INVOICES,
    FETCH_INVOICE ,
    DELETE_INVOICE ,
    EDIT_INVOICE,
    IS_INVOICE_CREATED,
    ADD_INVOICEITEMS,
    EDIT_INVOICEITEMS,
    DELETE_INVOICEITEMS 
} from './types'
import history from '../helpers/history'
import apiSource from '../baseApi/apiSource';

export const createInvoice =(fromValues) => {
    return (async (dispatch) => {
        debugger;
        const response =await apiSource.post('/invoices',{...fromValues});

        dispatch({type: CREATE_INVOICE,payload: response.data})
       // history.push('/');

       
    })
}

export const fetchInvoices = () => async dispatch => {
    const response =await apiSource.get('/invoices');
    dispatch({type: FETCH_INVOICES,payload: response.data});
}

export const createInvoiceItems =(formValues,canProceed = true) => {
    return (async (dispatch) => {

        if (canProceed) {
           
            const  response =await apiSource.post('/InvoiceItem',{...formValues});
            dispatch({type: ADD_INVOICEITEMS,payload: response.data})
           
        }else {
            
        dispatch({type: ADD_INVOICEITEMS,payload: [formValues]})

        }
       // history.push('/');

       
    })
}

export const EditInvoiceItems =(id,formValues,canProceed = false) => {
    return (async (dispatch) => {

        if (canProceed) {

            const response =await apiSource.patch(`/InvoiceItem/${id}`,formValues);
            dispatch({type: EDIT_INVOICEITEMS,payload: response.data})
        }else {
        dispatch({type: EDIT_INVOICEITEMS,payload: formValues})

        }
       // history.push('/');

       
    })
}

export const deleteInvoiceItems = (id) => async dispatch => {

   // await apiSource.delete(`/InvoiceItem/${id}`);
    dispatch({ type: DELETE_INVOICEITEMS, payload: id});
}
