// import { useState } from "react";
// import ItemList from "./ItemList";

// const RestaurantCategory = ({ data, setShowIndex }) => {
//   const [isItemListVisible, setIsItemListVisible] = useState(false);

//   const handleClick = () => {
//     // Toggle the visibility of the item list component
//     setIsItemListVisible(!isItemListVisible);
//     // Call setShowIndex to handle the functionality from the parent component if needed
//     setShowIndex();
//   };

//   return (
//     <div className="w-1/2 my-8 shadow-xl m-auto bg-blue-100 px-4 py-2 rounded-lg">
//       {/* Header */}
//       <div
//         className="flex justify-between cursor-pointer"
//         onClick={handleClick}
//       >
//         <span className="font-bold text-lg">
//           {data.title} ({data.itemCards.length})
//         </span>
//         {/* Change the icon based on the visibility of the item list */}
//         <span>{isItemListVisible ? "🔼" : "🔽"}</span>
//       </div>
//       {/* Body */}
//       <div className="bg-green-200">
//         {/* Conditional rendering to display ItemList component */}
//         {isItemListVisible && <ItemList items={data.itemCards} />}
//       </div>
//     </div>
//   );
// };

// export default RestaurantCategory;

import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  console.log({ data });
  const [isItemListVisible, setIsItemListVisible] = useState(null);
  const handleClick = () => {
    console.log("Clicked");
    //what value gets passsed in the setShowIndex based on the click?
    setIsItemListVisible(!isItemListVisible);
    setShowIndex();
  };

  return (
    <div className="w-1/2 my-8 shadow-xl m-auto bg-blue-100  px-4 py-2 rounded-lg">
      {/* Header */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      {/* Body */}
      <div className="bg-green-200">
        {" "}
        {/* Conditional rendering to display ItemList component */}
        {showItems ? <ItemList items={data.itemCards} /> : null}
      </div>
    </div>
  );
};
export default RestaurantCategory;
