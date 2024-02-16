const ItemList = ({ items }) => {
  console.log(items);
  // console.log(items[0]?.card?.info?.name);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className=" border-gray-300 border-b-2 p-2 m-2"
        >
          <div className="font-bold flex justify-between ">
            <span>
              {item.card.info.name} {item.card.info.isVeg ? "🥦" : "🍗"}
            </span>

            <span>
              Rs.{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
          </div>
          <p className="text-left text-sm">{item.card.info.description}</p>
        </div>
      ))}
      {/* <h1>Item List</h1> */}
    </div>
  );
};

export default ItemList;
