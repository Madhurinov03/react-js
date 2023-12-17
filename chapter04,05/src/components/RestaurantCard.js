import CDN_URL from "../utils/constants";
const RestaurantCard = (props) => {
  //   const { resName, cuisine } = props; // destructuring
  const { resData } = props;
  console.log(props);

  const { cloudinaryImageId, name, cuisine, costForTwo, avgRating } =
    resData?.info;
  return (
    <div className="rest-card" style={{ background: "white" }}>
      {/* here double curly braces indicates that the first { }teling some peice of javascript in it and second {} is javascript object */}
      <img className="imgLogo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisine}</h5>
      <h5>{costForTwo}</h5>
      <h5>{avgRating} stars</h5>
    </div>
  );
};
export default RestaurantCard;
