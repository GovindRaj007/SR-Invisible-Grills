import { Helmet } from 'react-helmet-async';
import { BUSINESS, serviceCategories } from '@/data/services';
import { Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { useState } from 'react';
import { useScrollRestoration } from '@/hooks/useScrollRestoration';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';

export default function Contact() {
  useScrollRestoration();
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);
  
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });
  
  const [touched, setTouched] = useState({
    name: false,
    phone: false,
  });
  
  const { toast } = useToast();

  // Validation functions
  const isNameValid = (name: string) => {
    const trimmedName = name.trim();
    const letterCount = trimmedName.replace(/\s/g, '').length;
    return letterCount >= 7 && /^[a-zA-Z\s]+$/.test(trimmedName) && trimmedName.length > 0;
  };

  const isPhoneValid = (phone: string) => /^\d{10}$/.test(phone);

  const isFormValid =
    isNameValid(formData.name) &&
    isPhoneValid(formData.phone) &&
    formData.service !== "";

  // Form handlers
  const handleNameChange = (value: string) => {
    setFormData((prev) => ({ ...prev, name: value }));
    
    if (touched.name) {
      if (value.trim().length === 0) {
        setErrors((prev) => ({ ...prev, name: "" }));
      } else if (!isNameValid(value)) {
        setErrors((prev) => ({ ...prev, name: "Enter a valid full name" }));
      } else {
        setErrors((prev) => ({ ...prev, name: "" }));
      }
    }
  };

  const handleNameBlur = () => {
    setTouched((prev) => ({ ...prev, name: true }));
    if (formData.name.trim().length > 0 && !isNameValid(formData.name)) {
      setErrors((prev) => ({ ...prev, name: "Enter a valid full name" }));
    }
  };

  const handlePhoneChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    const limitedDigits = digitsOnly.slice(0, 10);
    
    setFormData((prev) => ({ ...prev, phone: limitedDigits }));
    
    if (touched.phone) {
      if (limitedDigits.length === 0) {
        setErrors((prev) => ({ ...prev, phone: "" }));
      } else if (!isPhoneValid(limitedDigits)) {
        setErrors((prev) => ({ ...prev, phone: "Enter a valid 10-digit phone number" }));
      } else {
        setErrors((prev) => ({ ...prev, phone: "" }));
      }
    }
  };

  const handlePhoneBlur = () => {
    setTouched((prev) => ({ ...prev, phone: true }));
    if (formData.phone.length > 0 && !isPhoneValid(formData.phone)) {
      setErrors((prev) => ({ ...prev, phone: "Enter a valid 10-digit phone number" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) {
      toast({
        title: "Validation Error",
        description: "Please fill all required fields correctly.",
        variant: "destructive",
        duration: 4000,
      });
      return;
    }

    setLoading(true);

    try {
      const payload = new FormData();
      payload.append("name", formData.name.trim());
      payload.append("phone", formData.phone);
      payload.append("service", formData.service);
      payload.append("message", formData.message.trim());

      const response = await fetch("https://formspree.io/f/xykrzgjn", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: payload,
      });

      if (!response.ok) {
        throw new Error("Unable to submit enquiry right now.");
      }

      toast({
        title: "Success!",
        description: "Your enquiry has been submitted. We'll contact you within 2 hours.",
        duration: 4000,
      });

      setFormData({
        name: "",
        phone: "",
        service: "",
        message: "",
      });
      setErrors({ name: "", phone: "" });
      setTouched({ name: false, phone: false });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again or contact us directly.",
        variant: "destructive",
        duration: 4000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact SR Invisible Grills & Safety Nets — Get a Free Quote in Chennai</title>
        <meta name="description" content="Contact SR Invisible Grills & Safety Nets for a free quote on invisible grills, safety nets, sports nets, and ceiling hangers in Chennai. Call or WhatsApp us today." />
        <meta name="keywords" content="contact SR Invisible Grills & Safety Nets, free quote chennai, invisible grills chennai, safety nets chennai, balcony safety nets, sports nets chennai, ceiling cloth hangers, Chennai safety solutions" />
        <link rel="canonical" href="https://srinvisiblegrillschennai.in/contact" />
      </Helmet>

      {/* Hero Section */}
      <section className="section-dark relative py-12 md:py-16">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container relative z-10 mx-auto px-4">
          <Breadcrumb items={[{ label: 'Contact' }]} />
          <h1 className="mt-4 font-heading text-4xl font-bold text-white md:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Ready to protect your property? Get in touch for a free consultation and quote - no obligations.
          </p>
        </div>
      </section>

      {/* Contact & Form Section */}
      <section className="section-light relative py-8 md:py-12">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div className="rounded-2xl bg-gradient-to-br from-[#14233D] via-[#102B5E] to-[#14233D] p-6 shadow-lg md:p-8">
              <h2 className="mb-6 font-heading text-2xl font-bold text-white">Get Free Quote</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white/90">Full Name *</Label>
                    <Input 
                      id="name" 
                      placeholder="Your full name" 
                      required 
                      value={formData.name}
                      onChange={(e) => handleNameChange(e.target.value)}
                      onBlur={handleNameBlur}
                      className={`bg-white/10 text-white placeholder:text-white/50 ${
                        errors.name 
                          ? "border-red-500 border-2" 
                          : touched.name && isNameValid(formData.name)
                          ? "border-green-500 border-2"
                          : "border-white/20"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-400 font-medium">{errors.name}</p>
                    )}
                    {!errors.name && touched.name && isNameValid(formData.name) && (
                      <p className="text-sm text-green-400 font-medium flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" /> Valid name
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white/90">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="10-digit mobile number" 
                      required 
                      value={formData.phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      onBlur={handlePhoneBlur}
                      maxLength={10}
                      className={`bg-white/10 text-white placeholder:text-white/50 ${
                        errors.phone 
                          ? "border-red-500 border-2" 
                          : touched.phone && isPhoneValid(formData.phone)
                          ? "border-green-500 border-2"
                          : "border-white/20"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-400 font-medium">{errors.phone}</p>
                    )}
                    {!errors.phone && touched.phone && isPhoneValid(formData.phone) && (
                      <p className="text-sm text-green-400 font-medium flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" /> Valid phone number
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-white/90">Service Required *</Label>
                  <Select 
                    value={formData.service} 
                    onValueChange={(value) => setFormData({...formData, service: value})}
                    required
                  >
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceCategories.map((cat) => (
                        <SelectItem key={cat.slug} value={cat.name}>{cat.name}</SelectItem>
                      ))}
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white/90">Additional Details (Optional)</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your requirements" 
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50" 
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={loading || !isFormValid}
                  className="w-full bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Submit Enquiry"}
                </Button>

                {!isFormValid && (touched.name || touched.phone) && (
                  <p className="text-sm text-amber-400 text-center">
                    Please fill all required fields correctly to submit
                  </p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">Get in Touch</h2>
                <p className="text-muted-foreground">Prefer to reach out directly? Use any of the methods below.</p>
              </div>

              <div className="space-y-4">
                {/* Call */}
                <a href={`tel:${BUSINESS.phone}`} data-track="call" className="flex items-center gap-4 rounded-xl bg-[#F6F8FB] p-4 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">Call Us</p>
                    <p className="text-muted-foreground">{BUSINESS.phone}</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a href={`https://wa.me/${BUSINESS.whatsapp}`} data-track="whatsapp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-xl bg-[#F6F8FB] p-4 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/20">
                    <WhatsAppIcon className="h-6 w-6 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <p className="text-muted-foreground">Chat with us instantly</p>
                  </div>
                </a>

                {/* Email */}
                <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-4 rounded-xl bg-[#F6F8FB] p-4 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">{BUSINESS.email}</p>
                  </div>
                </a>
              </div>

              {/* Business Hours */}
              <div className="rounded-xl bg-gradient-to-br from-[#14233D] via-[#102B5E] to-[#14233D] p-6 shadow-lg">
                <h3 className="mb-4 font-heading text-lg font-semibold text-white">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 text-blue-400" />
                    <div className="text-white/70">
                      <p>{BUSINESS.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
