//passing props -property
import { useEffect, useState } from "react";
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
// this is inside body function
  useEffect(() => {
    getRestaurants()
  }, []);

  //to fetch api
async function getRestaurants(){
  const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

  const json = await data.json();
  //console.log(json);
  //console.log(json?.data?.cards[4]?.card.card.gridElements.infoWithStyle.restaurants);

  //optional chaining
   setrestaurant(json?.data?.cards[4]?.card.card.gridElements.infoWithStyle.restaurants)
  // setFilteredRestaurent(json?.data?.cards[4]?.card.card.gridElements.infoWithStyle.restaurants)
}

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
        return <RestaurentCard {...restaurant.info} key={restaurant.info.id} />;
      })}
    </div>
  </>
 );
};

export default Body;
