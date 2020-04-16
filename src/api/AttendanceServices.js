import { fetchAPI } from '../services/ApiServices';

const ERROR_PREFIX = 'Api - UserServices - ';

export function getAttendanceList( callback ){
    try {
        fetchAPI('attendances/get/list', 'GET', {}, null, false, result => {
            if( result.success == true ){
                console.log( 'GET ATTENDANCE LIST SUCCESS ', result.success );
                callback( true, result.data );
            } else {
                console.log( 'GET ATTENDANCE LIST ERROR: ', result.message );
                callback( false, result.message );
            }
        });
    } catch (error) {
        console.log( ERROR_PREFIX + 'getAttendanceList', error.message );
    }
}