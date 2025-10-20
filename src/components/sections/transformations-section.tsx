import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { TransformationCard } from "@/components/ui/transformation-card";
import { clientTransformations } from "@/lib/data/clients";

export const TransformationsSection = () => {
  return (
    <SectionWrapper id="transformations" className="bg-muted/30">
      <div className="text-center mb-16">
        <Badge className="mb-4">Real Results</Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Client Transformations
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          These are real people who committed to the process and achieved
          incredible results. Your transformation could be next.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {clientTransformations.map((client) => (
          <TransformationCard key={client.id} client={client} />
        ))}
      </div>
    </SectionWrapper>
  );
};
