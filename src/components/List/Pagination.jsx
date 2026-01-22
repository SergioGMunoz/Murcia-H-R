import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Pagination = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
  onPageChange,
}) => {
  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevious = () => {
    onPrevious();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    onNext();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pagination-container">
      {/* Previous Button */}
      <button
        className={`pagination-btn ${currentPage === 1 ? "disabled" : ""}`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <ArrowBackIcon />
      </button>

      {/* Page Numbers */}
      <div className="pagination-numbers">
        {/* First Page */}
        {currentPage !== 1 && (
          <button className="pagination-btn" onClick={() => handlePageClick(1)}>
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
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <ArrowForwardIcon />
      </button>
    </div>
  );
};

export default Pagination;
