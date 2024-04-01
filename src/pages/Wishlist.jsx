import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import {  useSelector } from 'react-redux'

function Wishlist() {

  const  {wishlist} =useSelector((state)=>state.wishlistReducer)
  console.log(wishlist)

 

  
  return (
    <>
      <Row>
      {wishlist?.length>0?
      wishlist?.map(item=>(
        <Col sm={12} md={6} lg={4} xl={2}>
        <Card>
          <Card.Img src={item?.thumbnail} alt='image' />
          <Card.Body>
            <Card.Title>{item?.title}</Card.Title>
            <Card.Text>{item?.price}</Card.Text>
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
      ))
      
       :
      <h1>
        No wishlist items...
      </h1>
      }
      </Row>



    </>
  )
}

export default Wishlist
