import { API_BASE_URL } from "@/config/api";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Facebook, X, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";


const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const queryParams = new URLSearchParams(formData).toString();
      const response = await fetch(`${API_BASE_URL}/api/contact?${queryParams}`, {
        method: "GET"
      });

      if (!response.ok) throw new Error("Network response was not ok");

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      console.error(error);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@readytorunng.org",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+234 XXX XXX XXXX",
      description: "Call us during business hours"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Abuja, Nigeria",
      description: "Visit our office"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon - Fri: 9AM - 5PM",
      description: "We're here to help"
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "https://www.facebook.com/readytorunNG" },
    { icon: X, name: "X", url: "https://www.x.com/readytorunNG" },
    { icon: Instagram, name: "Instagram", url: "https://www.instagram.com/readytorunNG" },
    { icon: Linkedin, name: "LinkedIn", url: "#" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl lg:text-2xl opacity-90">
                Get in touch with ReadyToRun. We're here to support your political journey.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input 
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input 
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                            required 
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input 
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                          />
                        </div>
                        <div>
                          <Label>Subject *</Label>
                          <Select value={formData.subject} onValueChange={(value) => setFormData(prev => ({...prev, subject: value}))}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="registration">Registration Support</SelectItem>
                              <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                              <SelectItem value="general">General Question</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea 
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
                          rows={6}
                          placeholder="Tell us how we can help you..."
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      We're always ready to help young Nigerians on their journey to political leadership. 
                      Reach out to us through any of the channels below.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <Card key={index} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                                <Icon className="h-6 w-6 text-accent-foreground" />
                              </div>
                              <div>
                                <h3 className="font-semibold mb-1">{info.title}</h3>
                                <p className="text-foreground font-medium">{info.details}</p>
                                <p className="text-sm text-muted-foreground">{info.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>

                  {/* Social Media */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Follow Us</CardTitle>
                      <p className="text-muted-foreground">
                        Stay connected with ReadyToRun on social media for updates, tips, and inspiration.
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex space-x-4">
                        {socialLinks.map((social, index) => {
                          const Icon = social.icon;
                          return (
                            <a
                              key={index}
                              href={social.url}
                              className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center hover:bg-accent/90 transition-colors"
                              aria-label={social.name}
                            >
                              <Icon className="h-6 w-6 text-accent-foreground" />
                            </a>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Actions */}
                  <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Ready to Take Action?</h3>
                      <p className="mb-6 opacity-90">
                        Don't wait - start your political journey today with ReadyToRun's comprehensive support.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button variant="secondary" asChild>
                          <a href="/register">Register to Run</a>
                        </Button>
                        <Button variant="outline" asChild className="border-secondary text-primary hover:bg-primary-foreground hover:text-primary">
                          <a href="/get-involved">Get Involved</a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;