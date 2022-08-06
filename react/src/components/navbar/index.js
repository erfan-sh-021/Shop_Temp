import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../cart/cart-icon'
import  Search  from './search'

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to='/'>
        <span className="navbar-brand" >shoping</span>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

          </ul>
          <Link to='/cart'>
            <div className='mr-3'>
              <CartIcon />
            </div>
          </Link>
          <Search/>
        </div>
      </nav>
    )
  }
}
