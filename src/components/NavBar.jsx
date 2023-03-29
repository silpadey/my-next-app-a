import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

function NavBarComp() {
    return (
        <Navbar variant="dark" expand='lg'>
            <Container>
                <Link href="/">
                    <Navbar.Brand className='branding'>Home</Navbar.Brand>
                </Link>
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Link href="/about">
                            <Navbar.Brand>About</Navbar.Brand>
                        </Link>
                        <Link href="/user">
                            <Navbar.Brand>User</Navbar.Brand>
                        </Link>
                        <Link href="/product">
                            <Navbar.Brand>ProductPage</Navbar.Brand>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarComp;
