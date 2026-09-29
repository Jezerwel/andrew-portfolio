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
    <section
      id={id}
      className={cn("scroll-mt-24 w-full px-5 py-20 sm:px-8 md:py-24 lg:py-28", className)}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
};
