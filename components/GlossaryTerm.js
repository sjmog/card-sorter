"use client";

import React, { useState } from "react";
import { glossaryTerms } from "@/data";

export const GlossaryTerm = ({ term, children }) => {
  if(!glossaryTerms[term]) return term;

  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <span
      className="border-b border-dotted border-gray-400 cursor-help relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <span className="text-gray-900">{children}</span>
      {showTooltip && (
        <div className="absolute bottom-full left-0 mb-2 p-3 bg-white shadow-lg rounded-lg text-sm w-64 z-50">
          <div className="font-medium mb-1">{term}</div>
          <div className="text-gray-600">{glossaryTerms[term].definition}</div>
        </div>
      )}
    </span>
  );
};
