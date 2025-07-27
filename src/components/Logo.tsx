import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-6 w-6", className)}
    >
      <path d="M2 20h20" />
      <path d="M4 19V9.5a2.5 2.5 0 0 1 2.5-2.5h11A2.5 2.5 0 0 1 20 9.5V19" />
      <path d="M8 19v-5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V19" />
      <path d="M11 19v-2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V19" />
      <path d="M12 7V4" />
      <path d="M10 4h4" />
    </svg>
  );
}
