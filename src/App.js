import React from "react";

import Navbar from "./components/layout/Navbar";
import MainSection from "./components/mainSection/MainSection";
import FaqSection from "./components/faqSection/FaqSection";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;
