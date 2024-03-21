import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

function SingleView() {
  return (
    <>
      <div className='container'>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <img src="https://www.bhphotovideo.com/images/images1000x1000/canon_3380c052_eos_rp_mirrorless_digital_1459303.jpg" alt="image" height={'400px'} />
          </Col>
          <Col sm={12} md={6} lg={6} className='p-5'>
            <div className="mb-3">Product ID:1</div>
            <div className="mb-1">Canon EOS RP </div>
            <div className="mb-2">
              <span>₹82,990</span>
            </div>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quisquam similique animi voluptatum corporis,
              quaerat labore ducimus sint quod molestias adipisci odio, ipsam atque molestiae!
              Dignissimos minima doloremque dolores laborum fuga debitis optio reprehenderit magni fugiat impedit harum, ea ipsa!</p>
            <div className="d-flex justify-content-between" >
              <button className='btn btn-lg border'>
                <i className="fa-solid fa-heart-circle-plus fa-lg" style={{ color: '#1a63e0' }}></i>
              </button >
              <button className='btn btn-lg border' >
                <i className="fa-solid fa-cart-plus fa-lg" style={{ color: '#12e1fd' }} ></i>
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default SingleView
