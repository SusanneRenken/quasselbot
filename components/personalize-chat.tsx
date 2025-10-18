"use client";

import * as React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { toast } from "./toast";
import { setPersonalization, getPersonalization } from "@/lib/personalize";

export interface PersonalizeChatProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialText?: string;
}

export function PersonalizeChat({
  open,
  onOpenChange,
  initialText = "",
}: PersonalizeChatProps) {
  const [text, setText] = React.useState(initialText);

  React.useEffect(() => {
    if (open) {
      // Prefer the saved personalization, fall back to initialText
      const saved = getPersonalization();
      setText(saved ?? initialText);
    }
  }, [open, initialText]);

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Personalize chat</AlertDialogTitle>
          <AlertDialogDescription>
            Enter text to personalize your chat experience. Click Save to
            apply.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="mt-2">
          <textarea
            className="w-full min-h-[120px] resize-y rounded-md border px-3 py-2 text-sm"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your personalization text..."
          />
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              // persist personalization, close and show a toast
              setPersonalization(text || null);
              onOpenChange(false);
              toast({ type: "success", description: "Saved" });
            }}
          >
            Save
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default PersonalizeChat;
