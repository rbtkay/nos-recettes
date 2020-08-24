import { Navbar, Nav } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/recipie">Our recipies</Nav.Link>
                <Nav.Link href="/recipie/create">Contribute</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default NavigationBar;
