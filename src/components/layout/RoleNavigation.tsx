"use client";

import React from "react";
import { Building2, UserCog, Users } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserRole } from "@/types";

interface RoleNavigationProps {
  role: UserRole;
  onRoleChange: (role: UserRole) => void;
}

export function RoleNavigation({ role, onRoleChange }: RoleNavigationProps) {
  return (
    <Tabs value={role} onValueChange={(value) => onRoleChange(value as UserRole)}>
      <TabsList className="mb-6 rounded-xl">
        <TabsTrigger value="Super Fund">
          <Building2 className="mr-2 h-4 w-4" />
          Super Fund
        </TabsTrigger>
        <TabsTrigger value="Adviser">
          <UserCog className="mr-2 h-4 w-4" />
          Adviser
        </TabsTrigger>
        <TabsTrigger value="Client">
          <Users className="mr-2 h-4 w-4" />
          Client
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}