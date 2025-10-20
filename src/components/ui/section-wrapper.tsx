import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export const SectionWrapper = ({
  id,
  children,
  className,
}: SectionWrapperProps) => {
  return (
    <section id={id} className={cn("py-20 px-4 md:px-8 w-full", className)}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
};
