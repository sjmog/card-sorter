"use client";

import React, { useState } from "react";
import { Role } from "./Role";

export default function Roles({ roles }) {
  const [activeRole, setActiveRole] = useState(null);

  const scrollToRole = (roleId) => {
    const element = document.getElementById(roleId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveRole(roleId);
      setTimeout(() => setActiveRole(null), 2000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="space-y-8">
        {Object.entries(roles).map(([roleName, roleInfo]) => (
          <Role
            roleName={roleName}
            roleInfo={roleInfo}
            activeRole={activeRole}
            scrollToRole={scrollToRole}
          />
        ))}
      </div>
    </div>
  );
}
