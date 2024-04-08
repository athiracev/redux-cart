import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='d-flex justify-content-between bg-dark text-light p-5'>
        <div className="w-25">
          <h3> Redux Cart </h3>
          <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            quam consequatur! Magnam rerum accusamus accusantium assumenda
            dicta laboriosam quae facilis ex minima? Explicabo, sunt illo!</p>
        </div>
        <div className="w-25 text-center">
          <h3>Links</h3>
          <Link to={'/wishlist'} className='d-block mb-2 mt-3' style={{textDecoration:'none'}}>wishlist</Link>
          <Link to={'/cart'} style={{textDecoration:'none'}}>cart</Link>
        </div>
        <div className="w-25">
          <h3>References</h3>
          <a href="https://react.dev/"   target="_blank" className='d-block mt-3 mb-2' style={{textDecoration:'none'}}>React</a>
          <a href="https://react-redux.js.org/" target='_blank'  className='d-block mt-3 mb-2' style={{textDecoration:'none'}}>Redux</a>
          <a href="https://react-bootstrap.github.io/" target='_blank' style={{textDecoration:'none'}}>React Bootstrap</a>
        </div>
        <div className="w-25">
          <h3> Contact Us</h3>
          <p>Submit your email,so we can contact you...</p>
          <input type="text"  className='form-control' placeholder='name@gmail.com'/>
          <button className=' btn btn-outline-primary mt-3'>Submit</button>
        </div>

      </div>
      <h6 className='text-center '>ReduxCart 2024 &copy; All Right Reserved</h6>

    </>

  )
}

export default Footer
