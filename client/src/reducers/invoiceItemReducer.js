import {
    ADD_INVOICEITEMS
} from  '../actions/types'

export default (state = {} ,action) => {

    switch (action.type) {
        case ADD_INVOICEITEMS:
           return {...state,[action.payload.id]: action.payload};
        default:
            return state;
    }
}