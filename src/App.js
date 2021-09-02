import React, { useRef } from "react";

import Navbar from "./components/layout/Navbar";
import MainSection from "./components/mainSection/MainSection";
import FaqSection from "./components/faqSection/FaqSection";
import Footer from "./components/layout/Footer";

function App() {
  const faqRef = useRef(null);
  return (
    <div className="App">
      <Navbar />
      <MainSection faqRef={faqRef} />
      <FaqSection ref={faqRef} />
      <Footer />
    </div>
  );
}

export default App;
