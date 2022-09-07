const Card = (props: TravelJournal) => {
  const { id, name, date, description, country } = props;

  return (
    <section className="card" key={id}>
      {/* <img src="" alt="" className="card-image" /> */}
      <div className="card-country">
        <p className="card-country-title">{country}</p>
        <a href="#" className="card-country-map-link">
          View on Google Maps
        </a>
      </div>
      <h1 className="card-title">{name}</h1>
      <h2 className="card-date">{date}</h2>
      <p className="card-desc">{description}</p>
    </section>
  );
};

export default Card;
