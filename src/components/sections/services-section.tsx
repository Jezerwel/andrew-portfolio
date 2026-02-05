import { SectionWrapper } from "@/components/ui/section-wrapper";
import { services } from "@/lib/data/services";

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
            key={service.id}
            className="relative p-6 border border-border bg-card/50 hover:border-primary/40 transition-colors duration-300 group"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-primary/30 group-hover:text-primary transition-colors duration-300 tracking-tight">
                {service.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight uppercase">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-[10px] px-2 py-1 border border-border text-muted-foreground tracking-wide uppercase"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
