import { Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { useEffect } from "react";
import { setMessage, messageTypes } from "../actions/message";

const Message = ({ message, setMessage }) => {
    const { isOpen, variant, content } = message;
    
    useEffect(() => {
        let interval;
        if (isOpen) {
            interval = setInterval(() => {
                setMessage(messageTypes.default);
            }, 30000);
        }
        return () => clearInterval(interval);
    }, [message]);

    if (isOpen) return <Alert variant={variant}>{content}</Alert>;
    else return null;
};

const mapStateToProps = (state) => ({
    message: state.message,
});
const mapDispatchToProps = (dispatch) => ({
    setMessage: (message) => dispatch(setMessage(message))
});
export default connect(mapStateToProps, mapDispatchToProps)(Message);
