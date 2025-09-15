"use client";

import { motion } from "framer-motion";
import { Users, CalendarIcon, CreditCard, FileText, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AdviserCard } from "@/components/shared/AdviserCard";
import { MeetingSummaryCard } from "@/components/shared/MeetingSummaryCard";
import { mockAdvisers, mockClients, mockMeetingSummaries } from "@/data/mockData";

export function SuperFundDashboard() {
  const handleAssignAdviser = (adviserId: string) => {
    console.log("Assigning adviser:", adviserId);
  };

  const handleOpenSummary = (summaryId: string) => {
    console.log("Opening summary:", summaryId);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="grid gap-6 md:grid-cols-3"
    >
      {/* Active Advisers Section */}
      <Card className="md:col-span-2 rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Active advisers
          </CardTitle>
          <CardDescription>
            Browse, filter and assign advisers to clients.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {mockAdvisers.map((adviser) => (
              <AdviserCard
                key={adviser.id}
                adviser={adviser}
                onAssign={() => handleAssignAdviser(adviser.id)}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sidebar Cards */}
      <div className="grid gap-6">
        {/* Upcoming Meetings */}
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5" />
              Upcoming meetings
            </CardTitle>
            <CardDescription>Across engaged advisers</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>When</TableHead>
                  <TableHead>Adviser</TableHead>
                  <TableHead>Client</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockClients.slice(0, 3).map((client, i) => (
                  <TableRow key={i}>
                    <TableCell>{client.nextAppointment}</TableCell>
                    <TableCell>{client.adviser}</TableCell>
                    <TableCell>{client.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Invoices */}
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Invoices
            </CardTitle>
            <CardDescription>Current billing cycle</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between text-sm">
              <div>Total due</div>
              <div className="text-lg font-semibold">$5,400</div>
            </div>
            <Progress value={66} className="mt-3" />
            <Button className="mt-3 w-full rounded-xl btn-outline-watershed">
              <Download className="mr-2 h-4 w-4" />
              Download statement
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Meeting Summaries */}
      <Card className="md:col-span-3 rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Recent meeting summaries
          </CardTitle>
          <CardDescription>
            AI-generated, adviser-approved summaries
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            {mockMeetingSummaries.map((summary) => (
              <MeetingSummaryCard
                key={summary.id}
                summary={summary}
                onOpen={() => handleOpenSummary(summary.id)}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}