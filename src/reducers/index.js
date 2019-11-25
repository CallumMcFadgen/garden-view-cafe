// Initial for accounts (login) and for user (rego) 
const initialState = {
    account: {
        email: '', 
        password:''
    },
    user: {
        firstName: '',
        lastName: '',
        email: '', 
        password:''
    }
}


// Action switch statment (assigns payload )
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOG_IN':
            return Object.assign({}, state, {
                account: action.payload
            });
        case 'REGISTER':
            return Object.assign({}, state, {
                user: action.payload
            });
        default:
            return state;
    }
};


export default rootReducer;