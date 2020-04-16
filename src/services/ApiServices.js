import MainConstants from '../components/MainConstants';

export function fetchAPI(url, method = 'GET', importHeaders, body, is_authenticated = false, callback = null) {
    initialize(importHeaders, is_authenticated, (headers) => {
        let currentUrl = MainConstants.MAIN_URL + url;
        
        console.log('FETCH URL: ', currentUrl);
        if (body) {
            fetch(currentUrl, {
                method: method,
                headers: headers,
                body: JSON.stringify(body),
            })
            .then((response) => {
                console.log('RESPONSE: ', response);
                return response.json();
            })
            .then((responseJson) => {
                if (callback) {
                    callback(responseJson);
                }
            })
            .catch((error) => {
                console.log('FETCH API: ', currentUrl);
                console.log('WITH BODY ERROR: ', error);
                errorHandle(error);
                callback({ success: false });
            });
        } else {
            fetch(currentUrl, {
                method: method,
                headers: headers,
            })
            .then((response) => {
                try {
                    return response.json();
                } catch (error) {
                    callback(response);
                }
            })
            .then((responseJson) => {
                if (callback) {
                    console.log('RESPONSE: ', responseJson);
                    callback(responseJson);
                }
            })
            .catch((error) => {
                console.log('FETCH API: ', currentUrl);
                console.log('WITHOUT BODY ERROR: ', error);
                errorHandle(error);
                callback({ success: false });
            });
        }
    });
}

export function initialize(headers, is_authenticated, callback) {
    try {
        headers.Accept = 'application/json';
        headers['Content-type'] = 'application/json';
        if (is_authenticated) {
            getToken((token) => {
                headers.Authorization = token;
                callback(headers);
            });
        } else {
            callback(headers);
        }
    } catch (error) {
        console.log("INITIALIZE ERROR: ", error);
        if (callback) {
            callback({ success: false });
        }
    }
}