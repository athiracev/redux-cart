import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromcart, emptyCart, incQuantity, decQuantity } from '../redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'

function Cart() {

  const cart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  console.log(cart)
  const navigate = useNavigate()


  const handleCheckout = () => {
    dispatch(emptyCart())
    alert('Items Checked Out')
    navigate('/')
  }


  const handleDecrease=(product)=>{
    if(product.quantity==1){
      dispatch(removeFromcart(product?.id))

    }else{
      dispatch(decQuantity(product?.id))
    }
  }
  

  return (
    <>
      <div className='container p-5'>
        <Row>

          <Col sm={12} md={8}>
            <h1>Cart Summary</h1>

            {cart?.length > 0 ?
              <table className='table  table-bordered shadow '>
                <thead >
                  <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Product Image</th >
                    <th>Product Price</th>
                    <th>Quantity</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart?.map(item => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item?.title}</td>
                      <td><img height={'180px'} src={item?.thumbnail} alt="product image" /></td>
                      <td>{item?.price}</td>
                      {/* <td>{item?.quantity}</td> */}
                      <td> <button className='btn' onClick={() => { dispatch(incQuantity(item?.id)) }}>+</button>
                        <input type="text" value={item?.quantity} className='form-control' />
                        <button className='btn' onClick={()=>{handleDecrease(item)}}>-</button></td>
                      <td>
                        <button className='btn' onClick={() => { dispatch(removeFromcart(item?.id)) }}>
                          <i className="fa-solid fa-trash" size="xl" style={{ color: "#f41010", }} />

                        </button>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table> :
              <h2 className='text-center text-danger'>Empty cart...</h2>
            }


          </Col>


          <Col sm={12} md={4}>

            <div className='border shadow p-5 mt-5'>
              <h3>Total products: <span className='text-info'>{cart?.length}</span></h3>

              <h4>Total Amount: <span className='text-warning'>{
                cart?.length > 0 ?
                  cart?.map(item =>
                    item?.quantity * item?.price).reduce((total, item) => total + item)
                  : 0
              }
              </span></h4>
            </div>

            <div className='d-grid mt-5'>
              <button className='btn btn-block btn-success' onClick={handleCheckout}>CheckOut</button></div>

          </Col>
        </Row>
      </div>
    </>
  )
}

export default Cart
