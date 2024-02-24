//passing props -property
import { useState } from "react";
import { ResaturentList } from "./config";
import { RestaurentCard } from "./RestaurentCard";

function filterData(searchText, restaurant) {
  const filterData = restaurant.filter((restaurant) =>
    restaurant.info.name.includes(searchText)
  );

  return filterData;
}
const Body = () => {
  const [restaurant, setrestaurant] = useState(ResaturentList);
  const [searchText, setSearchText] = useState("");
  //const [searchbtn ,setSearchbtn] =useState("false")
  return (
    <>
      <div className="search-conatainer">
        <input
          type="text"
          className="searchInput"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>

        <button
          className="restaurant-list"
          onClick={(e) => {
            //need to filterr the daata
            const data = filterData(searchText, restaurant);
            // update the state restaurent
            setrestaurant(data);
          }}
        >
          search
        </button>
      </div>
      <div className="RL">
        {restaurant.map((restaurant) => {
          return (
            <RestaurentCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
