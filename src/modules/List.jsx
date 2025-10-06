import ListElement from "./ListElement";

const List = ({ elements }) => {
  return (
    <section className="list">
      {console.log(elements)}
      {elements.map((element) => {
        return (
          <ListElement
            key={element["Nombre"] || "-"}
            url={element["URL Real"] || element["URL Corta"] || ""}
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
