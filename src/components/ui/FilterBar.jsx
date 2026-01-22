import { useState } from "react";

const FilterBar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    nombre: "",
    cp: "",
    municipio: "",
    pedania: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);


    const trimmedFilters = Object.keys(newFilters).reduce((acc, key) => {
      acc[key] = newFilters[key].trim();
      return acc;
    }, {});
    onFilterChange(trimmedFilters);
  };

  const handleClearFilters = () => {
    const clearedFilters = {
      nombre: "",
      cp: "",
      municipio: "",
      pedania: "",
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  const hasActiveFilters = Object.values(filters).some((value) => value !== "");

  return (
    <div className="filter-bar">
      <h3 className="filter-bar__title">Buscar</h3>
      <div className="filter-bar__inputs">
        <input
          type="text"
          name="nombre"
          value={filters.nombre}
          onChange={handleInputChange}
          placeholder="Nombre"
          className="filter-bar__input"
        />
        <input
          type="text"
          name="cp"
          value={filters.cp}
          onChange={handleInputChange}
          placeholder="C.P."
          className="filter-bar__input"
        />
        <input
          type="text"
          name="municipio"
          value={filters.municipio}
          onChange={handleInputChange}
          placeholder="Municipio"
          className="filter-bar__input"
        />
        <input
          type="text"
          name="pedania"
          value={filters.pedania}
          onChange={handleInputChange}
          placeholder="Pedanía"
          className="filter-bar__input"
        />
        <button
          onClick={handleClearFilters}
          disabled={!hasActiveFilters}
          className="filter-bar__clear-btn"
        >
          Limpiar
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
