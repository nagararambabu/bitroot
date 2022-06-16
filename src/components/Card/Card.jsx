/** @format */

import React, { useState } from "react";
import BasicModal from "../Model/Model";
import "./Card.css";

export const Card = (props) => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Nov",
    "December",
  ];

  var date = new Date(props.date * 1000);
  var year = date.getFullYear();
  var day = date.getDay();
  var mon = month[date.getMonth()];

  console.log(year, day, mon);

  return (
    <div className="card_section">
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="card_header"
      >
        <div className="image__hover">
          <img
            onClick={handleOpen}
            src={props.image}
            alt="card_image"
            className={show ? "card_image" : "card_image"}
          />
          {show && (
            <div onClick={handleOpen} className="learn_more__container">
              <p className="learn_more">Learn More</p>
            </div>
          )}
        </div>

        <div className="dot-section">
          <div className="blue"></div>
          <div className="yellow"></div>
        </div>
      </div>
      <div className="card_content">
        <div className="card_content_heading">{props.title}</div>
        <div className="card_content_description">{props.content}</div>
      </div>
      <div className="card_footer">
        <div className="card_autor">
          <span>
            {props.name}-{props.role}
          </span>
        </div>
        <div className="card_date">{`${mon} ${day} , ${year} `}</div>
      </div>
      <BasicModal
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        image={props.image}
        authorImg={props.avatar}
        title={props.title}
        name={props.name}
        role={props.name}
        content={props.content}
      />
    </div>
  );
};
