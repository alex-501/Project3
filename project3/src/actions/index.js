import axios from 'axios';
const URL = 'http://localhost:3004';


export function artistList(keywords){
    const request = axios.get(`${URL}/artists?q=${keywords}`)
                    .then(response => response.data)
    return {
        type: 'GET_ARTISTS',
        payload: request
    }
}


export function artistListAll(){
    const request = axios.get(`${URL}/artists?_limit=6`)
                    .then(response => response.data)

    return {
        type: 'GET_ARTISTS_ALL',
        payload: request   
    }
}

export function artistDetail(id){
    const request = axios.get(`${URL}/artists?id=${id}`)
                    .then(response => response.data)

    return {
        type: 'GET_ARTISTS_DETAIL',
        payload: request   
    }
}

export function postList(){
    const request  = axios.get(`http://localhost/react-ecommerce/reactPress/wp-json/wp/v2/posts`)
                        .then( response => response.data)
                        
    return {
        type: 'GET_ALL_POST',
        payload: request
    }
}


export function clearProductDetail(){
    return{
        type:'CLEAR_PRODUCT_DETAIL',
        payload:null
    }
}

// action function to fetch all products from PRODUCTS(woocommerce specific)
export function productList() {
    var url =`https://localhost/react-ecommerce/reactPress/wp-json/wc/v2/products`;
    var username = 'ck_5bf3a9af0db119312fa463bd6eae82f9f07835ba';
    var pswrd= 'cs_bb0658ac9ac9a9a98db6fb2cbc0c9635f4adc345';
    const request =axios.get(url,{
        auth: {
            username: username,
            password: pswrd
        }
    })
    .then(response=>response.data)

    return{
        type:'GET_ALL_PRODUCT',
        payload:request
    }
}

export function productDetails(id){
    var url =`https://localhost/react-ecommerce/reactPress/wp-json/wc/v2/products/${id}`;
    var username = 'ck_5bf3a9af0db119312fa463bd6eae82f9f07835ba';
    var pswrd= 'cs_bb0658ac9ac9a9a98db6fb2cbc0c9635f4adc345';
    const request =axios.get(url,{
        auth: {
            username: username,
            password: pswrd
        }
    })
    .then( response => response.data)
    
    return{
        type:'GET_PRODUCT_DETAIL',
        payload: request
    }
    
}