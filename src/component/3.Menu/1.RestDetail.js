import { useParams } from "react-router-dom"; // Importing the useParams hook from react-router-dom to access URL parameters
import Shimmer from "../4.other/shimmer"; // Importing the Shimmer component for showing loading animation
import useRestaurant from "./useRestaurent"; // Importing the custom hook useRestaurant for fetching restaurant details
import RestaurantInfo from "./2.RestaurentInfo"; // Importing the RestaurantInfo component for displaying restaurant details

const RestaurantDetails = () => {
  const { resId } = useParams(); // Extracting the 'resId' parameter from the URL using useParams hook

  const restaurant = useRestaurant(resId); // Calling the useRestaurant hook with the 'resId' parameter to fetch restaurant details

  // Conditional rendering: if restaurant data is not available yet, show the Shimmer loading animation,
  // otherwise, render the RestaurantInfo component with the fetched restaurant details
  return !restaurant ? (
    <Shimmer /> // Rendering the Shimmer component to indicate loading
  ) : (
    <div className="container">
      <RestaurantInfo {...restaurant.info} /> {/* Rendering the RestaurantInfo component with restaurant details */}
    </div>
  );
};

export default RestaurantDetails; // Exporting the RestaurantDetails component
