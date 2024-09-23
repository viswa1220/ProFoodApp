import React from "react";
import "./MenuCardComponent.css";

const MenuCardComponent = ({ foodmenucard }) => {
  const handleAddToCart = () => {
    console.log(`Added ${foodmenucard.name} to cart!`);
  };
const image = `/images/${foodmenucard.image}`;
  return (
    <div className="menu-card">
      <img
        src={image || "https://via.placeholder.com/300x180"}
        alt={foodmenucard.name}
      />
      <div className="menu-card-body">
        <h5 className="menu-card-title">{foodmenucard.name}</h5>
        <p className="menu-card-text">
          <strong>Rating:</strong> {foodmenucard.rating}/5
        </p>
        <p className="menu-card-text">
          <strong>Deal:</strong> {foodmenucard.deals}
        </p>
        <p className="menu-card-text">
          <strong>Delivery Time:</strong> {foodmenucard.deliveryTime}
        </p>
        <p className="menu-card-text menu-card-price">
          <strong>Price:</strong> {foodmenucard.price}
        </p>
        <button className="menu-add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuCardComponent;
