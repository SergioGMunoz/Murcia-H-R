import notImg from "../../assets/img/not-img.png";

const ListItem = ({ url, photo, name, address, phone }) => {
  const handleOnClick = () => {
    console.log("Visiting...", url);
    window.open(`${url}`, "_blank");
  };
  return (
    <div onClick={handleOnClick} className="list-element-container">
      <div className="img-container">
        <img
          src={photo}
          alt={name}
          onError={(e) => {
            // Evitar bucle infinito verificando si ya es la imagen de fallback
            if (e.currentTarget.src !== notImg) {
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
