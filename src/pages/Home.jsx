import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductThunk, onNavigateNext, onNavigatePrev } from '../redux/slices/productSlice'
import { Spinner } from 'react-bootstrap';
import { addWishList } from '../redux/slices/wishlistSlice';
import { addCart } from '../redux/slices/cartSlice';


function Home() {


  const dispatch = useDispatch()
  const { product, loading, error, productsPerPage, currentPage } = useSelector((state) => state.productReducer)

  useEffect(() => {
    dispatch(fetchProductThunk())
  }, [])
  console.log(product)

  const totalPage = Math.ceil(product?.length / productsPerPage)  // if product = 30  total page will be 30/10 =3
  const indexOfLastElement = currentPage * productsPerPage
  const indexOfFirstElement = indexOfLastElement - productsPerPage
  const validPage = product?.slice(indexOfFirstElement, indexOfLastElement)

  console.log(validPage)

  const navigatePrev=()=>{

    if(currentPage!=1){
      dispatch(onNavigatePrev())
    }
  }
   const navigateNext=()=>{

    if(currentPage!=totalPage){
      dispatch(onNavigateNext())
    }
  }

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
           {!loading && error && 
           <div className='text-danger display-4'>{error}</div>
           }
           
            {loading ?  
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
             : !error&&
              validPage.map(item => (
                <div key={item.id} className="col mb-5">
                  <div className="card h-100">
                    <Link to={`/singleview/${item.id}`}>
                     
                      <img
                        className="d-block w-100"
                        src={item?.thumbnail}
                        alt='product image'
                        style={{ height: '200px' }}
                      />
                    
                    </Link>
                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">{item.title.slice(0, 10)}...</h5>
                        <p>Price: ${item.price}</p>
                        <div className="d-flex justify-content-between">
                          <button className="btn border" onClick={() => { dispatch(addWishList(item)) }}>
                            <i
                              className="fa-solid fa-heart-circle-plus fa-lg"
                              style={{ color: '#1a63e0' }}
                            ></i>
                          </button>
                          <button className="btn border" onClick={() => { dispatch(addCart(item)) }}>
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
}
          </div>

        </div>

        <div className='text-center'>
          <button className='btn' onClick={navigatePrev}><i class="fa-solid fa-arrow-left"></i></button>
          <span>{currentPage}/{totalPage}</span>
          <button className='btn' onClick={navigateNext}><i class="fa-solid fa-arrow-right"></i></button>
        </div>

      </section>

    </>
  )
}

export default Home
