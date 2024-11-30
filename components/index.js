"use client";

import React, { useState } from "react";
import {
  Database,
  Brain,
  Settings,
  Code2,
  MessageSquare,
  Shield,
  Briefcase,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export const RoleIcon = ({ role, ...props }) => {
  const icons = {
    "Data Engineer": Database,
    "ML Engineer": Brain,
    "MLOps Engineer": Settings,
    "AI Engineer": Code2,
    "Prompt Engineer": MessageSquare,
    "AI Ethics Specialist": Shield,
    "AI Product Manager": Briefcase,
  };
  const IconComponent = icons[role] || Users;
  return <IconComponent className={`w-8 h-8 text-blue-600 ${props.className}`} />;
};

export const InteractiveSection = ({ content, example, how }) => {
  const [showExample, setShowExample] = useState(false);
  const [showHow, setShowHow] = useState(false);

  return (
    <div className="mt-2">
      <div className="text-gray-700">{content}</div>
      <div className="mt-2">
        <button
          onClick={() => setShowExample(!showExample)}
          className="text-gray-600 text-sm hover:text-blue-600 focus:outline-none flex items-center gap-1"
        >
          {showExample ? "Hide example" : "Show example"}
          {showExample ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>

        {showExample && (
          <div className="mt-2 space-y-2">
            <div className="text-gray-600 text-sm italic pl-2 border-l-2 border-gray-200">
              {example}
            </div>
            <button
              onClick={() => setShowHow(!showHow)}
              className="text-gray-600 text-sm hover:text-blue-600 focus:outline-none flex items-center gap-1"
            >
              {showHow ? "Hide technical detail" : "More technical detail"}
              {showHow ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {showHow && (
              <div className="bg-gray-50 p-3 rounded text-sm">
                <strong>How:</strong> {how}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export { RoleDifferencesTable } from "./RoleDifferencesTable";
