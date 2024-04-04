import "../card/card.css";
import Card from "./card";
import javaImg from "../../assets/markus-spiske/markus-spiske-1LLh8k2_YFk-unsplash.png";
import image6 from "../../assets/markus-spiske-6/markus-spiske-1LLh8k2_YFk-unsplash.png";
import image3 from "../../assets/markus-spiske-3/markus-spiske-1LLh8k2_YFk-unsplash.png";
import image4 from "../../assets/markus-spiske-4/markus-spiske-1LLh8k2_YFk-unsplash.png";
import image5 from "../../assets/markus-spiske-5/markus-spiske-1LLh8k2_YFk-unsplash.png";
import image7 from "../../assets/markus-spiske-7/markus-spiske-1LLh8k2_YFk-unsplash.png";
import image8 from "../../assets/markus-spiske-8/markus-spiske-1LLh8k2_YFk-unsplash.png";
import image9 from "../../assets/markus-spiske-9/markus-spiske-1LLh8k2_YFk-unsplash.png";
export const data = [
  {
    heding: "Learn java programming : for absolute beginners",
    image: javaImg,
    name: "janmenjaya",
    day: "10",
    Assignments: "22",
    time: "5",
    chip: "java",
  },
  {
    image: image6,
    heding: "Learn java programming : for absolute beginners",
    name: "suni",
    day: "10",
    Assignments: "22",
    time: "5",
    chip: "Python",
  },
  {
    image: image3,
    heding: "Learn DevOps for absolute beginners",
    name: "shafi",
    day: "10",
    Assignments: "22",
    time: "5",
    chip: "DevOps",
  },
  {
    image: image4,
    heding: "Selenium Certification Training Course",
    name: "nagraj",
    day: "10",
    Assignments: "22",
    time: "5",
    chip: "Selenium",
  },
  {
    image: image5,
    heding: "Learn java programming : for absolute beginners",
    name: "janmenjaya",
    day: "10",
    Assignments: "22",
    time: "5",
    chip: "java",
  },
  {
    image: image7,
    heding: "Mobile App Testing Using Appium",
    name: "suni",
    day: "10",
    Assignments: "22",
    time: "5",
    chip: "Python",
  },
  {
    image: image8,
    heding: "Learn java programming : for absolute beginners",
    name: "shafi",
    day: "10",
    Assignments: "22",
    time: "5",
    chip: "DevOps",
  },
  {
    image: image9,
    heding: "Full Stack Web Developer Masters Course",
    name: "nagraj",
    day: "10",
    Assignments: "22",
    time: "5",
    chip: "Selenium",
  },
];

function CardSection() {
  return (
    <>
      <div className="app-section">
        {data.map((item) => (
          <Card
            heding={item.heding}
            image={item.image}
            name={item.name}
            day={item.day}
            Assignments={item.Assignments}
            time={item.time}
            chip={item.chip}
            key={item.name}
          />
        ))}
      </div>
    </>
  );
}

export default CardSection;
