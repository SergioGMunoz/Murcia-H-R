const InfoItem = ({ label, value }) => {
  if (!value) return null;

  return (
    <div className="info-item">
      <strong>{label}:</strong>
      <p>{value}</p>
    </div>
  );
};

export default InfoItem;
