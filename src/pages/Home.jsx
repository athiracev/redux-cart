import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductThunk } from '../redux/slices/productSlice'
import Carousel from 'react-bootstrap/Carousel';
import { Spinner } from 'react-bootstrap';

function Home() {


  const dispatch = useDispatch()
  const { product, loading, error } = useSelector((state) => state.productReducer)

  useEffect(() => {
    dispatch(fetchProductThunk())
  }, [])
  console.log(product)

  return (

    <>



      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Redux Cart</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
          </div>
        </div>
      </header>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {loading ? (
              <div className="d-flex align-items-center justify-content-center w-100">
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                <div className="ms-2">
                  <h2>Loading....</h2>
                </div>
              </div>
            ) : (
              product.map(item => (
                <div key={item.id} className="col mb-5">
                  <div className="card h-100">
                    <Link to={`/singleview/${item.id}`}>
                      <Carousel>
                        {item.images.map((image, index) => (
                          <Carousel.Item key={index}>
                            <img
                              className="d-block w-100"
                              src={image}
                              alt={`Product Slide ${index + 1}`}
                              style={{ height: '200px' }}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>
                    </Link>
                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">{item.title}</h5>
                        <p>Price: ${item.price}</p>
                        <div className="d-flex justify-content-between">
                          <button className="btn border">
                            <i
                              className="fa-solid fa-heart-circle-plus fa-lg"
                              style={{ color: '#1a63e0' }}
                            ></i>
                          </button>
                          <button className="btn border">
                            <i
                              className="fa-solid fa-cart-plus fa-lg"
                              style={{ color: '#12e1fd' }}
                            ></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </section>

    </>
  )
}

export default Home
