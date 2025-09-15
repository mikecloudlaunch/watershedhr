"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { MeetingSummary } from "@/types";

interface MeetingSummaryCardProps {
  summary: MeetingSummary;
  onOpen?: () => void;
}

export function MeetingSummaryCard({ summary, onOpen }: MeetingSummaryCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="flex items-center justify-between">
        <div className="font-medium text-card-foreground">
          {summary.clientName} • {summary.adviserName}
        </div>
        <Badge className="badge-yellow border-none">{summary.type}</Badge>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{summary.summary}</p>
            <Button
        className="mt-2 rounded-xl px-2 btn-ghost-watershed"
      >
        Open <ChevronRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );
}