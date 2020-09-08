import { HIDE_MODAL, SHOW_MODAL } from "../actions/modal";

const isModalShow = (state = false, action) => {
    switch (action.type) {
        case HIDE_MODAL:
            return false;
        case SHOW_MODAL:
            return true;
        default:
            return state;
    }
};

export default isModalShow;
