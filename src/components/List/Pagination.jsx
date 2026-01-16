import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Pagination = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
  onPageChange,
}) => {
  return (
    <div className="pagination-container">
      {/* Previous Button */}
      <button
        className={`pagination-btn ${currentPage === 1 ? "disabled" : ""}`}
        onClick={onPrevious}
        disabled={currentPage === 1}
      >
        <ArrowBackIcon />
      </button>

      {/* Page Numbers */}
      <div className="pagination-numbers">
        {/* First Page */}
        {currentPage !== 1 && (
          <button className="pagination-btn" onClick={() => onPageChange(1)}>
            1
          </button>
        )}

        {/* Current Page */}
        <button className="pagination-btn active">{currentPage}</button>
      </div>

      {/* Next Button */}
      <button
        className={`pagination-btn ${
          currentPage === totalPages ? "disabled" : ""
        }`}
        onClick={onNext}
        disabled={currentPage === totalPages}
      >
        <ArrowForwardIcon />
      </button>
    </div>
  );
};

export default Pagination;
