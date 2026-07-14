import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { serviceCategories } from '@/data/services';
import { serviceCardImages } from '@/data/images';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Shield, ShieldCheck, Shirt, Trophy } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = { Shield, ShieldCheck, Shirt, Trophy };

export default function ServiceCategories() {
  const location = useLocation();
  const [active, setActive] = useState<string>(() => {
    const stored = sessionStorage.getItem('activeServiceCategory');
    if (stored) {
      sessionStorage.removeItem('activeServiceCategory');
      return stored;
    }
    return serviceCategories[0].slug;
  });

  // Check for category change via navigation
  useEffect(() => {
    const stored = sessionStorage.getItem('activeServiceCategory');
    if (stored) {
      setActive(stored);
      sessionStorage.removeItem('activeServiceCategory');
    }
  }, [location]);

  const activeCat = serviceCategories.find((c) => c.slug === active)!;

  return (
    <section id="services" className="py-8 md:py-12">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Our Services
          </span>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Complete Safety Solutions for Your Property
          </h2>
          <p className="text-lg text-muted-foreground">
            From invisible grills to ceiling hangers, we provide comprehensive 
            products tailored to your specific needs and requirements.
          </p>
        </div>

        {/* Category tabs - equal size cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {serviceCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Shield;
            const isActive = active === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => setActive(cat.slug)}
                className={`rounded-lg p-5 text-center transition-all duration-300 relative overflow-hidden ${
                  isActive
                    ? 'bg-secondary shadow-lg scale-[1.02]'
                    : 'bg-secondary/60 hover:border-primary/50'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-x-0 top-0 h-1.5 bg-[#0F3D8A]" />
                )}

                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 border ${
                  isActive ? 'border-white bg-white/10' : 'border-primary/10 bg-primary/10'
                }`}>
                  <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-primary/70'}`} />
                </div>
                <h3 className={`font-heading text-sm font-bold ${
                  isActive ? 'text-secondary-foreground' : 'text-secondary-foreground/70'
                }`}>
                  {cat.name}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active category services - New card design */}
        <div className="flex flex-wrap gap-6 justify-center sm:justify-center md:justify-start lg:justify-start animate-fade-in" key={active}>
          {activeCat.subServices.map((service) => (
            <div key={service.slug} className="w-full sm:w-[18rem] md:w-76 lg:w-80 min-w-[18rem] max-w-[470px]">
              <Link
                to={`/services/${activeCat.slug}/${service.slug}`}
                onClick={() => window.scrollTo(0, 0)}
                className="group relative overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col h-full"
              >
                {/* Service Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={serviceCardImages[`${activeCat.slug}/${service.slug}`]}
                    alt={service.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    width={400}
                    height={160}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(222,47%,11%,0.7)]" />
                  {/* Badge */}
                  <span className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
                    Popular
                  </span>
                </div>

                {/* Content with gradient background */}
                <div className="flex flex-1 flex-col bg-gradient-to-br from-[#14233D] via-[#102B5E] to-[#14233D] p-5">
                  {/* Title */}
                  <h3 className="mb-2 font-heading text-lg font-semibold text-white">
                    {service.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="mb-4 text-sm text-white/70 line-clamp-3">{service.description}</p>

                  {/* Features */}
                  <ul className="mb-4 space-y-1">
                    {service.benefits.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-white/90">
                        <div className="h-2 w-2 rounded-full bg-[#7DD3FC] shadow-[0_0_0_3px_rgba(125,211,252,0.2)]" />
                        {feature.title}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#7DD3FC] transition-colors group-hover:text-white mt-auto">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90" asChild>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2">
              Request Free Site Visit
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
