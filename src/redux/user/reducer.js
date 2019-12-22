import constant from './const';

const intialState = {
    showLogCall: false
}

const userReducer = (state = intialState, action) => {
    switch (action.type) {
        case constant.showLogCall:
            return {
                ...state,
                showLogCall: action.payload
            }
        
        default: 
            return state;
    }
}

export default userReducer;