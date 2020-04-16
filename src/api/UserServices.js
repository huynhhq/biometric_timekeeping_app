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

export function getUserList(callback){
    try {
        fetchAPI('users/get/list', 'GET', {}, null, false, result => {
            if( result.success == true ){
                console.log( 'GET USER LIST SUCCESS: ', result.success );
                callback( true, result.data );
            } else {
                console.log( 'GET USER LIST ERROR: ', result.message );
                callback( false, result.message );
            }
        });
    } catch (error) {
        console.log( ERROR_PREFIX + 'getUserList', error.message );
    }
}

export function deleteUserById( id, callback){
    try {
        fetchAPI('users/get/delete/' + id, 'GET', {}, null, false, result => {
            if( result.success == true ){
                console.log( 'DELETE NEW USER SUCCESS: ', result.success );
                callback( true, result.message );
            } else {
                console.log( 'DELETE NEW USER ERROR: ', result.message );
                callback( false, result.message );
            }
        });
    } catch (error) {
        console.log( ERROR_PREFIX + 'deleteUser', error.message );
    }
}
