import React from 'react'

import Product from '../components/products/Product'

const ProductList = () => {
    const products = ['Product 1', 'Product2','Product3']
    const productList = products.map(product => <Product />)

    return (
    <div className = "container">
    <div className = "row">
       <Product /> 
      <div className="col-md-12 mb-2">
        <div className="row">
          <div className="card-deck">

            <div className="col-md-4 col-sm-6 col-xs-12 mb-4">
              <div className="card">
                <img className="card-img-top img-fluid" src="http://placehold.com/140x100" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">
                    <span className="badge badge-pill badge-purple float-right">$99.99</span>
                    <a href="detail-page.html">Name 1</a>
                  </h5>
                  <p className="card-text">
                      Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12 mb-4">
              <div className="card">
                <img className="card-img-top img-fluid" src="http://placehold.com/140x100" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">
                    <span className="badge badge-pill badge-purple float-right">$57.99</span>
                    <a href="detail-page.html">Name 2</a>
                  </h5>
                  <p className="card-text">
                      Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12 mb-4">
              <div className="card">
                <img className="card-img-top img-fluid" src="http://placehold.com/140x100" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">
                    <span className="badge badge-pill badge-purple float-right">$38.99</span>
                    <a href="detail-page.html">Name 3</a>
                  </h5>
                  <p className="card-text">
                      Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div> 
  </div> 
    )
    
}


export default ProductList