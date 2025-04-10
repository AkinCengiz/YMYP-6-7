import React from "react";
import Section from "./Section";
import About from "./About";
import Contact from "./Contact";

function Custom() {
  return (
    <>
      <div className="p-3" style={{ backgroundColor: "#ddd" }}>
        <Section />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default Custom;
