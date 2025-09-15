"use client";

import { motion } from "framer-motion";
import {
  CalendarIcon,
  Users,
  Clock,
  MessageSquare,
  Video,
  FileCheck,
  UploadCloud,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClientCard } from "@/components/shared/ClientCard";
import { mockClients, mockComplianceDocuments } from "@/data/mockData";

export function AdviserDashboard() {
  const handleEditSchedule = () => {
    console.log("Edit schedule clicked");
  };

  const handleExportTimesheet = () => {
    console.log("Export timesheet clicked");
  };

  const handleUploadDocument = () => {
    console.log("Upload document clicked");
  };

  const handleApproveAndShare = () => {
    console.log("Approve and share clicked");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="grid gap-6 md:grid-cols-3"
    >
      {/* Availability Calendar */}
      <Card className="rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5" />
            My availability
          </CardTitle>
          <CardDescription>Set weekly part‑time windows</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2 text-center text-xs">
            {"MTWTFSS".split("").map((day, i) => (
              <div key={i} className="rounded-xl border p-2">
                <div className="font-semibold">{day}</div>
                <div className="mt-1 text-slate-500">9–1</div>
                <div className="text-slate-500">2–6</div>
              </div>
            ))}
          </div>
          <Button
            className="mt-3 w-full rounded-xl btn-outline-watershed"
            onClick={handleEditSchedule}
          >
            Edit schedule
          </Button>
        </CardContent>
      </Card>

      {/* Assigned Clients */}
      <Card className="rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Assigned clients
          </CardTitle>
          <CardDescription>Quick access to files & chat</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-64 pr-2">
            {mockClients.map((client) => (
              <ClientCard
                key={client.id}
                client={client}
                onChat={() => console.log("Chat with", client.name)}
                onJoinMeeting={() => console.log("Join meeting with", client.name)}
              />
            ))}
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Hours Logged */}
      <Card className="rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Hours logged
          </CardTitle>
          <CardDescription>This month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-sm">
            <span>Total</span>
            <span className="font-semibold">28 hrs</span>
          </div>
          <Progress value={60} className="mt-2" />
          <Separator className="my-3" />
          <div className="grid gap-2 text-sm">
            {mockClients.map((client, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="text-muted-foreground">{client.name}</div>
                <div className="font-medium text-foreground">{(i + 1) * 3} hrs</div>
              </div>
            ))}
          </div>
          <Button
            className="mt-3 w-full rounded-xl btn-outline-watershed"
            onClick={handleExportTimesheet}
          >
            Export timesheet
          </Button>
        </CardContent>
      </Card>

      {/* Client Chat & Files */}
      <Card className="md:col-span-2 rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Client chat & files
          </CardTitle>
          <CardDescription>Secure messaging with uploads</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-[1fr,280px]">
            <div className="rounded-2xl border border-border bg-card p-3">
              <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" /> Sarah Taylor
              </div>
              <div className="space-y-2 text-sm">
                <div className="w-fit max-w-[80%] rounded-2xl chat-bubble-client px-3 py-2">
                  Hi, can we move our call?
                </div>
                <div className="ml-auto w-fit max-w-[80%] rounded-2xl chat-bubble-user px-3 py-2">
                  Sure, how about Thu 2pm?
                </div>
                <div className="w-fit max-w-[80%] rounded-2xl chat-bubble-client px-3 py-2">
                  Here is my statement{" "}
                  <Badge className="ml-1 badge-dark" variant="outline">
                    file.pdf
                  </Badge>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Input 
                  placeholder="Type a message…" 
                  className="rounded-xl bg-input border-border text-foreground placeholder:text-muted-foreground" 
                />
                <Button className="rounded-xl btn-ghost-watershed">
                  <UploadCloud className="mr-2 h-4 w-4" />
                  Upload
                </Button>
                <Button className="rounded-xl btn-primary-watershed">Send</Button>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-3">
              <div className="text-sm font-medium text-card-foreground">Files</div>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="flex items-center justify-between text-muted-foreground">
                  <span>statement.pdf</span>
                  <Button size="sm" className="rounded-xl btn-ghost-watershed">
                    Open
                  </Button>
                </li>
                <li className="flex items-center justify-between text-muted-foreground">
                  <span>summary-2025-09-10.docx</span>
                  <Button size="sm" className="rounded-xl btn-ghost-watershed">
                    Open
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Compliance */}
      <Card className="rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCheck className="h-5 w-5" />
            Compliance
          </CardTitle>
          <CardDescription>Docs & renewal reminders</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            {mockComplianceDocuments.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between">
                <span>{doc.name}</span>
                <Badge
                  variant={doc.status === "complete" ? "secondary" : "secondary"}
                >
                  {doc.status === "expires" && doc.expiryDate
                    ? `expires ${doc.expiryDate}`
                    : doc.status}
                </Badge>
              </div>
            ))}
          </div>
          <Button
            className="mt-3 w-full rounded-xl btn-outline-watershed"
            onClick={handleUploadDocument}
          >
            Upload document
          </Button>
        </CardContent>
      </Card>

      {/* Meeting Transcript & AI Summary */}
      <Card className="md:col-span-3 rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="h-5 w-5" />
            Meeting transcript & AI summary
          </CardTitle>
          <CardDescription>Generated from embedded Zoom</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="summary">
            <TabsList className="rounded-xl">
              <TabsTrigger value="summary">AI Summary</TabsTrigger>
              <TabsTrigger value="transcript">Transcript</TabsTrigger>
              <TabsTrigger value="notes">File Notes</TabsTrigger>
            </TabsList>
            <TabsContent value="summary" className="mt-3">
              <Textarea
                className="min-h-[140px] rounded-xl"
                defaultValue={
                  "• General advice on contribution caps\n• Action item: client to review fund docs\n• Follow‑up: schedule check‑in next week"
                }
              />
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <ShieldCheck className="h-4 w-4" /> Share with fund & client
                </div>
                <Button className="rounded-xl btn-primary-watershed" onClick={handleApproveAndShare}>
                  Approve & Share
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="transcript" className="mt-3">
              <ScrollArea className="h-48 rounded-xl border p-3 text-sm">
                <p>[00:00] Introductions…</p>
                <p>[03:12] Discussed contribution limits…</p>
                <p>[12:45] Client questions…</p>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="notes" className="mt-3">
              <Textarea
                className="min-h-[120px] rounded-xl"
                placeholder="Record file note…"
              />
              <div className="mt-2 flex justify-end">
                <Button className="rounded-xl btn-primary-watershed">Save Note</Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  );
}