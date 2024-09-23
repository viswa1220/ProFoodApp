import NavigationBarComponent from "../nav-bar/NavigationBarComponent";
import FoodCardComponent from "../card-component/FoodCardComponent";
import "./ListComponent.css";
import { useState, useEffect } from "react";
import mainCardData from "../../Utils/mainCardData";

const ListComponent = () => {


  return (
    <div className="list">
      <NavigationBarComponent />
   <div className="food-card">
    {mainCardData.map((res,index)=><FoodCardComponent  key={index}  resData={res}></FoodCardComponent>)}
   </div>   
    </div>
  );
};

export default ListComponent;
