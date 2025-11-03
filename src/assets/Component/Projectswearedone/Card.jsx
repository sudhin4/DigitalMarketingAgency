const Card = ({ card }) => {
  return (
    <div className="card-container">
      <div
        className="card-background"
        style={{
          backgroundImage: `url(${card.url})`,
        }}
        
      ></div>
      
    </div>
  );
};

export default Card;
