const Pagination = ({ currentPage, totalPages, onPrevious, onNext }) => {
  return (
    <div className="pagination-container">
      {/* Previous */}
      {currentPage > 1 && (
        <button className="inactive" onClick={onPrevious}>
          Anterior
        </button>
      )}

      {/* Actual page */}
      <button className="active">{currentPage}</button>

      {/* Next page */}
      {currentPage < totalPages && (
        <button className="inactive" onClick={onNext}>
          {currentPage + 1}
        </button>
      )}

      {/* Next */}
      {currentPage < totalPages && (
        <button className="inactive" onClick={onNext}>
          Siguiente
        </button>
      )}
    </div>
  );
};

export default Pagination;
