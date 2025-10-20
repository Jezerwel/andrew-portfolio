import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { clientTransformations } from "@/lib/data/clients";

export const TestimonialsSection = () => {
  return (
    <SectionWrapper id="testimonials">
      <div className="text-center mb-16">
        <Badge className="mb-4">Testimonials</Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          What My Clients Say
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Real feedback from real people who transformed their lives
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {clientTransformations.map((client) => (
          <Card key={client.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="mb-4">
                <svg
                  className="w-10 h-10 text-primary/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-lg mb-6 italic text-foreground">
                &quot;{client.testimonial}&quot;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{client.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {client.program}
                  </p>
                </div>
                <div className="text-right">
                  <Badge variant="outline">{client.timeframe}</Badge>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                {client.stats.weightChange && (
                  <Badge className="bg-primary/10 text-primary">
                    {client.stats.weightChange}
                  </Badge>
                )}
                {client.stats.muscleGain && (
                  <Badge className="bg-primary/10 text-primary">
                    {client.stats.muscleGain}
                  </Badge>
                )}
                {client.stats.bodyFatLoss && (
                  <Badge className="bg-primary/10 text-primary">
                    {client.stats.bodyFatLoss}
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};
