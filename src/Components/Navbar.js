import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";

const Navbar = () => {

  const storeData = useSelector((state)=> state.cart.cartData)

  const totalItems = ()=>{
    let total = 0
    storeData?.forEach(element => {
      total += element.quantity
    });
    return total;
  }

  return (
    <div className="header">
      <nav>
        <h2>
          <Link className="links" to="/">
            ReduxStore
          </Link>
        </h2>
        <ul>
          <span>{totalItems() || 0}</span>
          <Link className="links" to="cart">
            <ShoppingCartIcon  fontSize="large"/>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
