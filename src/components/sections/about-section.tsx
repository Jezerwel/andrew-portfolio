import Image from "next/image";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Badge } from "@/components/ui/badge";

export const AboutSection = () => {
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Active Clients", value: "5+" },
  ];

  return (
    <SectionWrapper id="about" className="bg-muted/30">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/andrew-coach.jpg"
            alt="Andrew Vinz Ganon - Fitness Coach"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div>
          <Badge className="mb-4">About Me</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Your Coach
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg">
            <p>
              I&apos;m Andrew Vinz Ganon, a personal trainer and nutrition
              coach. With over 3,500 hours of gym time and training clients both
              1:1 face-to-face and online, I may have transformed lives and made
              people reach their fullest potential.
            </p>
            <p>
              Science-based training methods with practical nutrition guidance
              to help you achieve sustainable results. Whether you&apos;re
              looking to lose weight, build muscle, or improve overall fitness,
              I&apos;m here to guide and teach you everything you want and need
              to know.
            </p>
            <p>
              Every client receives a customized training plan designed
              specifically for their goals, fitness level, and lifestyle. Your
              success is my success, and I&apos;m committed to helping you reach
              the best version of you.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
