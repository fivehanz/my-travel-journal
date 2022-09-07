import Header from "./components/Header";
import Card from "./components/Card";
import "./App.css";

const data: TravelJournal[] = [
  {
    id: 1,
    name: "Mount Fuji",
    date: "12 Jan, 2021 - 24 Jan, 2021",
    description:
      "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    country: "Japan",
    image: "https://source.unsplash.com/WLxQvbMyfas",
  },
  {
    id: 2,
    name: "Sydney Opera House",
    date: "27 May, 2021 - 8 Jun, 2021",
    description:
      "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
    country: "AUSTRALIA",
    image: "https://source.unsplash.com/JmuyB_LibRo",
  },
  {
    id: 3,
    name: "Geirangerfjord",
    date: "01 Oct, 2021 - 18 Nov, 2021",
    description:
      "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
    country: "Norway",
    image: "https://source.unsplash.com/3PeSjpLVtLg",
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        {data.map((card: TravelJournal) => (
          <Card {...card} />
        ))}
      </main>
    </div>
  );
}

export default App;
