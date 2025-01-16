import { useState, useRef } from "react";

function Accordion({ question, answer, index }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const accordionRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="accordion-card style2 mx-4"
      style={{
        borderRadius: 10,
        border: "none",
        backgroundColor: "#F6F7F9",
        
      }}
    >
      <div className="accordion-header" id={`collapse-item-${index}`}>
        <button
          className={`accordion-button ${activeIndex === index ? "" : "collapsed"}`}
          type="button"
          style={{
            backgroundColor: activeIndex === index ? "#E8EFFA" : "",
            transition: "background-color 0.5s ease",
            fontSize: "1.2rem",
          }}
          onClick={() => toggleAccordion(index)}
        >
          {question}
        </button>
      </div>
      <div
        ref={(el) => (accordionRefs.current[index] = el)}
        className="accordion-collapse"
        style={{
          maxHeight:
            activeIndex === index
              ? `${accordionRefs.current[index]?.scrollHeight * 0.9}px`
              : "0",
          backgroundColor: activeIndex === index ? "#E8EFFA" : "",
          overflow: "hidden",
          transition: "max-height 0.5s ease, background-color 0.5s ease",
        }}
      >
        <div className="accordion-body style2">
          <p
            style={{
              color: "#5C7295",
              fontWeight: "500",
              fontSize: "1.1rem",
            }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
