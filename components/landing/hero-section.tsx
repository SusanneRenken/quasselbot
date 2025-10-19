"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BotIcon } from "@/components/icons";

export default function HeroSection() {
  // CTA should link to the login page
  const authPath = "/login";

  return (
    <header
      role="banner"
      className="w-full bg-background py-20 px-6 md:py-32"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-8 items-start">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center rounded-full bg-secondary p-2">
            <BotIcon />
          </span>
          <span className="text-sm text-muted-foreground">QuasselBot</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
          QuasselBot – der charmanteste KI-Chatbot aus Norddeutschland.
        </h1>

        <p className="max-w-2xl text-muted-foreground">
          Unterhalte dich, lerne oder quassle einfach drauflos – mit deinem
          smarten Chat-Buddy.
        </p>

        <div className="mt-4">
          <Button asChild size="lg">
            <Link href={authPath} aria-label="Losquasseln">
              Losquasseln
            </Link>
          </Button>
        </div>

        <div className="mt-6 text-sm text-muted-foreground" aria-hidden>
          {/* subtle typing indicator */}
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-pulse" />
            <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-pulse delay-75" />
            <span className="w-2 h-2 rounded-full bg-muted-foreground/30 animate-pulse delay-150" />
            <span className="ml-2">Quassel... </span>
          </div>
        </div>
      </div>
    </header>
  );
}
