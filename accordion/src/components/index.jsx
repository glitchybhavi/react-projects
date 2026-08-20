import { useState } from "react";
import accordionData from "./data";
import "./style.css";

function Accordion() {
  const [selected, setSelected] = useState(null);

  function showAnswer(id) {
    setSelected(selected === id ? null : id);
  }

  return (
    <section className="accordion">
      {accordionData.map((data) => (
        <div className="accordion-item" key={data.id}>
          <button
            className="question"
            onClick={() => showAnswer(data.id)}
          >
            <h3>{data.question}</h3>

            <span>
              {selected === data.id ? "−" : "+"}
            </span>
          </button>

          {selected === data.id && (
            <div className="answer">
              <p>{data.answer}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default Accordion;