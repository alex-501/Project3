export default function(state={},action){
    
        switch(action.type){
            case 'GET_ARTISTS':
                return {...state,artistList:action.payload}
            case 'GET_ARTISTS_ALL':
                return {...state,artistList:action.payload}
            case 'GET_ARTISTS_DETAIL':
                return {...state,artistData:action.payload}
            case 'CLEAR_PRODUCT_DETAIL':
                return {...state,artistData:action.payload}
            case 'GET_ALL_POST':
                return {...state, postData:action.payload} 
            default:
                return state;
        }
    
    }