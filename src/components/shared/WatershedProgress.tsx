"use client";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface WatershedProgressProps {
  value: number;
  className?: string;
  showGlow?: boolean;
}

export function WatershedProgress({ 
  value, 
  className, 
  showGlow = false 
}: WatershedProgressProps) {
  return (
    <div className={cn("relative", className)}>
      <Progress 
        value={value} 
        className={cn(
          "h-2",
          showGlow && "watershed-accent-glow"
        )}
      />
      <style jsx>{`
        .progress-yellow {
          background: hsl(51, 100%, 50%);
        }
      `}</style>
    </div>
  );
}