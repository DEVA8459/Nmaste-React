//using RestaaurentList data
//here acc to our json we use info instead of data -akshay uses data

import { IMG_CDN_URL } from "../4.other/config";

export const RestaurentCard = ({
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    locality,
    areaName,
    costForTwo,
    isOpen,
  }) => {
    return (
      <div className="card">
        <img
          alt="img"
          src={IMG_CDN_URL + cloudinaryImageId  }
        ></img>
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")}</h2>{" "}
        {/* to join the html array otherwaise comma is not shown */}
        <h3>{avgRating} stars</h3>
        <h3>{locality}</h3>
        <h3>{areaName}</h3>
        <h3>{costForTwo}</h3>
        <h3>{isOpen ? "Open" : "Closed"} </h3>
      </div>
    );
  };
  