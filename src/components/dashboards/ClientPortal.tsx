"use client";

import { motion } from "framer-motion";
import { Home, MessageSquare, Video, FileText, UploadCloud } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function ClientPortal() {
  // For demo purposes, we'll get client data dynamically
  const adviser = {
    name: "John Smith",
    speciality: "Retirement Planning",
  };

  const handleJoinMeeting = () => {
    console.log("Join meeting clicked");
  };

  const handleViewDetails = () => {
    console.log("View details clicked");
  };

  const handleSendMessage = () => {
    console.log("Send message clicked");
  };

  const handleUploadFile = () => {
    console.log("Upload file clicked");
  };

  const handleOpenSummary = (sessionNumber: number) => {
    console.log("Open summary for session", sessionNumber);
  };

  const mockSessions = [
    {
      id: 1,
      date: "Today 2:00pm",
      summary: "Summary: Contribution caps; follow‑up items recorded.",
    },
    {
      id: 2,
      date: "Thu 11:00am",
      summary: "Summary: Insurance review; recommendations provided.",
    },
    {
      id: 3,
      date: "Mon 10:30am",
      summary: "Summary: Retirement planning strategies discussed.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="grid gap-6 md:grid-cols-3"
    >
      {/* Dashboard Overview */}
      <Card className="rounded-2xl shadow-sm md:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            Dashboard
          </CardTitle>
          <CardDescription>
            Your adviser & upcoming session
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-muted text-muted-foreground">JS</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-card-foreground">{adviser.name}</div>
              <div className="text-xs text-muted-foreground">{adviser.speciality}</div>
            </div>
            <Badge className="ml-auto badge-yellow border-none">
              Assigned
            </Badge>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-3">
              <div className="text-sm text-muted-foreground">Next meeting</div>
              <div className="mt-1 text-lg font-semibold text-card-foreground">Thu 11:00am</div>
              <Button
                className="mt-2 w-full rounded-xl btn-primary-watershed"
                onClick={handleJoinMeeting}
              >
                <Video className="mr-2 h-4 w-4" />
                Join
              </Button>
            </div>
            <div className="rounded-2xl border border-border bg-card p-3">
              <div className="text-sm text-muted-foreground">Latest summary</div>
              <p className="mt-1 text-sm text-card-foreground">
                General advice on contributions. Follow‑up next week.
              </p>
              <Button
                className="mt-2 w-full rounded-xl btn-outline-watershed"
                onClick={handleViewDetails}
              >
                View details
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chat Section */}
      <Card className="rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Chat
          </CardTitle>
          <CardDescription>Secure messages & files</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="w-fit max-w-[85%] rounded-2xl chat-bubble-client px-3 py-2">
              Please upload your latest super statement
            </div>
            <div className="ml-auto w-fit max-w-[85%] rounded-2xl chat-bubble-user px-3 py-2">
              Done — attached here.
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <Input 
              placeholder="Type a message…" 
              className="rounded-xl bg-input border-border text-foreground placeholder:text-muted-foreground" 
            />
            <Button
              className="rounded-xl btn-ghost-watershed"
              onClick={handleUploadFile}
            >
              <UploadCloud className="mr-2 h-4 w-4" />
              Upload
            </Button>
            <Button className="rounded-xl btn-primary-watershed" onClick={handleSendMessage}>
              Send
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Meeting Summaries */}
      <Card className="md:col-span-3 rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Meeting summaries
          </CardTitle>
          <CardDescription>Read‑only, adviser‑approved</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            {mockSessions.map((session) => (
              <div key={session.id} className="rounded-2xl border border-border bg-card p-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-card-foreground">Session #{session.id}</span>
                  <span className="text-xs text-muted-foreground">{session.date}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{session.summary}</p>
                <Button
                  className="mt-1 rounded-xl px-2 btn-ghost-watershed"
                  onClick={() => handleOpenSummary(session.id)}
                >
                  Open
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}