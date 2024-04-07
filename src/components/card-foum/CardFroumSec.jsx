import React, { useState } from "react";
import CardFoum from "./CardFoum";
import search from "../../assets/serch-icon/search-24px.svg";
import Modals from "../Certificate-modal/Modal";

function CardFroumSec() {
  const [open, setOpen] = useState(false);
  const handleOpenEnroll = () => setOpen(true);
  const num = [
    { time: 8, course: 1, topic: 1, answer: "Not answered" },
    { time: 5, course: 2, topic: 2, answer: "Answered" },
    { time: 6, course: 3, topic: 3, answer: "Answered" },
    { time: 7, course: 4, topic: 4, answer: "Answered" },
    { time: 6, course: 5, topic: 5, answer: "Answered" },
  ];

  return (
    <>
      <Modals open={open} setOpen={setOpen} />
      <div id="froum-contener">
        <div className="froum-input">
          <div className="serch-inputs">
            <span className="input-serch">
              <input type="text" className="inputs" />
              <img src={search} alt="search" className="serch-icon" />
            </span>
            <button className="btn-course">All course</button>
            <button className="btn-course">All Topics</button>
          </div>
          <div>
            <button className="btn-asked" onClick={handleOpenEnroll}>
              Asked
            </button>
          </div>
        </div>
        {num.map((item) => (
          <CardFoum
            answer={item.answer}
            time={item.time}
            course={item.course}
            topic={item.topic}
            key={item.course}
          />
        ))}
      </div>
    </>
  );
}

export default CardFroumSec;
