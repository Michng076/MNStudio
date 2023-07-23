import React from "react";

export const Collapsible: React.FC<{title: string, content: string}> = ({ title, content }) => {
    const [open, setOpen] = React.useState(false);
    return (
      <div className="flex-col border rounded-xl max-w-md flex-1">
        <div
          className={`flex flex-1 px-8 flex-row items-center justify center ${
            open ? "bg-secondary_hover text-secondary border-b-2 border-secondary rounded-t-xl" : "hover:bg-secondary_hover rounded-xl"
          }`}
          onClick={() => setOpen(!open)}
          style={{
            cursor: "pointer",
          }}
        >
          <span className="flex-1 my-0 py-4 font-semibold text-lg">{title}</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${open ? "rotate-180" : null} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </div>
        {open && <div className="px-8 py-4">{content}</div>}
      </div>
    );
};