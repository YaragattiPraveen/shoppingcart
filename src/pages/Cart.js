import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeItem,addQuantity,decreaseQuantity } from "../Redux/Features/CartSlice";


const Cart = () => {
  const storeData = useSelector((state) => state.cart.cartData);

  const dispatch = useDispatch()

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0
    storeData?.forEach((element) => {
      totalQuantity += element.quantity;
      totalPrice += element.price * element.quantity
    });
    return {totalQuantity, totalPrice};
  };

  return (
    <>
      <h2>Products Details</h2>
      {
        storeData.length > 0 ? <> <div className="container1">
        <div className="products__list">
          {storeData?.map((item,ind) => {
            return (
              <div key={ind} className="product">
                <div className="img__box">
                  <img src={item.thumbnail} alt="sample-test" />
                </div>
                <h4>Price : ₹ {item.price}</h4>
                <div className="product__content">
                  <button onClick={()=> dispatch(addQuantity(item.id))}>+</button>
                  <p>{item.quantity}</p>
                  <button onClick={()=> dispatch(decreaseQuantity(item.id))}>-</button>
                </div>
                <div onClick={()=> dispatch(removeItem(item.id)) } className="delet__icon">
                  <DeleteIcon style={{color:'red',padding:'10px',cursor:'pointer'}} fontSize="large"/>
                </div>
              </div>
            );
          })}
        </div>
        <div className="produsts__order__summry">
          <h3>Order Summary</h3>
          <hr />
          <h4>Total Quantity : {getTotal().totalQuantity}</h4>
          <h4>Total Amount : ₹ {getTotal().totalPrice.toFixed(2)}</h4>
        </div>
      </div></> : <h2>Your Cart is empty. Kindly check out the home page.</h2>
      }
    </>
  );
};

export default Cart;
