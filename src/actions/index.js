export function login(email, password) {
    return function (dispatch) {
        return fetch(`http://localhost:4200/api/users/${email}/${password}`)
            .then(res => res.json())
            .then(json => {
                dispatch({type: 'LOG_IN', payload: json})
            })
    }
};

