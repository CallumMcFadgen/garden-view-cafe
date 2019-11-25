export function login(email, password) {
    return function (dispatch) {
        return fetch(`http://localhost:4200/api/users/${email}/${password}`)
            .then(res => res.json())
            .then(json => {
                dispatch({type: 'LOG_IN', payload: json})
            })
    }
};

export function register(firstName, lastName, password, email) {
    return function (dispatch) {
        return fetch(`http://localhost:4200/api/users`,
         {method:'post'},
         {headers: {'content-type' : 'application/json'}},
         {body: JSON.stringify ({
             "user_first_name": firstName,
             "user_last_name": lastName,
             "user_password": password,
             "user_email": email})
            })
            // .then (res => res.json())
            // .then(json => {
            //     dispatch({type: 'REGISTER', payload: json})
            // })
    }
};