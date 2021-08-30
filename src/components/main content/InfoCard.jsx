import React from "react";

const InfoCard = () => {
  return (
    <div className="card">
      <h3 className="card_title">
        {" "}
        <span>FREE SHOUTCAST</span> SERVER
      </h3>
      <div className="card_price">FREE</div>
      <ul className="card_list">
        <li className="card_list_item">Online Radio Control Panel</li>
        <li className="card_list_item">Stream Live</li>
        <li className="card_list_item">AutoDJ Mode</li>
        <li className="card_list_item">Radio Player & Page</li>
        <li className="card_list_item">LiveChat Support</li>
        <li className="card_list_item">
          <a href="#faq" className="card_list_link">
            and more...
          </a>
        </li>
      </ul>
    </div>
  );
};

export default InfoCard;
