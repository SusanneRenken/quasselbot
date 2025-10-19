import Link from "next/link";
import { GitIcon } from "@/components/icons";

export default function LandingFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-input bg-background">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">© {year} — QuasselBot</div>

        <div className="flex items-center gap-3">
          <button className="text-sm text-muted-foreground" disabled>
            Impressum
          </button>
          <button className="text-sm text-muted-foreground" disabled>
            Datenschutz
          </button>
        </div>

        <div>
          <Link
            href="https://github.com/SusanneRenken"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm"
            aria-label="GitHub"
          >
            <GitIcon />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
