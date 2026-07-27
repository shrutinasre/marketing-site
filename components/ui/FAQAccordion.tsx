"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQ } from "@/types";

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-neutral-200 rounded-card border border-neutral-200 bg-white">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              className="focus-ring flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-semibold text-navy-900">{item.question}</span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-neutral-500 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              className={`overflow-hidden px-6 text-sm text-neutral-600 transition-all duration-300 ${
                isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
