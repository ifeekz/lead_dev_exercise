import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Nav, Form, Navbar, Dropdown, Container, InputGroup } from 'react-bootstrap';

import { userService } from '../services';

export default () => {
  const [sellerId, setSellerId]: Array<any> = useState(null);
  const router = useRouter()

  useEffect(() => {
    if (!userService.userValue) {
      router.push('/login');
    }

    setSellerId(userService.userValue.seller_id)
  }, [router.isReady]);

  const logout = () => {
    userService.logout();
  }

  return (
    <Navbar bg="success" variant="success" expanded className="ps-3 pe-3 pb-0">
      <Container fluid className="px-0">
        <div className="d-flex justify-content-between w-100">
          <Navbar.Brand as={Link} href="/" className="h5 text-white font-bold">OList ECommerce</Navbar.Brand>
          {/* <div className="d-flex align-items-center">
            <Form className="navbar-search">
              <Form.Group id="topbarSearch">
                <InputGroup className="input-group-merge search-bar">
                  <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                  <Form.Control type="text" placeholder="Search" />
                </InputGroup>
              </Form.Group>
            </Form>
          </div> */}
          <Nav className="align-items-center">
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
                <div className="media d-flex align-items-center">
                  {/* <Image src={Profile3} className="user-avatar md-avatar rounded-circle" /> */}
                  <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                    <span className="mb-0 font-small fw-bold text-white">Seller ID: </span>
                    <span className="mb-0 font-small fw-bold text-white">{sellerId}</span>
                  </div>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
                <Dropdown.Item className="fw-bold" onClick={logout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};
