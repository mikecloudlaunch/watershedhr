"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { UserProfile } from "@/types";
import {
  User,
  Settings,
  Bell,
  LogOut,
  Shield,
  HelpCircle,
} from "lucide-react";

interface UserProfileDropdownProps {
  user: UserProfile;
  onViewProfile?: () => void;
  onSettings?: () => void;
  onLogout?: () => void;
}

export function UserProfileDropdown({
  user,
  onViewProfile,
  onSettings,
  onLogout,
}: UserProfileDropdownProps) {
  const handleMenuAction = (action: string) => {
    switch (action) {
      case "profile":
        onViewProfile?.();
        break;
      case "settings":
        onSettings?.();
        break;
      case "logout":
        onLogout?.();
        break;
      default:
        console.log(`${action} clicked`);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-auto p-2 rounded-xl btn-ghost-watershed">
          <div className="flex items-center gap-3">
            <UserAvatar
              name={user.name}
              avatar={user.avatar}
              size="sm"
              showOnlineStatus
              isOnline={true}
            />
            <div className="hidden md:block text-left">
              <div className="text-sm font-medium text-foreground">{user.name}</div>
              <div className="text-xs text-muted-foreground">{user.role}</div>
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-64 rounded-xl bg-popover border-border"
      >
        {/* User Info Header */}
        <DropdownMenuLabel className="p-4">
          <div className="flex items-center gap-3">
            <UserAvatar
              name={user.name}
              avatar={user.avatar}
              size="md"
              showOnlineStatus
              isOnline={true}
            />
            <div className="flex-1">
              <div className="font-medium text-foreground">{user.name}</div>
              <div className="text-sm text-muted-foreground">{user.email}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {user.company} • {user.role}
              </div>
            </div>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator />

        {/* Profile Actions */}
        <DropdownMenuItem
          onClick={() => handleMenuAction("profile")}
          className="cursor-pointer rounded-lg mx-2 my-1"
        >
          <User className="mr-2 h-4 w-4" />
          View Profile
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => handleMenuAction("settings")}
          className="cursor-pointer rounded-lg mx-2 my-1"
        >
          <Settings className="mr-2 h-4 w-4" />
          Account Settings
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => handleMenuAction("notifications")}
          className="cursor-pointer rounded-lg mx-2 my-1"
        >
          <Bell className="mr-2 h-4 w-4" />
          Notifications
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => handleMenuAction("security")}
          className="cursor-pointer rounded-lg mx-2 my-1"
        >
          <Shield className="mr-2 h-4 w-4" />
          Privacy & Security
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => handleMenuAction("help")}
          className="cursor-pointer rounded-lg mx-2 my-1"
        >
          <HelpCircle className="mr-2 h-4 w-4" />
          Help & Support
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => handleMenuAction("logout")}
          className="cursor-pointer rounded-lg mx-2 my-1 text-red-400 focus:text-red-400"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}