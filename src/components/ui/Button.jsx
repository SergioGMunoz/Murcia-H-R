const Button = ({ text, disabled = false, onClick }) => {
  return (
    <button disabled={disabled} className="primary-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
