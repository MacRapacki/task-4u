import React, { useState } from "react";

const data = [
  {
    question: "Are there any limits?",
    answer:
      "Yes, the machines for free radio servers are shared. The limits guarantee machine stability and prevent outages.",
  },
  {
    question: "What if I need Unlimited?",
    answer:
      "Just ask our support agents for the Unlimited Server offer if you need anything more that provided in the free radio server.",
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
