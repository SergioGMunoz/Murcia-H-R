import notImg from "../../assets/img/not-img.png";
import { useNavigate } from "react-router-dom";
import { createHotelId } from "../../utils/hotelUtils";

const ListItem = ({ photo, name, address, phone, hotel }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    // Create hotel ID -> Ej: /casa-paco
    const hotelId = createHotelId(name);
    console.log("Navigating to hotel:", hotelId);
    navigate(`/hotel/${hotelId}`, { state: { hotel } });
  };

  return (
    <div onClick={handleOnClick} className="list-element-container">
      <div className="img-container">
        <img
          src={photo}
          alt={name}
          onError={(e) => {
            if (e.currentTarget.src !== notImg) {
              // Img not found
              e.currentTarget.src = notImg;
            }
          }}
        ></img>
      </div>
      <div className="info-container">
        <h6 className="name">{name}</h6>
        <p
          className="
        address"
        >
          {address}
        </p>
        <p className="phone">{phone}</p>
      </div>
    </div>
  );
};

export default ListItem;
