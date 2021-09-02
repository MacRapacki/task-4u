import React, { useEffect } from "react";

const ScrollDownLink = (props) => {
  const executeScroll = () => {};

  useEffect(() => {
    if (props.faqRef.current) {
      executeScroll(
        props.faqRef.current.scrollIntoView({
          block: "end",
        })
      );
    }
  }, [props.faqRef.current]);
  return (
    <a href="#f" className="arrowDown">
      {`>`}
    </a>
  );
};

export default ScrollDownLink;
