import React from "react";

import InfoCard from "./InfoCard";
import ServerForm from "./ServerForm";
import ScrollDownLink from "./ScrollDownLink";

const MainSection = (props) => {
  return (
    <section className="section">
      <InfoCard />
      <ServerForm />
      <ScrollDownLink faqRef={props.faqRef} />
    </section>
  );
};

export default MainSection;
