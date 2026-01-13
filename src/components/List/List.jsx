import ListItem from "./ListItem";

// List of hotels component
// Iterates the item list an reder it 

const List = ({ elements }) => {
  return (
    <section className="list">
      {elements.map((element) => {
        return (
          <ListItem
            key={element["Nombre"] + element["URL Real"]}
            photo={element["Foto 1"] || "../assets/img/not-img.png"}
            name={element["Nombre"] || "-"}
            address={element["Dirección"] || "-"}
            phone={element["Teléfono"] || "-"}
            hotel={element}
          />
        );
      })}
    </section>
  );
};

export default List;