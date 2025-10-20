import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ClientTransformation } from "@/lib/types";

interface TransformationCardProps {
  client: ClientTransformation;
}

export const TransformationCard = ({ client }: TransformationCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <div className="grid grid-cols-2 gap-0 relative">
            <div className="relative aspect-3/4 overflow-hidden">
              <Image
                src={client.beforeImage}
                alt={`${client.name} - Before`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute top-4 left-4">
                <Badge
                  variant="secondary"
                  className="bg-black/80 text-white backdrop-blur-sm"
                >
                  Before
                </Badge>
              </div>
            </div>

            <div className="relative aspect-3/4 overflow-hidden">
              <Image
                src={client.afterImage}
                alt={`${client.name} - After`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute top-4 right-4">
                <Badge
                  variant="secondary"
                  className="bg-primary text-primary-foreground backdrop-blur-sm"
                >
                  After
                </Badge>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-12 h-12 rounded-full bg-background shadow-xl flex items-center justify-center border-2 border-primary">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-black via-primary to-primary" />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold mb-1">{client.name}</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                {client.goal}
              </p>
            </div>
            <Badge
              variant="outline"
              className="border-primary/30 text-primary font-semibold"
            >
              {client.timeframe}
            </Badge>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {client.stats.weightChange && (
              <Badge className="bg-primary/10 text-primary font-semibold text-sm py-1.5">
                {client.stats.weightChange}
              </Badge>
            )}
            {client.stats.muscleGain && (
              <Badge className="bg-primary/10 text-primary font-semibold text-sm py-1.5">
                {client.stats.muscleGain}
              </Badge>
            )}
            {client.stats.bodyFatLoss && (
              <Badge className="bg-primary/10 text-primary font-semibold text-sm py-1.5">
                {client.stats.bodyFatLoss}
              </Badge>
            )}
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground pt-3 border-t border-border/50">
            <svg
              className="w-4 h-4 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {client.program}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
