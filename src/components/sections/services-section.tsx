import { SectionWrapper } from "@/components/ui/section-wrapper";
import { services, trainingPrograms } from "@/lib/data/services";

export const ServicesSection = () => {
  return (
    <SectionWrapper id="services" className="bg-background relative">
      <div className="text-center mb-16">
        <div className="inline-block mb-4 px-3 py-1 border border-primary/40 text-[10px] tracking-[0.2em] uppercase text-primary font-bold">
          Services
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
          What I Offer
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Whether you want to get lean, build muscle, or step on stage — I have a program for you.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {services.map((service) => (
          <div
            data-reveal
            key={service.id}
            className="relative p-6 border border-border bg-card/50"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-primary tracking-tight" aria-hidden="true">
                {service.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight uppercase">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-xs px-2 py-1 border border-border text-muted-foreground tracking-wide"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-4xl mx-auto mt-16" aria-labelledby="programs-heading">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-6">
          <h3 id="programs-heading" className="text-3xl font-bold uppercase tracking-tight">
            Programs Offered
          </h3>
          <p className="text-sm text-muted-foreground">Training splits to fit your week.</p>
        </div>
        <div className="grid sm:grid-cols-3 border border-border bg-card/50">
          {trainingPrograms.map((program) => (
            <div key={program.days} className="p-6 border-t-2 border-t-primary border-b border-b-border last:border-b-0 sm:border-b-0 sm:border-r sm:border-r-border sm:last:border-r-0">
              <h4 className="flex items-baseline gap-2 mb-6">
                <span className="text-6xl font-bold text-primary tabular-nums">{program.days}x</span>
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">/ week</span>
              </h4>
              <ul className="space-y-3 text-base font-semibold">
                {program.splits.map((split) => (
                  <li key={split} className="flex items-start gap-3">
                    <span aria-hidden="true" className="text-primary">—</span>
                    {split}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          FBEOD: full body every other day. PPL: push/pull/legs, paired with upper/lower (UL), torso/limbs (T/L), or anterior/posterior (A/P).
        </p>
      </div>
    </SectionWrapper>
  );
};
