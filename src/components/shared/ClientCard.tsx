"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Video } from "lucide-react";
import { Client } from "@/types";

interface ClientCardProps {
  client: Client;
  onChat?: () => void;
  onJoinMeeting?: () => void;
  showActions?: boolean;
}

export function ClientCard({
  client,
  onChat,
  onJoinMeeting,
  showActions = true,
}: ClientCardProps) {
  return (
    <div className="mb-3 rounded-xl border border-border bg-card p-3">
      <div className="flex items-center justify-between">
        <div className="font-medium text-card-foreground">{client.name}</div>
        <Badge variant="secondary" className="badge-dark">
          {client.fund}
        </Badge>
      </div>
      <div className="mt-1 text-sm text-muted-foreground">
        Next: {client.nextAppointment}
      </div>
      {showActions && (
        <div className="mt-2 flex gap-2">
          <Button
            size="sm"
            className="rounded-xl btn-outline-watershed"
            onClick={onChat}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Chat
          </Button>
          <Button
            size="sm"
            className="rounded-xl btn-primary-watershed"
            onClick={onJoinMeeting}
          >
            <Video className="mr-2 h-4 w-4" />
            Join
          </Button>
        </div>
      )}
    </div>
  );
}