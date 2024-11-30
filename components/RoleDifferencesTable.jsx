import React from "react";
import { roleDifferences } from "@/data";

export function RoleDifferencesTable({ roleName, scrollToRole }) {
  return (
    <div className="mt-4">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="text-left text-sm font-semibold text-gray-900 pb-2">
              Role
            </th>
            <th className="text-left text-sm font-semibold text-gray-900 pb-2">
              Key Differences
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {Object.entries(roleDifferences[roleName] || {}).map(
            ([otherRole, difference]) => (
              <tr key={otherRole}>
                <td className="py-2 pr-4 align-top truncate">
                  <button
                    onClick={() => scrollToRole(otherRole.replace(/\s+/g, "-"))}
                    className="text-blue-600 hover:underline text-sm text-left"
                  >
                    {otherRole}
                  </button>
                </td>
                <td className="py-2 text-sm text-gray-600">{difference}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
