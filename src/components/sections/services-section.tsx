import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/data/services";

export const ServicesSection = () => {
  return (
    <SectionWrapper id="services" className="bg-background">
      <div className="text-center mb-16">
        <Badge className="mb-4">Services</Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          How I Can Help You
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Personalized coaching programs designed to help you achieve your
          fitness goals
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <Card
            key={service.id}
            className="bg-card border-2 border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group shadow-sm hover:shadow-lg"
          >
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="text-6xl mb-4">{service.icon}</div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary/90 transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};
