import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

function NavBarComp() {
    return (
        <Navbar className='navbar-unauthorized' variant="dark" expand='lg'>
            <Container>
                <Link href="/">
                    <Navbar.Brand className='branding'>Home</Navbar.Brand>
                </Link>
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Link href="/allmovies">
                            <Navbar.Brand>All Movies</Navbar.Brand>
                        </Link>
                        <a href="https://in.linkedin.com/in/silpa-dey-6b9119198" target={'_blank'} rel="noopener noreferrer">
                            <Navbar.Brand>About</Navbar.Brand>
                        </a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarComp;
