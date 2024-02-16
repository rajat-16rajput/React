import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  console.log(data);

  return (
    <div>
      <div className="w-1/2 my-8 shadow-lg m-auto bg-blue-100  px-4 py-2">
        {/* Header */}
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        <ItemList items={data.itemCards} />
      </div>
      {/* Body */}
      <div></div>
    </div>
  );
};
export default RestaurantCategory;
