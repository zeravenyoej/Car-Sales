import { SOME_ACTION } from '../actions/actions';

const initialState = {

};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SOME_ACTION:
            return {
                ...state,

            };
        default:
            return state;
    }
}

