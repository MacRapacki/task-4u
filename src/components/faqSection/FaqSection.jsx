import React, { useState } from "react";

import FreeSHOUTcastQ from "./FreeSHOUTcastQ";

const buttons = ["FreeSHOUTcast", "AutoDJ", "Live Stream", "Limits"];

const FaqSection = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButton = (index) => {
    setActiveButton(index);
  };

  return (
    <section className="faq" id="faqScroll">
      <h2 className="faq_title">Frequently Asked Questions:</h2>
      <div className="faq_buttons-wrapper">
        {buttons.map((button, index) => {
          return (
            <button
              key={index}
              className={`faq_button ${index === activeButton ? "active" : ""}`}
              onClick={() => handleButton(index)}
            >
              {button}
            </button>
          );
        })}
      </div>
      <FreeSHOUTcastQ />
    </section>
  );
};

export default FaqSection;
