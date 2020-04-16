import { fetchAPI } from '../services/ApiServices';

const ERROR_PREFIX = 'Api - UserServices - ';

export function addUser( name, code, callback){
    try {
        fetchAPI('users/add/' + name + '/' + code, 'GET', {}, null, false, result => {
            if( result.success == true ){
                console.log( 'ADD NEW USER SUCCESS: ', result.success );
                callback( true, result.message );
            } else {
                console.log( 'GET NEW USER ERROR: ', result.message );
                callback( false, result.message );
            }
        });
    } catch (error) {
        console.log( ERROR_PREFIX + 'addUser', error.message );
    }
}