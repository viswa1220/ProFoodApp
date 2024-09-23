import "./FoodCardComponent.css";
import { useNavigate } from 'react-router-dom';
const FoodCardComponent = ({ resData }) => {
  const navigate = useNavigate();
  const imageUrl =  `/images/${resData.image}`;
  const handleClick = (data) => {
    console.log(data);
    navigate(`/menu/${data}`)
  };
  return (
    <div className="food-card-container" onClick={() =>handleClick(resData.name)}>
      
      <div className="image-container">
        <img
          src={imageUrl}
          className="food-image"
          alt={resData?.name || "Food Item"}
        />
      </div>
      <h1 className="food-header">{resData?.name || "Unknown Food"}</h1>
      <div className="food-details">
        <div className="area-name">{resData?.areaName || "Unknown Area"}</div>
        <div className="cuisines">
          {resData?.cuisines && resData.cuisines.length > 0 ? (
            resData.cuisines.map((cuisine, index) => (
              <div key={index} className="sub-cuisines">
                {cuisine}
              </div>
            ))
          ) : (
            <div>No cuisines available</div>
          )}
        </div>
        <div className="price-cart">
          <div className="food-price">{resData?.costForTwo || "N/A"}</div>
          <div className={`status ${resData?.isOpen ? "open" : "closed"}`}>
            {resData?.isOpen ? "Open Now" : "Closed"}
          </div>
          <div className="rating">
            Rating: {resData?.avgRating || "No rating"}
          </div>
        </div>
        <button
          className="add-to-cart-button"
          onClick={() => {
            console.log(resData?.name);
          }}
        >
          View Menu
        </button>
      </div>
    </div>
  );
};

export default FoodCardComponent;
