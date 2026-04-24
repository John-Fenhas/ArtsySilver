import { useState, useRef, useEffect } from "react";

export default function FilterBlock({
  title,
  children,
  className,
  defaultOpen = false,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen, children]);

  return (
    <div className="border-b border-gray-200 py-4 ">
      {/* Header */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="font-semibold">{title}</span>

        {/* Arrow */}
        <span
          className={`transition-transform duration-400 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <svg
            focusable="false"
            width="12"
            height="8"
            class="icon icon--chevron icon--inline  "
            viewBox="0 0 12 8"
          >
            <path
              fill="none"
              d="M1 1l5 5 5-5"
              stroke="currentColor"
              stroke-width="1.6"
            ></path>
          </svg>
        </span>
      </button>

      {/* Content */}
      <div
        style={{ height }}
        className="overflow-hidden transition-all duration-400 ease-in-out"
      >
        <div ref={contentRef} className={`pt-4 ${className}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
