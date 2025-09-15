"use client";

import React from "react";
import { Shell } from "@/components/layout/Shell";
import { RoleNavigation } from "@/components/layout/RoleNavigation";
import { SuperFundDashboard } from "@/components/dashboards/SuperFundDashboard";
import { AdviserDashboard } from "@/components/dashboards/AdviserDashboard";
import { ClientPortal } from "@/components/dashboards/ClientPortal";
import { UserProfile } from "@/components/profile/UserProfile";
import { UserRole, UserProfile as UserProfileType } from "@/types";
import { mockUserProfiles } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function DemoPage() {
  const [role, setRole] = React.useState<UserRole>("Super Fund");
  const [currentView, setCurrentView] = React.useState<"dashboard" | "profile">("dashboard");
  const [isEditingProfile, setIsEditingProfile] = React.useState(false);

  // Get the current user profile based on role
  const getCurrentUser = (): UserProfileType => {
    const roleKey = role.toLowerCase().replace(" ", "-") as keyof typeof mockUserProfiles;
    return mockUserProfiles[roleKey] || mockUserProfiles["super-fund"];
  };

  const currentUser = getCurrentUser();

  const handleViewProfile = () => {
    setCurrentView("profile");
    setIsEditingProfile(false);
  };

  const handleBackToDashboard = () => {
    setCurrentView("dashboard");
    setIsEditingProfile(false);
  };

  const handleSaveProfile = (updatedUser: Partial<UserProfileType>) => {
    // In a real app, this would save to backend
    console.log("Saving profile:", updatedUser);
    // For now, just toggle edit mode off
    setIsEditingProfile(false);
  };

  const renderContent = () => {
    if (currentView === "profile") {
      return (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBackToDashboard}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Dashboard
            </button>
          </div>
          <UserProfile
            user={currentUser}
            isEditing={isEditingProfile}
            onToggleEdit={() => setIsEditingProfile(!isEditingProfile)}
            onSave={handleSaveProfile}
          />
        </div>
      );
    }

    // Dashboard view
    switch (role) {
      case "Super Fund":
        return <SuperFundDashboard />;
      case "Adviser":
        return <AdviserDashboard />;
      case "Client":
        return <ClientPortal />;
      default:
        return <SuperFundDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Demo Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/">
                <Button className="btn-ghost-watershed">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to App
                </Button>
              </Link>
              <div>
                <h1 className="text-lg font-semibold text-foreground">Watershed HR Demo</h1>
                <p className="text-sm text-muted-foreground">
                  Interactive demo with role switching capabilities
                </p>
              </div>
            </div>
            <Badge className="badge-yellow">
              DEMO MODE
            </Badge>
          </div>
        </div>
      </div>

      <Shell role={role} onRoleChange={setRole} onViewProfile={handleViewProfile}>
        {currentView === "dashboard" && (
          <RoleNavigation role={role} onRoleChange={setRole} />
        )}
        {renderContent()}
      </Shell>
    </div>
  );
}