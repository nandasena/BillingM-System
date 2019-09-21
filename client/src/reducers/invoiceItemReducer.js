import _ from 'lodash';
import {
    ADD_INVOICEITEMS,
    EDIT_INVOICEITEMS,
    DELETE_INVOICEITEMS
} from  '../actions/types'

export default (state = {} ,action) => {
   
    switch (action.type) {
      
        case ADD_INVOICEITEMS:
           return {...state,[action.payload.id]: action.payload};
        case DELETE_INVOICEITEMS:
            debugger;
            return _.omit(state,action.payload);
        default:
            return state;
    }
}