
const initialState = {
    account : {
        email: ''
    }
}


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOG_IN':
            return Object.assign({}, state, {
                account: action.payload
            });
        default:
            return state;
    }
};

export default rootReducer;