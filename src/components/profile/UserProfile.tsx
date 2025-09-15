"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { UserProfile as UserProfileType } from "@/types";
import {
  User,
  Mail,
  Phone,
  Building,
  Calendar,
  Clock,
  Globe,
  Bell,
  Settings,
  Upload,
  Save,
  Edit,
} from "lucide-react";

interface UserProfileProps {
  user: UserProfileType;
  onSave?: (updatedUser: Partial<UserProfileType>) => void;
  isEditing?: boolean;
  onToggleEdit?: () => void;
}

export function UserProfile({
  user,
  onSave,
  isEditing = false,
  onToggleEdit,
}: UserProfileProps) {
  const [formData, setFormData] = useState(user);

  const handleSave = () => {
    onSave?.(formData);
    onToggleEdit?.();
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNestedChange = (parent: string, field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [parent]: {
        ...(prev[parent as keyof UserProfileType] as Record<string, string | boolean>),
        [field]: value,
      },
    }));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-AU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Profile Header */}
      <Card className="rounded-2xl shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-start gap-6">
            <div className="relative">
              <UserAvatar
                name={formData.name}
                avatar={formData.avatar}
                size="xl"
                showOnlineStatus
                isOnline={true}
              />
              {isEditing && (
                <Button
                  size="sm"
                  className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full btn-primary-watershed"
                >
                  <Upload className="h-3 w-3" />
                </Button>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  {isEditing ? (
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="position">Position</Label>
                        <Input
                          id="position"
                          value={formData.position || ""}
                          onChange={(e) => handleInputChange("position", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <h1 className="text-2xl font-bold text-foreground">{formData.name}</h1>
                      <p className="text-muted-foreground mt-1">{formData.position}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="secondary" className="badge-yellow">
                          {formData.role}
                        </Badge>
                        {!formData.profileComplete && (
                          <Badge variant="outline">Profile Incomplete</Badge>
                        )}
                      </div>
                    </>
                  )}
                </div>
                <Button
                  onClick={isEditing ? handleSave : onToggleEdit}
                  className={`rounded-xl ${
                    isEditing ? "btn-primary-watershed" : "btn-outline-watershed"
                  }`}
                >
                  {isEditing ? <Save className="h-4 w-4 mr-2" /> : <Edit className="h-4 w-4 mr-2" />}
                  {isEditing ? "Save Changes" : "Edit Profile"}
                </Button>
              </div>
              {!isEditing && formData.bio && (
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {formData.bio}
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Details Tabs */}
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-3 rounded-xl">
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        {/* Personal Information */}
        <TabsContent value="personal" className="space-y-4">
          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </Label>
                  {isEditing ? (
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-1"
                    />
                  ) : (
                    <p className="mt-1 text-sm text-muted-foreground">{formData.email}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone
                  </Label>
                  {isEditing ? (
                    <Input
                      id="phone"
                      value={formData.phone || ""}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-1"
                    />
                  ) : (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {formData.phone || "Not provided"}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company" className="flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    Company
                  </Label>
                  {isEditing ? (
                    <Input
                      id="company"
                      value={formData.company || ""}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="mt-1"
                    />
                  ) : (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {formData.company || "Not provided"}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="department" className="flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    Department
                  </Label>
                  {isEditing ? (
                    <Input
                      id="department"
                      value={formData.department || ""}
                      onChange={(e) => handleInputChange("department", e.target.value)}
                      className="mt-1"
                    />
                  ) : (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {formData.department || "Not provided"}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="bio" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Bio
                </Label>
                {isEditing ? (
                  <Textarea
                    id="bio"
                    value={formData.bio || ""}
                    onChange={(e) => handleInputChange("bio", e.target.value)}
                    className="mt-1"
                    rows={3}
                    placeholder="Tell us about yourself..."
                  />
                ) : (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {formData.bio || "No bio provided"}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Started: {formatDate(formData.startDate || formData.createdAt)}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Last login: {formatDate(formData.lastLogin)}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Preferences */}
        <TabsContent value="preferences" className="space-y-4">
          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    Timezone
                  </Label>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {formData.timezone || "Australia/Sydney"}
                  </p>
                </div>
                <div>
                  <Label className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    Language
                  </Label>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {formData.language || "English"}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  Notification Preferences
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <p className="text-xs text-muted-foreground">
                        Receive notifications via email
                      </p>
                    </div>
                    <Switch
                      id="email-notifications"
                      checked={formData.notifications.email}
                      onCheckedChange={(checked) =>
                        handleNestedChange("notifications", "email", checked)
                      }
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="push-notifications">Push Notifications</Label>
                      <p className="text-xs text-muted-foreground">
                        Receive push notifications in browser
                      </p>
                    </div>
                    <Switch
                      id="push-notifications"
                      checked={formData.notifications.push}
                      onCheckedChange={(checked) =>
                        handleNestedChange("notifications", "push", checked)
                      }
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="sms-notifications">SMS Notifications</Label>
                      <p className="text-xs text-muted-foreground">
                        Receive notifications via SMS
                      </p>
                    </div>
                    <Switch
                      id="sms-notifications"
                      checked={formData.notifications.sms}
                      onCheckedChange={(checked) =>
                        handleNestedChange("notifications", "sms", checked)
                      }
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security" className="space-y-4">
          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Button className="w-full justify-start rounded-xl btn-outline-watershed">
                  Change Password
                </Button>
                <Button className="w-full justify-start rounded-xl btn-outline-watershed">
                  Enable Two-Factor Authentication
                </Button>
                <Button className="w-full justify-start rounded-xl btn-outline-watershed">
                  Download Account Data
                </Button>
                <Button variant="destructive" className="w-full justify-start rounded-xl">
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}