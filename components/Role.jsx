import React, { useState } from "react";
import { RoleIcon, InteractiveSection } from "./index";
import { ChevronUp, ChevronDown } from "lucide-react";
import { RoleDifferencesTable } from "./RoleDifferencesTable";

export function Role({ roleName, roleInfo, activeRole, scrollToRole }) {
  const [show, setShow] = useState(false);
  const [showComparisons, setShowComparisons] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  const toggleComparisons = () => {
    setShowComparisons(!showComparisons);
  };

  return (
    <div className="pl-16">
      <div
        key={roleName}
        id={roleName.replace(/\s+/g, "-")}
        className={`border rounded-lg p-6 relative bg-white shadow-md transition-all duration-300 ${
          activeRole === roleName.replace(/\s+/g, "-")
            ? "ring-2 ring-blue-500"
            : ""
        }`}
      >
        <div className="flex items-center">
          <div className="absolute -left-16 -z-10 px-4 py-3 border border-1 border-gray-200 rounded-lg inline-block border-r-2 bg-white border-r-white rounded-r-none">
            <RoleIcon role={roleName} />
          </div>
          <div className="flex items-center gap-4 justify-between w-full">
            <div>
              <h2 className="text-xl font-semibold">{roleName}</h2>
              <p className="text-gray-600">{roleInfo.description}</p>
            </div>
            <div>
              <button
                onClick={toggleShow}
                className="text-gray-600 text-sm hover:text-blue-600 focus:outline-none flex items-center gap-1"
              >
                {show ? "Hide" : "Show"}
                {show ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        {show && (
          <>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 mt-6">
              <div>
                <h3 className="font-semibold text-gray-500 border border-1 border-gray-200 inline-block px-4 py-1 bg-gray-50 text-xs border-b-gray-50 ml-3 rounded-t-lg relative top-[1px]">
                  Needs
                </h3>
                {roleInfo.needs.map((need, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 p-4 rounded mb-2 border border-1 border-gray-200 shadow-sm"
                  >
                    <div className="flex justify-between items-baseline space-x-2">
                      <div className="font-semibold text-sm text-gray-900">
                        {need.what}
                      </div>
                      <div className="text-gray-500 text-xs text-right">
                        from:{" "}
                        {need.from.map((fromRole, i) => (
                          <span key={i}>
                            {i > 0 && ", "}
                            <button
                              onClick={() =>
                                scrollToRole(fromRole.replace(/\s+/g, "-"))
                              }
                              className="text-blue-600 hover:underline"
                            >
                              {fromRole}
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                    <InteractiveSection
                      content={need.usage}
                      example={need.example}
                      how={need.how}
                    />
                  </div>
                ))}
              </div>

              <div>
                <h3 className="font-semibold text-gray-500 border border-1 border-gray-200 inline-block px-4 py-1 bg-gray-50 text-xs border-b-gray-50 ml-3 rounded-t-lg relative top-[1px]">
                  Provides
                </h3>
                {roleInfo.provides.map((provide, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 p-4 rounded mb-2 border border-1 border-gray-200 shadow-sm"
                  >
                    <div className="flex justify-between items-baseline space-x-2">
                      <div className="font-semibold text-sm text-gray-900">
                        {provide.what}
                      </div>
                      <div className="text-gray-500 text-xs text-right">
                        to:{" "}
                        {provide.to.map((toRole, i) => (
                          <span key={i}>
                            {i > 0 && ", "}
                            <button
                              onClick={() =>
                                scrollToRole(toRole.replace(/\s+/g, "-"))
                              }
                              className="text-blue-600 hover:underline"
                            >
                              {toRole}
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                    <InteractiveSection
                      content={provide.usage}
                      example={provide.example}
                      how={provide.how}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-2 p-4">
              <h3 className="font-semibold text-base">
                Differences with other roles
              </h3>
              <RoleDifferencesTable
                roleName={roleName}
                scrollToRole={scrollToRole}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
