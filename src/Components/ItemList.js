// import { useContext } from "react";
// import UserInfo from "../Utils/UserInfo";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";
const ItemList = ({ items }) => {
  console.log(items);
  // console.log(items[0]?.card?.info?.name);
  //const { name } = useContext(UserInfo);
  const dispatch = useDispatch();

  const handleClick = (item) => {
    //dispatch is a function which triggers an action
    console.log(item);
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className=" border-gray-300 border-b-2 p-2 m-2"
        >
          <div className="font-bold flex  my-0 justify-between ">
            <span>
              {item.card.info.name} {item.card.info.isVeg ? "🥦" : "🍗"}
            </span>
            <div>
              <div className="absolute">
                <button
                  className="bg-white shadow-lg rounded-sm text-sm "
                  onClick={() => {
                    handleClick(item);
                  }}
                >
                  Add+
                </button>
              </div>
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  item.card.info.imageId
                }
                className="w-20 h-20"
              ></img>
            </div>
          </div>
          <div className="font-bold text-left ">
            Rs.{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </div>
          <p className="text-left text-sm">{item.card.info.description}</p>
          {/* <h1>{name}</h1> */}
        </div>
      ))}
      {/* <h1>Item List</h1> */}
    </div>
  );
};

export default ItemList;
