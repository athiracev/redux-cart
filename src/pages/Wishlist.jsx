import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

function Wishlist() {

  
  return (
    <>
      <Row>
        <Col sm={12} md={6} lg={4} xl={2}>
          <Card>
            <Card.Img src='https://www.bhphotovideo.com/images/images1000x1000/canon_3380c052_eos_rp_mirrorless_digital_1459303.jpg' alt='image' />
            <Card.Body>
              <Card.Title>Canon EOS RP</Card.Title>
              <Card.Text>82990</Card.Text>
            </Card.Body>
            <div className='d-flex justify-content-between'>
              <button className='btn border'> 
              <i className="fa-solid fa-cart-plus fa-lg" style={{ color: '#12e1fd' }} ></i>
              </button>
              <button className='btn border'>

              <i className="fa-solid fa-heart-circle-xmark"></i>
              </button>
            </div>
          </Card>


        </Col>
      </Row>



    </>
  )
}

export default Wishlist
