export interface Adviser {
  id: string;
  name: string;
  language: string;
  speciality: string;
  hoursThisWeek: number;
  nextAppointment: string;
  avatar?: string;
}

export interface Client {
  id: string;
  name: string;
  fund: string;
  nextAppointment: string;
  adviser: string;
  adviserId: string;
  avatar?: string;
}

export interface MeetingSummary {
  id: string;
  clientId: string;
  clientName: string;
  adviserId: string;
  adviserName: string;
  date: string;
  summary: string;
  type: "General advice" | "Specific advice" | "Consultation";
  approved: boolean;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  message: string;
  timestamp: string;
  type: "text" | "file";
  fileName?: string;
}

export interface ComplianceDocument {
  id: string;
  name: string;
  status: "complete" | "expires" | "pending";
  expiryDate?: string;
}

export type UserRole = "Super Fund" | "Adviser" | "Client";

export interface User {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  avatar?: string;
  phone?: string;
  company?: string;
  position?: string;
  department?: string;
  startDate?: string;
  bio?: string;
  timezone?: string;
  language?: string;
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  preferences: {
    theme: "dark" | "light";
    dateFormat: "dd/mm/yyyy" | "mm/dd/yyyy" | "yyyy-mm-dd";
    timeFormat: "12h" | "24h";
  };
}

export interface UserProfile extends User {
  createdAt: string;
  lastLogin: string;
  profileComplete: boolean;
}