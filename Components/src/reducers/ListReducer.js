import { UPDATE_LIST, LOADING_START, LOADING_END } from '../actions/types'

const INITIAL_STATE = {
    list: [],
    loader: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_LIST:
            const obj = action.payload;
            let arr = state.list.slice();
            arr.push(obj);

            return {
                ...state,
                list: arr,
            };

        case LOADING_START:

            return {
                ...state,
                loader: true,
            };

        case LOADING_END:

            return {
                ...state,
                loader: false,
            };

        default:
            return state;
    }
}