const ListItem = ({ url, photo, name, address, phone }) => {
    const handleOnClick = () =>{
        console.log("Visiting...", url)
        window.open(`https://${url}`, '_blank');
    }
  return (  
    <div onClick={handleOnClick} className='list-element-container'>
      <div className="img-container">
        <img src={photo} alt={name}></img>
      </div>
      <div className="info-container">
        <h6 className='name'>{name}</h6>
        <p className="
        address">{address}</p>
        <p className='phone' >{phone}</p>
      </div>
    </div>

  );
};

export default ListItem;