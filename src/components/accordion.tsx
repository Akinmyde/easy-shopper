import React, { useState } from "react";

import arrowIcon from "../images/chevron-down.svg";

type AccordionContent = {
  title: string;
  text: string;
};

type Props = {
  items: AccordionContent[];
};

const Accordion = ({ items }: Props) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActiveAccordion((prevActive) => (prevActive === id ? null : id));
  };

  return (
    <div className="w-full">
      {items.map((item) => (
        <div
          key={item.title}
          className="border-t border-t-gray-300 first:border-0 cursor-pointer"
          onClick={() => handleClick(item.title)}
        >
          <div className="flex justify-between items-center px-4 py-3">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <div
              className={`transform transition-transform ${
                activeAccordion === item.title ? "rotate-90" : ""
              }`}
            >
              <img src={arrowIcon} width="12" alt="" height="12" />
            </div>
          </div>

          {activeAccordion === item.title && (
            <div className="px-4 py-2">
              <p>{item.text}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
