import React, { useEffect } from "react";
import MenuCardComponent from "../menu-card/MenuCardComponent";
import { useParams } from "react-router-dom";
import mockdata from "../../Utils/mockData";
import './FoodMenuComponent.css';  

const FoodMenuComponent = () => {
  const { storeName } = useParams();



  const storeData = mockdata.stores.find(
    (store) => store.storeName.trim() === storeName.trim()
  );

  return (
    <div className="Food-Menu-List">
      {storeData.foodItems.map((foodItem, index) => (
        <MenuCardComponent key={index} foodmenucard={foodItem} />
      ))}
    </div>
  );
};

export default FoodMenuComponent;
