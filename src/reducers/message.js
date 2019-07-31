import * as Message from './../contants/Message';
import * as types from './../contants/ActionTypes';



var initialState = Message.MSG_WELCOME;

const message = (state= initialState,action ) => {
        switch(action.type) {
            case types.CHANGE_MSG:
                return action.message;
            default: return state;
        }
}

export default message;