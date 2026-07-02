const steps = ['Enquire', 'Site Visit', 'Custom Measurement', 'Installation', 'Handover'];

export default function HowItWorks() {
  return (
    <section className="section-dark py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-secondary-foreground">
            How It <span className="text-[#7DD3FC]">Works</span>
          </h2>
        </div>
        {/* Desktop/Tablet: horizontal row with vertically centered connectors */}
        <div className="hidden md:flex items-start justify-center">
          {steps.map((step, i) => (
            <div key={step} className="flex items-start">
              <div className="flex flex-col items-center text-center min-w-[120px]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-white">
                  {i + 1}
                </div>
                <span className="text-secondary-foreground text-sm font-medium mt-3">{step}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-center" style={{ height: '40px' }}>
                  <div className="w-12 h-0.5 bg-[#7DD3FC]/80 mx-2" />
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Mobile: vertical centered list */}
        <div className="flex md:hidden flex-col items-center">
          {steps.map((step, i) => (
            <div key={step} className="flex flex-col items-center">
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-white">
                  {i + 1}
                </div>
                <span className="text-secondary-foreground text-sm font-medium">{step}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="w-0.5 h-8 bg-[#7DD3FC]/80 my-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
