"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Adviser } from "@/types";

interface AdviserCardProps {
  adviser: Adviser;
  onAssign?: () => void;
  showAssignButton?: boolean;
}

export function AdviserCard({
  adviser,
  onAssign,
  showAssignButton = true,
}: AdviserCardProps) {
  const initials = adviser.name
    .split(" ")
    .map((name) => name[0])
    .join("");

  return (
    <div className="rounded-2xl border border-border bg-card p-3">
      <div className="flex items-center gap-3">
        <Avatar className="h-9 w-9">
          <AvatarFallback className="bg-muted text-muted-foreground">{initials}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium text-card-foreground">{adviser.name}</div>
          <div className="text-xs text-muted-foreground">
            {adviser.speciality} •{" "}
            <Badge className="align-middle badge-yellow border-none">
              {adviser.language}
            </Badge>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between text-sm">
        <div className="text-muted-foreground">This week</div>
        <div className="font-semibold text-primary">{adviser.hoursThisWeek} hrs</div>
      </div>
            {showAssignButton && (
        <Button
          className="mt-3 w-full rounded-xl btn-primary-watershed"
          onClick={() => onAssign?.()}
        >
          Assign to Client
        </Button>
      )}
    </div>
  );
}