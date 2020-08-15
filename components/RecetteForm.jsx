import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { useState } from 'react';

const RecetteForm = ({ stepCount, addRecipie }) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState({});

    // used to render the different steps dynamically
    const descriptionUI = [];

    // hold the recipie step's informations
    const steps = [];

    console.log(description);


    const handleChange = event => {
        const {name, value} = event.target;
        setDescription(prevDescription => ({...prevDescription, [name]: value}))
    }


    for (let index = 0; index < stepCount; index++) {
        // description is holding the info of each step
        let name = `step-${index + 1}`

        // description ui represent the step as a textarea
        descriptionUI.push(
            <Form.Group controlId="exapleForm.ControlTextarea1" key={index}>
                <Form.Label>Step {index + 1}</Form.Label>
                <Form.Control as="textarea" rows="5" name={name} onChange={event => handleChange(event)} />
            </Form.Group>
        )
    }


    const validate = async () => {
        const recipie = { title, description };
        addRecipie(recipie);
    }

    return (
        <Form className="recipie-create-form">
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Ma recette" value={title} onChange={event => setTitle(event.target.value)} />
            </Form.Group>
            {descriptionUI}
            <Button variant="success" onClick={validate}>Valider la recette</Button>
        </Form>
    )
}

export default RecetteForm;