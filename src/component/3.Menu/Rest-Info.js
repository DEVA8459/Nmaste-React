import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../other/config";
import { GET_RESTAURANT_MENU } from "../other/config";

const RestInfo = () => {
  //how to read adynAMIC URL PARAM
  const { resId } = useParams();
  // can destructure on the fly  ,const {id} = useParams();

  const [restData, setRestData] = useState({});

  useEffect(() => {
    getRestInfo();
  }, [resId]);

  async function getRestInfo() {
    const data = await fetch(GET_RESTAURANT_MENU);

    const json = await data.json();
    console.log(json.data);

    const menuItemsList =
      json.data.cards[2]["groupedCard"].cardGroupMap.REGULAR.cards;
    const itemCategory =
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
    const NestedItemCategory =
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";


      const menu = menuItemsList.map(item => {
        if((item.card.card["@type"] === itemCategory) || (item.card.card["@type"] === NestedItemCategory) ) {
          return item.card.card;
        }
      })

      const modifiedData = {
        info : res_data.data.cards[0].card.card.info,
        menu : menu.filter(value => value !== undefined)
      };
  
  
    setRestData(modifiedData)
} 
 

  return restData
 }
export default RestInfo;
