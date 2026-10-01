import { siteConfig } from "@/lib/data/site-config";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-3 tracking-[0.1em] uppercase">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm">
              No shortcuts. Just results. Customized training and nutrition for fat loss, muscle building, and competition prep.
            </p>
            <div className="flex gap-3">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-11 px-4 border border-border inline-flex items-center text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
                >
                  Instagram
                </a>
              )}
              {siteConfig.social.tiktok && (
                <a
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-11 px-4 border border-border inline-flex items-center text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
                >
                  TikTok
                </a>
              )}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold mb-2 tracking-[0.2em] uppercase text-muted-foreground">Navigation</h4>
            <ul>
              {[
                ["about", "About"],
                ["services", "Services"],
                ["transformations", "Results"],
                ["contact", "Contact"],
              ].map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="inline-flex items-center min-h-11 text-sm text-foreground/70 hover:text-primary transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold mb-2 tracking-[0.2em] uppercase text-muted-foreground">Contact</h4>
            <ul className="text-sm">
              {siteConfig.social.instagram && (
                <li>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center min-h-11 text-foreground/70 hover:text-primary transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
                  >
                    Instagram: @drewliftz1
                  </a>
                </li>
              )}
              {siteConfig.social.email && (
                <li>
                  <a
                    href={`mailto:${siteConfig.social.email}`}
                    className="inline-flex items-center min-h-11 break-all text-foreground/70 hover:text-primary transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
                  >
                    {siteConfig.social.email}
                  </a>
                </li>
              )}
              {siteConfig.social.tiktok && (
                <li>
                  <a
                    href={siteConfig.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center min-h-11 text-foreground/70 hover:text-primary transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
                  >
                    TikTok: @drewliftz1
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-[10px] text-muted-foreground tracking-wide uppercase">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
