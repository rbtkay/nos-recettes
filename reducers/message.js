import { SET_MESSAGE, messageTypes } from "../actions/message";

const message = (state = messageTypes.default, action) => {
    let newState;

    switch (action.type) {
        case SET_MESSAGE:
            const { message } = action;

            console.log("message in reducer", message);
            newState = message;
            return newState;
        default:
            return state;
    }
};

export default message;
