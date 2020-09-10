import { Modal, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { hideModal } from "../actions/modal";
import { useState } from "react";
import { addIngredient } from "../actions/ingredients";
import { setMessage, messageTypes } from "../actions/message";

const CustomModal = ({
    isModalShow,
    hideModal,
    addIngredient,
    addIngredientToDatabase,
    setMessage,
}) => {
    // the new ingredient that is going to be added
    const [ingredient, setIngredient] = useState("");

    const press = () => {
        addIngredientToDatabase(ingredient)
            .then((new_ingredient) => {
                // if the the ingredient is correctly inserted
                if (new_ingredient) {
                    // add ingredient to store to update the list of available ingredients
                    addIngredient(new_ingredient);

                    // set the user's message
                    setMessage(messageTypes.success_ingredient);

                } else setMessage(messageTypes.error_ingredient);

                // close the modal
                hideModal();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Modal show={isModalShow} onHide={hideModal}>
            <Modal.Header closeButton>
                <Modal.Title>Add your custom ingredient</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>
                    If an ingredient is not found in our database, you can add
                    it from here.
                </p>
                <Form.Control
                    type="text"
                    placeholder="Your custom ingredient"
                    value={ingredient}
                    onChange={(event) => setIngredient(event.target.value)}
                />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={hideModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={press}>
                    Save ingredient
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

import { addIngredientToDatabase } from "../fetchers/recipiesFetcher";

const mapStateToProps = (state) => ({
    isModalShow: state.isModalShow,
});
const mapDispatchToProps = (dispatch) => ({
    hideModal: () => dispatch(hideModal()),
    showModal: () => dispatch(showModal()),
    addIngredient: (ingredient) => dispatch(addIngredient(ingredient)),
    addIngredientToDatabase: (ingredient) =>
        addIngredientToDatabase(ingredient),
    setMessage: (message) => dispatch(setMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomModal);
