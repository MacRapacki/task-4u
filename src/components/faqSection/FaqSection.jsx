import React, { useState } from "react";

import FreeSHOUTcastQ from "./FreeSHOUTcastQ";
import AutoDJQ from "./AutoDJQ";
import LiveStreamQ from "./LIveStreamQ";
import LimitsQ from "./LimitsQ";

const buttonsAndContent = [
  { name: "FreeSHOUTcast", content: <FreeSHOUTcastQ /> },
  { name: "AutoDJ", content: <AutoDJQ /> },
  { name: "Live Stream", content: <LiveStreamQ /> },
  { name: "Limits", content: <LimitsQ /> },
];

const FaqSection = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButton = (index) => {
    setActiveButton(index);
  };

  return (
    <section className="faq" id="faqScroll">
      <h2 className="faq_title">Frequently Asked Questions:</h2>
      <div className="faq_buttons-wrapper">
        {buttonsAndContent.map((item, index) => {
          const { name } = item;
          return (
            <button
              key={index}
              className={`faq_button ${index === activeButton ? "active" : ""}`}
              onClick={() => handleButton(index)}
            >
              {name}{" "}
              <div
                className={`line ${index === activeButton ? "active" : ""}`}
              ></div>
            </button>
          );
        })}
      </div>
      {buttonsAndContent[activeButton].content}
    </section>
  );
};

export default FaqSection;
