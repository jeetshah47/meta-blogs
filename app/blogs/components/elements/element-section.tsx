import Accordion from "@/app/components/accordion/accordion";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import ElementDiv from "./element-div";

const ElementSection = () => {
  const [current, setCurrent] = useState(-1);

  return (
    <div>
      <Accordion
        active={current === 0}
        onClick={() => setCurrent(current === 0 ? -1 : 0)}
        title="Text"
        icon="mdi:text"
      >
        <ElementDiv text="Label" desc="A simple one line text" icon="fluent:text-16-filled" />
        <ElementDiv text="Paragraph" desc="A long para text" icon="hugeicons:paragraph" />
      </Accordion>
      <Accordion
        active={current === 1}
        onClick={() => setCurrent(current === 1 ? -1 : 1)}
        title="Media"
        icon="fluent-mdl2:media-add"
      >
        <ElementDiv text="Image" desc="A long para text" icon="ph:image" />
      </Accordion>
      <Accordion
        active={current === 2}
        onClick={() => setCurrent(current === 2 ? -1 : 2)}
        title="Section"
        icon="ph:brackets-angle-duotone"
      >
        <div className="bg-primary dark:bg-dark-secondary outline-none py-2 px-4 rounded flex justify-between items-center">
          <p>Code Box</p>
        </div>
      </Accordion>
    </div>
  );
};

export default ElementSection;
