import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../Utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearCart());
  };

  const handleRemove = () => {
    dispatch(removeItem());
  };

  return (
    <div className="text-center m-5 p-5">
      <h1 className="text-2xl font-bold ">Cart</h1>
      <button
        className="p-2 m-2 border bg-black text-white"
        onClick={() => {
          handleClick();
        }}
      >
        ClearCart
      </button>
      <button
        className="p-2 m-2 border bg-black text-white"
        onClick={() => {
          handleRemove();
        }}
      >
        Remove Item
      </button>
      <div className="w-1/2 m-auto">
        <ItemList items={cartItems}></ItemList>
      </div>
    </div>
  );
};

export default Cart;
