//passing props -property
import { useEffect, useState } from "react";
//import { ResaturentList } from "./config";
import { RestaurentCard } from "./RestaurentCard";
import Shimmer from "./shimmer";

function filterData(searchText, restaurant) {
  const filterData = restaurant.filter(
    (restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    //.lowercase to make search less sensitive here whole name is converted to lowercase
  );

  return filterData;
}


const Body = () => {
  const [allrestaurant, setAllrestaurant] = useState([]);

  const [FilteredRestaurent, setFilteredRestaurent] = useState([]);

  const [searchText, setSearchText] = useState("");
  // this is inside body function
  useEffect(() => {
    getRestaurants();
  }, []);

  //to fetch api
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //console.log(json);
    //console.log(json?.data?.cards[4]?.card.card.gridElements.infoWithStyle.restaurants);

    //optional chaining
    setAllrestaurant(
      json?.data?.cards[4]?.card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurent(
      json?.data?.cards[4]?.card.card.gridElements.infoWithStyle.restaurants
    );
  }
  //conditional rendering
  //if restaurent  is empty => shimmer ui
  //if restaurent has data => actual data UI

  if (!allrestaurant) return null;
  if (FilteredRestaurent?.length === 0)
    return <h1>No Restaurent match your search</h1>;

  return allrestaurant?.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
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
          className="RL"
          onClick={(e) => {
            //need to filterr the daata
            const data = filterData(searchText, allrestaurant);
            // update the state restaurent
            setFilteredRestaurent(data);
          }}
        >
          search
        </button>
      </div>
      <div className="RL">
        {FilteredRestaurent.map((restaurant) => {
          return (
            <RestaurentCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
