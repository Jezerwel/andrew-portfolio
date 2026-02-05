import { SectionWrapper } from "@/components/ui/section-wrapper";
import { TransformationCard } from "@/components/ui/transformation-card";
import { clientTransformations } from "@/lib/data/clients";

export const TransformationsSection = () => {
  return (
    <SectionWrapper id="transformations" className="bg-muted/20 relative overflow-hidden pattern-stripes">
      <div className="text-center mb-16 relative z-10">
        <div className="inline-block mb-4 px-3 py-1 border border-primary/40 text-[10px] tracking-[0.2em] uppercase text-primary font-bold">
          Proof
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
          Real Transformations
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Stage-ready physiques. Massive fat loss. Real people. Real results.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 relative z-10">
        {clientTransformations.map((client) => (
          <TransformationCard key={client.id} client={client} />
        ))}
      </div>
    </SectionWrapper>
  );
};
