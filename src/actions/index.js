// pass email and password through URL for login authentication
export function login(email, password) {
    return function (dispatch) {
        return fetch(`http://localhost:4200/api/users/${email}/${password}`)
            .then(res => res.json())
            .then(json => {
                dispatch({type: 'LOG_IN', payload: json})
            })
    }
};


// In progress, pass first and last name, password and email (add a new user record)
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
    }
};