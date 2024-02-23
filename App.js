import React from "react";
import ReactDOM from "react-dom/client";

//do planning before writting code
/**
 * planning
 * header
 *    -logo
 *    -nav Item(right Side)
 *    -cart
 * Body
 *    -Search bar
 *    -Restaurent List
 *    -   restaurent card
 *            -image
 *            -name
 *            -Rating
 *            -Cusines
 *     -footer
 *        -links
 *        -copyright
 *
 *  *
 */

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
    ></img>
  </a>
);

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About-Us</li>
          <li>Contact-Us</li>
          <li>Offer</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};
//config driven ui
//data api from website
const ResaturentList = [
  {
    type: "restaurant",
    info: {
      id: "253596",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Tathawade",
      areaName: "Tathawade",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.1,
      parentId: "166",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-23 06:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-tathawade-pune-253596",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "27249",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "Opposite Copa Cabana Hotel",
      areaName: "Pimple Nilakh",
      costForTwo: "₹200 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.5,
      veg: true,
      parentId: "5588",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 7.8,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "7.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-01 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-opposite-copa-cabana-hotel-pimple-nilakh-pune-27249",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "202642",
      name: "Irani Cafe",
      cloudinaryImageId: "tfsksql6wnebha3zcttj",
      locality: "Laxman Nagar",
      areaName: "Baner",
      costForTwo: "₹200 for two",
      cuisines: [
        "Bakery",
        "Snacks",
        "Fast Food",
        "Desserts",
        "Beverages",
        "Indian",
        "Street Food",
      ],
      avgRating: 4.4,
      parentId: "4057",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 8.3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "8.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-01 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/irani-cafe-laxman-nagar-baner-pune-202642",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "16970",
      name: "Mad Momos",
      cloudinaryImageId: "qswrojfwttgslmy8n4cn",
      locality: "Guru Krupa Colony",
      areaName: "Guru Krupa Colony",
      costForTwo: "₹200 for two",
      cuisines: [
        "Chinese",
        "Tibetan",
        "Nepalese",
        "Pizzas",
        "Snacks",
        "Beverages",
      ],
      avgRating: 4,
      parentId: "610",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 49,
        lastMileTravel: 8,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "8.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-23 06:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mad-momos-guru-krupa-colony-pune-16970",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "35790",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
      locality: "Balewadi High Street",
      areaName: "Balewadi",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.5,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.5",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 47,
        lastMileTravel: 9.1,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "9.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-23 06:55:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-belgian-waffle-co-high-street-balewadi-pune-35790",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "396721",
      name: "Chai Point",
      cloudinaryImageId: "f9ekvewefxolboyrurxs",
      locality: "Rahatani Road",
      areaName: "Pimple Saudagar",
      costForTwo: "₹150 for two",
      cuisines: [
        "Bakery",
        "Beverages",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "South Indian",
        "Punjabi",
        "Chaat",
        "Indian",
        "American",
        "North Indian",
        "Fast Food",
        "Desserts",
        "Cafe",
        "Healthy Food",
        "Home Food",
      ],
      avgRating: 4.5,
      parentId: "1607",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 9.3,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "9.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-01 00:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/chai-point-rahatani-road-pimple-saudagar-pune-396721",
      type: "WEBLINK",
    },
  },
];
//data generally dynamic

//using abovr data
//here acc to our json we use info instead of data -akshay uses data
const RestaurentCard = ({
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
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
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

//passing props -property

const Body = () => {
  return (
    <div className="RL">

      {
        ResaturentList.map((restaurant) => {
            return <RestaurentCard {...restaurant.info} key ={restaurant.info.id}/>
        }
      )}
    </div>
  );
};

//footer
const Footer = () => {
  return <h4>footer</h4>;
};

//React.Fragmnet
const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<AppLayout />);
//khana_Mcangwale
