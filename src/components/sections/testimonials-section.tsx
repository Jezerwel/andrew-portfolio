import { SectionWrapper } from "@/components/ui/section-wrapper";
import { clientTransformations } from "@/lib/data/clients";

export const TestimonialsSection = () => {
  return (
    <SectionWrapper id="testimonials" className="bg-background relative">
      <div className="text-center mb-16 relative z-10">
        <div className="inline-block mb-4 px-3 py-1 border border-primary/40 text-[10px] tracking-[0.2em] uppercase text-primary font-bold">
          Testimonials
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
          Client Feedback
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Real words from real people who put in the work.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 relative z-10 max-w-4xl mx-auto">
        {clientTransformations.map((client) => (
          <div
            key={client.id}
            className="relative p-6 border border-border bg-card/50 hover:border-primary/40 transition-colors duration-300 group"
          >
            <div className="absolute top-0 left-0 h-full w-[3px] bg-primary/20 group-hover:bg-primary transition-colors duration-300" />
            <div className="mb-4">
              <svg
                className="w-8 h-8 text-primary/30"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="text-base mb-6 text-foreground leading-relaxed">
              &quot;{client.testimonial}&quot;
            </blockquote>
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div>
                <p className="font-bold text-foreground uppercase tracking-wide text-sm">{client.name}</p>
                <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">
                  {client.goal}
                </p>
              </div>
              <span className="px-2 py-1 bg-gold text-gold-foreground text-[10px] font-bold tracking-[0.1em] uppercase">
                {client.timeframe}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
