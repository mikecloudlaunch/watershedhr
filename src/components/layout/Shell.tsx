"use client";

import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { UserRole } from "@/types";

interface ShellProps {
  role: UserRole;
  onRoleChange: (role: UserRole) => void;
  onViewProfile?: () => void;
  children: React.ReactNode;
}

export function Shell({ role, onRoleChange, onViewProfile, children }: ShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header role={role} onRoleChange={onRoleChange} onViewProfile={onViewProfile} />
      <main className="mx-auto max-w-7xl px-4 py-6">{children}</main>
      <Footer />
    </div>
  );
}