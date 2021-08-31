import React, { useState } from "react";

const data = [
  {
    question: "What is FreeSHOUTcast?",
    answer:
      "FreeSHOUTcast provides Free Online Radio Servers. You can get your ownserver and start your internet radio station for free!",
  },
  {
    question: "Is the service really free?",
    answer: "Yes, FreeSHOUTcast completely free, this is not a demo or trial.",
  },
  {
    question: "What's the trick?",
    answer:
      "There is no trick, we created this service for online radio enthusiasts. You can try streaming online, share favorite music or become a radio DJ for free.",
  },
];

const FreeSHOUTcastQ = () => {
  const [isExpand, setIsExpand] = useState(0);

  const handleExpand = (index) => {
    setIsExpand(index);
  };

  return (
    <div className="questionOverlay">
      {data.map((item, index) => {
        const { question, answer } = item;
        return (
          <div key={index} className={`questionWrapper  `}>
            <p
              className={`question_title ${isExpand === index && "active"}`}
              onClick={() => handleExpand(index)}
            >
              {question}
            </p>
            <p className={`answer ${isExpand === index && "active"}`}>
              {answer}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FreeSHOUTcastQ;
