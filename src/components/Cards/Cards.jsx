// import Card from "../Card/Card"
import "./cards.css";
const cardList = [
  {
    id: 1,
    photo: "./assets/icons/computer-icon.svg",
    title: `HIGHLY  COMPATIBLE`,
    description:
      "Easy to use and works well with all major computer brands, gamingconsoles and mobile devices. Plug & play, no installation or driver needed.",
  },
  {
    id: 2,
    photo: "./assets/icons/bluetooth-icon.svg",
    title: "WIRELESS WITH BLUETOOTH",
    description:
      "Easy to use and works well with all major computer brands, gamingconsoles and mobile devices. Plug & play, no installation or driver needed.",
  },
  {
    id: 3,
    photo: "./assets/icons/battery-icon.svg",
    title: "HIGH CAPACITY BATTERY",
    description:
      "Easy to use and works well with all major computer brands, gamingconsoles and mobile devices. Plug & play, no installation or driver needed.",
  },
  {
    id: 4,
    photo: "./assets/icons/light-icon.svg",
    title: "RGB BACKLIT MODES",
    description:
      "Easy to use and works well with all major computer brands, gamingconsoles and mobile devices. Plug & play, no installation or driver needed.",
  },
];
function Cards() {
  return (
    <div className="container cards-container">
      {cardList.map((item) => {
        const { id, photo, title, description } = item;
        return (
          <div className="wrapper" key={id}>
            <img src={photo} alt="" className="wrapper-icon" />
            <div className="title">
              <h2>{title}</h2>
            </div>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Cards;
