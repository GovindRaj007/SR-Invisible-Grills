import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  pageUrl?: string;
  className?: string;
}

export default function FAQAccordion({ faqs, pageUrl, className }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground text-center mb-10">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-secondary rounded-lg overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="font-heading font-bold text-secondary-foreground text-sm pr-4">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-[#7DD3FC] flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-4 pb-4 text-secondary-foreground/70 text-sm animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
