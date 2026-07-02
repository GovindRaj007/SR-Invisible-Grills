import { Award, ShieldCheck, Clock, Truck, HeadphonesIcon, IndianRupee } from 'lucide-react';

const standards = [
  { icon: Award, title: 'Premium Materials', description: 'Only SS 316 marine-grade and UV-treated HDPE in every installation.' },
  { icon: ShieldCheck, title: 'Certified Installation', description: 'Trained technicians following BIS and ISO safety protocols.' },
  { icon: Clock, title: 'Warranty Based Services', description: 'Industry-leading warranty on materials and workmanship.' },
  { icon: Truck, title: 'On-Time Delivery', description: 'Guaranteed installation dates with zero delays.' },
  { icon: HeadphonesIcon, title: 'Post-Install Support', description: 'Dedicated support team for adjustments and maintenance.' },
  { icon: IndianRupee, title: 'Transparent Pricing', description: 'No hidden charges — detailed quotes before we start.' },
];

export default function WhyChooseUs() {
  return (
    <section className="section-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mb-2">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every installation carries our promise of precision, safety, and lasting quality.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map((item) => (
            <div key={item.title} className="flex gap-3 rounded-lg border-l-4 border-primary bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#F6F8FB]">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
