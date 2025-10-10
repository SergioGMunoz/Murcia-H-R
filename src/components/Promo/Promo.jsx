import Carousel from "./Carousel";
import notImg from "../../assets/img/not-img.png";


const photosToArray = (item) => {
  if (!item) {
    console.log("Item no es valido")
    return [notImg];
  }

  const photos = [];

  Object.keys(item).forEach(key => {
    if (key.match(/^Foto \d+$/)) {
      const photoUrl = item[key];
      if (photoUrl && photoUrl.trim() !== "") {
        photos.push(photoUrl.trim());
      }
    }
  });

  if (photos.length <= 0) return [notImg];
  return photos;
};

const Promo = ({ item }) => {
    const photos = photosToArray(item);
    
    console.log("ITEM ARRAY", photos);
  return (
    <section>
      <Carousel name={item['Nombre'] || ''} url={item["URL Real"] || item["URL Corta"] || ""} photos={photos} />
    </section>
  );
};

export default Promo;
