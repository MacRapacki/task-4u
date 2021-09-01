import React from "react";

import InfoCard from "./InfoCard";
import ServerForm from "./ServerForm";
import ScrollDownLink from "./ScrollDownLink";

const MainSection = () => {
  return (
    <section className="section">
      <InfoCard />
      <ServerForm />
      <ScrollDownLink />
    </section>
  );
};

export default MainSection;
