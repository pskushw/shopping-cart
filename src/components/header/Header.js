import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  const { countCartItems } = props;
  return (
    // <header className='row card center'>
    //   <Link to="/">Shopping</Link>
    //   <div>
    //     <Link to="/cart">Sign</Link>
    //     <Link to="/cart"><button className='badge'>2</button></Link>
    //   </div>
    // </header>
    <nav className="nav-wrapper">
      <div className="container">
        <Link to="/" className="brand-logo">
          My Shop
        </Link>
        <ul className="right">
          <li>
            <Link to="/cart">My cart</Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="material-icons">shopping_cart</i>
              {countCartItems ? (
                        <button className='badge'>{countCartItems}</button>
                    ):('')}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
