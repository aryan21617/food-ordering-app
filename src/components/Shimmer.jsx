const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array.from({ length: 18 }, (_, index) => (
        <div key={index} className="shimmer-card">
          <div className="shimmer-image"></div>
          <div className="shimmer-title"></div>
          <div className="shimmer-cuisines"></div>
          <div className="shimmer-rating"></div>
          <div className="shimmer-time"></div>
          <div className="shimmer-cost"></div>
          <div className="shimmer-discount"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;