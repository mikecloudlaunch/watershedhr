"use client";

import React, { useState } from "react";
import { Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserProfileDropdown } from "@/components/profile/UserProfileDropdown";
import { UserRole, UserProfile } from "@/types";
import { mockUserProfiles } from "@/data/mockData";

interface HeaderProps {
  role: UserRole;
  onRoleChange: (role: UserRole) => void;
  onViewProfile?: () => void;
}

export function Header({ role, onRoleChange, onViewProfile }: HeaderProps) {
  // Mock notification state - in a real app this would come from props or context
  const [notificationCount, setNotificationCount] = useState(3); // Simulating 3 unread notifications

  // Get the current user profile based on role
  const getCurrentUser = (): UserProfile => {
    const roleKey = role.toLowerCase().replace(" ", "-") as keyof typeof mockUserProfiles;
    return mockUserProfiles[roleKey] || mockUserProfiles["super-fund"];
  };

  const currentUser = getCurrentUser();

  const handleNotificationClick = () => {
    // Simulate clearing notifications when clicked
    setNotificationCount(0);
  };

  const handleProfileAction = (action: string) => {
    switch (action) {
      case "profile":
        onViewProfile?.();
        break;
      case "logout":
        console.log("Logout clicked");
        break;
      default:
        console.log(`${action} clicked`);
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground font-bold">
            WS
          </div>
          <div className="leading-tight">
            <div className="text-lg font-semibold text-foreground">Watershed HR</div>
            <div className="text-xs text-muted-foreground">
              Capacity • Compliance • Clarity
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-xl border border-border bg-card px-2 md:flex">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Quick search…"
              className="w-40 border-0 bg-transparent py-1 text-sm outline-none focus-visible:ring-0"
            />
          </div>
          <div className="relative">
            <button 
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-transparent text-foreground transition-all duration-200 hover:bg-yellow-500/10 hover:text-yellow-400"
              onClick={handleNotificationClick}
            >
              <Bell className="h-5 w-5" />
            </button>
            {notificationCount > 0 && (
              <Badge 
                className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 text-xs font-bold badge-yellow flex items-center justify-center"
              >
                {notificationCount}
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="rounded-xl btn-outline-watershed">
                  Role: <span className="ml-1 font-semibold">{role}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="rounded-xl bg-popover border-border">
                <DropdownMenuItem onClick={() => onRoleChange("Super Fund")}>
                  Super Fund
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onRoleChange("Adviser")}>
                  Adviser
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onRoleChange("Client")}>
                  Client
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <UserProfileDropdown
              user={currentUser}
              onViewProfile={() => handleProfileAction("profile")}
              onSettings={() => handleProfileAction("settings")}
              onLogout={() => handleProfileAction("logout")}
            />
          </div>
        </div>
      </div>
    </header>
  );
}