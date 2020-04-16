import { fetchAPI } from '../services/ApiServices';

const ERROR_PREFIX = 'Api - UserServices - ';

export function getFingerList( callback ){
    try {
        fetchAPI('fingers/get/list', 'GET', {}, null, false, result => {
            if( result.success == true ){
                console.log( 'GET FINGER LIST SUCCESS ', result.success );
                callback( true, result.data );
            } else {
                console.log( 'GET FINGER LIST ERROR: ', result.message );
                callback( false, result.message );
            }
        });
    } catch (error) {
        console.log( ERROR_PREFIX + 'getFingerList', error.message );
    }
}

export function deleteFingerbyId(id, callback ){
    try {
        fetchAPI('fingers/get/delete/' + id, 'GET', {}, null, false, result => {
            if( result.success == true ){
                console.log( 'DELETE FINGER LIST SUCCESS ', result.success );
                callback( true, result.message );
            } else {
                console.log( 'DELETE FINGER LIST ERROR: ', result.message );
                callback( false, result.message );
            }
        });
    } catch (error) {
        console.log( ERROR_PREFIX + 'getFingerList', error.message );
    }
}