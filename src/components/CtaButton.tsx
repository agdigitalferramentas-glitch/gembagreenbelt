import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface CtaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const CtaButton = ({ children, className, ...props }: CtaButtonProps) => (
  <button
    {...props}
    className={cn(
      "group relative w-full sm:w-auto sm:min-w-[360px] h-14 rounded-full bg-accent text-accent-foreground font-bold text-sm sm:text-base tracking-wide uppercase shadow-[0_0_30px_hsla(156,58%,45%,0.35)] hover:shadow-[0_0_45px_hsla(156,58%,45%,0.55)] hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed",
      className,
    )}
  >
    <span className="flex items-center justify-center gap-3 pl-12 pr-16">{children}</span>
    <span className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-background text-accent group-hover:translate-x-1 transition-transform">
      <ArrowRight className="w-5 h-5" />
    </span>
  </button>
);

export default CtaButton;
