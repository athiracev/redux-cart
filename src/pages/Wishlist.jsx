import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import {  useDispatch, useSelector } from 'react-redux'
import { removeFromwishList } from '../redux/slices/wishlistSlice'
import { addCart } from '../redux/slices/cartSlice'

function Wishlist() {

  const  {wishlist} =useSelector((state)=>state.wishlistReducer)
  console.log(wishlist)

 const dispatch=useDispatch()


 const handleAddCart=(product)=>{
  dispatch(addCart(product))
  dispatch(removeFromwishList(product.id))
 }

  
  return (
    <>
      <div className='container p-5'>
      <Row>
      {wishlist?.length>0?
      wishlist?.map(item=>(
        <Col sm={12} md={6} lg={4} xl={2}>
        <Card>
          <Card.Img src={item?.thumbnail} height={'180px'} alt='image' variant={'cart img-top'} />
          <Card.Body>
            <Card.Title>{item?.title}</Card.Title>
            <Card.Text>{item?.price}</Card.Text>
          <div className='d-flex justify-content-between'>
            <button className='btn border' onClick={()=>handleAddCart(item)}> 
            <i className="fa-solid fa-cart-plus fa-lg"  style={{ color: '#12e1fd' }} ></i>
            </button>
            <button className='btn border'  onClick={()=>{dispatch(removeFromwishList(item?.id))}}>

            <i className="fa-solid fa-heart-circle-xmark"></i>
            </button>
          </div>
          </Card.Body>

        </Card>
      </Col>
      ))
      
       :
      <h1>
        No wishlist items...
      </h1>
      }
      </Row>
      </div>



    </>
  )
}

export default Wishlist
