import React from 'react'
import { Row, Col } from 'react-bootstrap'

function Cart() {
  return (
    <>
    <div className='container p-5'>
    <Row>
        <Col sm={12} md={8}>
          <h1>Cart Summary</h1>
          <table className='table  table-bordered shadow '>
            <thead >
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Product Image</th >
              <th>Product Price</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Canon EOS RP</td>
                <td><img height={'180px'} src="https://www.bhphotovideo.com/images/images1000x1000/canon_3380c052_eos_rp_mirrorless_digital_1459303.jpg" alt="" /></td>
                <td>82900</td>
                <td><i className="fa-solid fa-trash" size="xl" style={{color: "#f41010",}} /></td>
              </tr>
            </tbody>
          </table>
        </Col>
        <Col sm={12} md={4}>

          <div className='border shadow p-5 mt-5'>
            <h3>Total products: <span className='text-info'>1</span></h3>
            <h4>Total Amount: <span className='text-warning'>82990</span></h4>

          </div>

        </Col>
      </Row>
    </div>
      </>
  )
}

export default Cart
