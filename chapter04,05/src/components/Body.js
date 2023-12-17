import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mocData";

const Body = () => {
  const [listOfrestaurants,setListOfrestaurants] = useState(resList);

  return (
    <div className="restContainer">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = listOfrestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfrestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restList">
        {listOfrestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
