import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector, useDispatch } from 'react-redux';
import { searchProduct } from '../redux/slices/productSlice'

function Header() {

  const { wishlist } = useSelector((state) => state.wishlistReducer)
  // console.log(wishlist)
  const cart = useSelector((state) => state.cartReducer)
  // console.log(cart)
  const dispatch = useDispatch()


  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand >
            <Link to={'/'} className='text-decoration-none text-dark'>
            <i className="fa-solid fa-cart-shopping" style={{ color: '#000000' }}></i>
            ReduxCart
          </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className='btn  me-3'>
                
                <input type="text" className='form-control' onChange={(e) => { dispatch(searchProduct(e.target.value.toLowerCase())) }} placeholder='search product...' />
              </Nav.Link>
              <Nav.Link className='btn border border-dark me-3' style={{ color: 'black' }}>
                <Link to={'/wishlist'} style={{ textDecoration: 'none' }}>
                  <i className="fa-solid fa-heart me-2" style={{ color: '#df2020' }}></i>
                  Wishlist
                  <Badge className='ms-2' bg="primary">{wishlist?.length}</Badge>
                </Link>

              </Nav.Link>
              <Nav.Link className='btn border border-dark' style={{ color: 'black' }}>
                <Link to={'/cart'} style={{ textDecoration: 'none' }}>
                  <i className="fa-solid fa-cart-shoppingme-2 " style={{ color: '#e7820d' }}></i>
                  Cart
                  <Badge className='ms-2' bg="primary">{cart?.length}</Badge>

                </Link>
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
