import ListItem from "./ListItem";

const List = ({ elements }) => {
  return (
    <section className="list">
      {elements.map((element) => {
        return (
          <ListItem
            key={element["Nombre"] + element["URL Real"]}
            url={element["URL Real"] || element["URL Corta"] || "not-found"}
            photo={element["Foto 1"] || "../assets/img/not-img.png"}
            name={element["Nombre"] || "-"}
            address={element["Dirección"] || "-"}
            phone={element["Teléfono"] || "-"}
          />
        );
      })}
    </section>
  );
};

export default List;