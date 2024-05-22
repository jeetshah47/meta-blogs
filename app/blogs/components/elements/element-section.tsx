import Accordion from "@/app/components/accordion/accordion";
import React, { useState } from "react";

const ElementSection = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div>
      <Accordion
        active={current === 0}
        onClick={() => setCurrent(current === 0 ? -1 : 0)}
        title="input box"
      >
        <input
          placeholder="Label"
          className="bg-primary dark:bg-dark-secondary outline-none py-2 px-4 rounded"
          disabled
        />
        <div className="py-3" />
        <textarea
          placeholder="Paragraph"
          className=" bg-primary dark:bg-dark-secondary outline-none py-2 px-4 rounded h-20 w-full"
          disabled
        ></textarea>
        <div className="py-3" />

        <picture>
          <img alt="Image" src="/imgs/dummer.png" />
        </picture>
      </Accordion>
      <Accordion
        active={current === 1}
        onClick={() => setCurrent(current === 1 ? -1 : 1)}
        title="input box"
      >
        <input
          placeholder="Label"
          className=" bg-primary dark:bg-dark-secondary outline-none py-2 px-4 rounded"
          disabled
        />
        <div className="py-3" />
        <textarea
          placeholder="Paragraph"
          className=" bg-primary dark:bg-dark-secondary outline-none py-2 px-4 rounded h-20 w-full"
          disabled
        ></textarea>
        <div className="py-3" />

        <picture>
          <img alt="Image" src="/imgs/dummer.png" />
        </picture>
      </Accordion>
    </div>
  );
};

export default ElementSection;
