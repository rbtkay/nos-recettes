import {
    Form,
    InputGroup,
    FormControl,
    Button,
    OverlayTrigger,
    Tooltip,
    Row,
    Col,
    ListGroup,
    Modal,
} from "react-bootstrap";
import { useState } from "react";
import AutoCompleteDropdown from "./AutoCompleteDropdown";

const RecetteForm = ({ addRecipie, ingredients }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState({});
    const [chosenIngredients, setChosenIngredients] = useState([]);
    const [stepCount, setStepCount] = useState(1);
    const [show, setShow] = useState(false);
    const [newIngredient, setNewIngredient] = useState({name: ""});

    const addStep = () => {
        setStepCount(stepCount + 1);
    };

    const removeStep = () => {
        if (stepCount <= 1) return;

        setStepCount(stepCount - 1);
    };
    const chooseIngredient = (chosenIngredient) => {
        if (
            chosenIngredients.some(
                (ingredient) => ingredient.name == chosenIngredient.name
            )
        )
            return;

        setChosenIngredients([...chosenIngredients, chosenIngredient]);
        console.log(chosenIngredient);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDescription((prevDescription) => ({
            ...prevDescription,
            [name]: value,
        }));
    };

    const renderToolTip = (props, type) => {
        if (type == "add") {
            return (
                <Tooltip id="button-tooltip" {...props}>
                    Add a step
                </Tooltip>
            );
        } else {
            return (
                <Tooltip id="button-tooltip" {...props}>
                    Remove a step
                </Tooltip>
            );
        }
    };

    // used to render the different steps dynamically
    const descriptionUI = [];
    for (let index = 0; index < stepCount; index++) {
        // description is holding the info of each step
        let name = `step-${index + 1}`;

        // description ui represent the step as a textarea
        descriptionUI.push(
            <Form.Group controlId="exapleForm.ControlTextarea1" key={index}>
                <Form.Label>Step {index + 1}</Form.Label>
                <Form.Control
                    as="textarea"
                    rows="5"
                    name={name}
                    onChange={(event) => handleChange(event)}
                />
            </Form.Group>
        );
    }

    const validate = async () => {
        const recipie = { title, description };
        addRecipie(recipie);
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addIngredientToDatabase = async () => {
        const param = {
            method: "POST",
            header: {
                Accept: "application/json",
                "Content-TYpe": "application/json",
            },
            body: JSON.stringify(newIngredient),
        };
        const response = await fetch(`/api/ingredient`, param);
        if(response.status == 200){
            const new_ingredient = await response.json();
            // TODO: ingredient need to be added to the list to chose from.
            setShow(false);
        }
    };

    return (
        <>
            <Form className="recipie-create-form">
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Your recipie title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </Form.Group>
                <br />
                <br />
                <Row>
                    <Col className="col-sm-4">
                        <h2>Ingredients</h2>
                        <ListGroup>
                            {chosenIngredients.length > 0 ? (
                                chosenIngredients.map((ingredient) => {
                                    return (
                                        <ListGroup.Item key={ingredient.id}>
                                            {ingredient.name}
                                        </ListGroup.Item>
                                    );
                                })
                            ) : (
                                <span>
                                    No ingredient specified for this recipie
                                </span>
                            )}
                        </ListGroup>
                        <AutoCompleteDropdown
                            ingredients={ingredients}
                            chooseIngredient={chooseIngredient}
                            openModal={handleShow}
                        />
                        {/* <AutocompleteDropdown /> */}
                    </Col>
                    <Col className="col-sm-8">
                        <Form.Group>
                            <h2 style={{ float: "left" }}>{stepCount} Steps</h2>
                            <h2 style={{ float: "right" }}>
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={(props) =>
                                        renderToolTip(props, "add")
                                    }
                                >
                                    <span
                                        className="btn btn-outline-primary"
                                        onClick={addStep}
                                    >
                                        +
                                    </span>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={(props) =>
                                        renderToolTip(props, "remove")
                                    }
                                >
                                    <span
                                        className="btn btn-outline-primary"
                                        onClick={removeStep}
                                    >
                                        --
                                    </span>
                                </OverlayTrigger>
                            </h2>
                        </Form.Group>

                        <br />
                        <br />
                        {descriptionUI}
                        <Button variant="success" onClick={validate}>
                            Valider la recette
                        </Button>
                    </Col>
                </Row>
            </Form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add your custom ingredient</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>
                        If an ingredient is not found in our database, you can
                        add it from here.
                    </p>
                    <Form.Control
                        type="text"
                        placeholder="Your custom ingredient"
                        value={newIngredient.name}
                        onChange={(event) =>
                            setNewIngredient({name: event.target.value})
                        }
                    />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button
                        variant="primary"
                        onClick={() => addIngredientToDatabase()}
                    >
                        Save ingredient
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default RecetteForm;
