import MapIcon from "../assets/map-icon.svg";

const Card = (props: TravelJournal) => {
  const { id, name, date, description, country, image } = props;

  return (
    <section className="card" key={id}>
      <img src={image} alt="" className="card-image" />
      <div className="card-text">
        <div className="card-country">
          <p className="card-country-title">
            <span>
              <img src={MapIcon} alt="" className="card-country-title-icon" />
            </span>
            {country.toUpperCase()}
          </p>
          <a href="#" className="card-country-map-link">
            View on Google Maps
          </a>
        </div>
        <h1 className="card-title">{name}</h1>
        <h2 className="card-date">{date}</h2>
        <p className="card-description">{description}</p>
      </div>
    </section>
  );
};

export default Card;
