import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { addWishList } from '../redux/slices/wishlistSlice';
import { addCart } from '../redux/slices/cartSlice';
import {useDispatch} from 'react-redux'



function SingleView() {

  const [data,setData]=useState([])
  const {id}=useParams()
  const dispatch= useDispatch()

  useEffect(()=>{
// console.log(id) get the id 
// console.log(JSON.parse(localStorage.getItem('response')).find(item=>item.id==id))
setData(JSON.parse(localStorage.getItem('response')).find(item=>item.id==id))
  },[])

  return (
    <>
      <div className='container p-5'>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <img src={data.thumbnail} alt="image" className='img-fluid' height={'400px'}   />
          </Col>
          <Col sm={12} md={6} lg={6} className='p-5'>
            <div className="mb-3">Product ID:{data?.id}</div>
            <div className="mb-3">Brand: {data?.brand}</div>
            <div className="mb-3">Category: {data?.category}</div>
            <div className="mb-1">{data?.title}</div>
            <div className="mb-2">
              <span>₹{data?.price}</span>
            </div>
            <p style={{ textAlign: 'justify' }}>{data.description}</p>
            <div className="d-flex justify-content-between" >
              <button className='btn btn-lg border'>
                <i className="fa-solid fa-heart-circle-plus fa-lg" style={{ color: '#1a63e0' }} onClick={()=>{dispatch(addWishList(data))}}></i>
              </button >
              <button className='btn btn-lg border' >
                <i className="fa-solid fa-cart-plus fa-lg" style={{ color: '#12e1fd' }} onClick={()=>{dispatch(addCart(data))}} ></i>
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default SingleView
