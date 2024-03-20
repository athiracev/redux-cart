import React from 'react'

function Home() {
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
            <div className="col mb-5">
              <div className="card h-100">
                <img className="card-img-top" src="https://www.bhphotovideo.com/images/images1000x1000/canon_3380c052_eos_rp_mirrorless_digital_1459303.jpg" alt="..." />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Canon EOS RP </h5>
                    ₹82,990

                    <div className='d-flex justify-content-between'>
                      <button className='btn border'>
                        <i className="fa-solid fa-heart-circle-plus fa-lg" style={{ color: '#1a63e0' }}></i>
                      </button>
                      <button className='btn border'>

                        <i className="fa-solid fa-cart-plus fa-lg" style={{ color: '#12e1fd' }} ></i>
                      </button>

                    </div>
                  </div>
                </div>

              </div>
            </div>









          </div>
        </div>
      </section>

    </>
  )
}

export default Home
