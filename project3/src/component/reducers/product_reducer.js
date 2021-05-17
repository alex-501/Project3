export default function(state={}, action) {
    switch(action.type) {
        case 'GET_ALL_PRODUCT':
            return {...state, productlistdata:action.payload}
        case 'GET_PRODUCT_DETAIL':
            return {...state, productData:action.payload}
        default:
            return state;
    }
}