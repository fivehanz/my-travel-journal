const Card = (props: TravelJournal) => {
  const { id, name } = props;

  return (
    <div className="card" key={id}>
      {name}
    </div>
  );
};

export default Card;
