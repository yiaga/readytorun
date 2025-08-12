import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullname: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phone: "",
    stateOfOrigin: "",
    stateOfResidence: "",
    education: "",
    previousOffice: "",
    interestedOffice: "",
    previousContest: "",
    partyMember: "",
    motivation: "",
    politicalUnderstanding: "",
    assistanceNeeded: [] as string[],
    otherSupport: "",
    availability: [] as string[],
    communication: "",
    consent: false
  });

  const assistanceOptions = [
    "Campaign Strategy",
    "Fundraising Support",
    "Media Training",
    "Policy Development",
    "Networking Opportunities",
    "Legal Guidance",
    "Mentorship Program"
  ];

  const availabilityOptions = [
    "Monday Morning",
    "Monday Afternoon", 
    "Monday Evening",
    "Tuesday Morning",
    "Tuesday Afternoon",
    "Tuesday Evening",
    "Wednesday Morning",
    "Wednesday Afternoon",
    "Wednesday Evening",
    "Thursday Morning",
    "Thursday Afternoon",
    "Thursday Evening",
    "Friday Morning",
    "Friday Afternoon",
    "Friday Evening"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted!",
      description: "Thank you for registering. We'll be in touch soon.",
    });
  };

  const handleAssistanceChange = (option: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      assistanceNeeded: checked 
        ? [...prev.assistanceNeeded, option]
        : prev.assistanceNeeded.filter(item => item !== option)
    }));
  };

  const handleAvailabilityChange = (option: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      availability: checked 
        ? [...prev.availability, option]
        : prev.availability.filter(item => item !== option)
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Register to Run
              </h1>
              <p className="text-xl lg:text-2xl opacity-90">
                Start your journey towards political leadership in Nigeria
              </p>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Registration Form</CardTitle>
                <p className="text-muted-foreground">
                  Please fill out all fields to register for ReadyToRun support in the 2027 elections.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullname">Full Name *</Label>
                      <Input 
                        id="fullname" 
                        value={formData.fullname}
                        onChange={(e) => setFormData(prev => ({...prev, fullname: e.target.value}))}
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input 
                        id="dateOfBirth" 
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => setFormData(prev => ({...prev, dateOfBirth: e.target.value}))}
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <Label>Gender *</Label>
                      <Select value={formData.gender} onValueChange={(value) => setFormData(prev => ({...prev, gender: value}))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
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
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="stateOfOrigin">State of Origin *</Label>
                      <Input 
                        id="stateOfOrigin"
                        value={formData.stateOfOrigin}
                        onChange={(e) => setFormData(prev => ({...prev, stateOfOrigin: e.target.value}))}
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="stateOfResidence">State of Residence *</Label>
                      <Input 
                        id="stateOfResidence"
                        value={formData.stateOfResidence}
                        onChange={(e) => setFormData(prev => ({...prev, stateOfResidence: e.target.value}))}
                        required 
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Highest Education Qualification *</Label>
                    <Select value={formData.education} onValueChange={(value) => setFormData(prev => ({...prev, education: value}))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select education level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="secondary">Secondary School</SelectItem>
                        <SelectItem value="diploma">Diploma/Certificate</SelectItem>
                        <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                        <SelectItem value="master">Master's Degree</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Political Experience */}
                  <div>
                    <Label htmlFor="previousOffice">Have you previously held any elective or appointed office? (state and year)</Label>
                    <Input 
                      id="previousOffice"
                      value={formData.previousOffice}
                      onChange={(e) => setFormData(prev => ({...prev, previousOffice: e.target.value}))}
                      placeholder="e.g., Student Union President (2020)"
                    />
                  </div>

                  <div>
                    <Label htmlFor="interestedOffice">Which office are you interested in? *</Label>
                    <Input 
                      id="interestedOffice"
                      value={formData.interestedOffice}
                      onChange={(e) => setFormData(prev => ({...prev, interestedOffice: e.target.value}))}
                      required 
                    />
                  </div>

                  <div>
                    <Label htmlFor="previousContest">Have you contested for an elective office before? (state and year)</Label>
                    <Input 
                      id="previousContest"
                      value={formData.previousContest}
                      onChange={(e) => setFormData(prev => ({...prev, previousContest: e.target.value}))}
                    />
                  </div>

                  <div>
                    <Label>Are you a card-carrying member of a political party?</Label>
                    <RadioGroup value={formData.partyMember} onValueChange={(value) => setFormData(prev => ({...prev, partyMember: value}))}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="party-yes" />
                        <Label htmlFor="party-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="party-no" />
                        <Label htmlFor="party-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* File Uploads */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="partyCard">Upload your political party membership card</Label>
                      <Input id="partyCard" type="file" accept="image/*,.pdf" />
                    </div>
                    <div>
                      <Label htmlFor="resume">Upload resume/CV *</Label>
                      <Input id="resume" type="file" accept=".pdf,.doc,.docx" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="motivation">Please provide a brief statement of your motivation for seeking elective office (200 words max) *</Label>
                    <Textarea 
                      id="motivation"
                      value={formData.motivation}
                      onChange={(e) => setFormData(prev => ({...prev, motivation: e.target.value}))}
                      maxLength={200}
                      rows={4}
                      required
                    />
                    <p className="text-sm text-muted-foreground mt-1">{formData.motivation.length}/200 characters</p>
                  </div>

                  <div>
                    <Label>How would you rate your understanding of the Nigerian political landscape? *</Label>
                    <RadioGroup value={formData.politicalUnderstanding} onValueChange={(value) => setFormData(prev => ({...prev, politicalUnderstanding: value}))}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="beginner" id="understanding-beginner" />
                        <Label htmlFor="understanding-beginner">Beginner</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="intermediate" id="understanding-intermediate" />
                        <Label htmlFor="understanding-intermediate">Intermediate</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="advanced" id="understanding-advanced" />
                        <Label htmlFor="understanding-advanced">Advanced</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="expert" id="understanding-expert" />
                        <Label htmlFor="understanding-expert">Expert</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Support Needed */}
                  <div>
                    <Label>What type of assistance do you need to run for office? Please tick as appropriate</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                      {assistanceOptions.map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`assistance-${option}`}
                            checked={formData.assistanceNeeded.includes(option)}
                            onCheckedChange={(checked) => handleAssistanceChange(option, !!checked)}
                          />
                          <Label htmlFor={`assistance-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="otherSupport">Are there other support required? Please state here</Label>
                    <Textarea 
                      id="otherSupport"
                      value={formData.otherSupport}
                      onChange={(e) => setFormData(prev => ({...prev, otherSupport: e.target.value}))}
                      rows={3}
                    />
                  </div>

                  {/* Availability */}
                  <div>
                    <Label>Availability for interviews/meetings during the week</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                      {availabilityOptions.map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`availability-${option}`}
                            checked={formData.availability.includes(option)}
                            onCheckedChange={(checked) => handleAvailabilityChange(option, !!checked)}
                          />
                          <Label htmlFor={`availability-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Preferred means of communication *</Label>
                    <RadioGroup value={formData.communication} onValueChange={(value) => setFormData(prev => ({...prev, communication: value}))}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="comm-email" />
                        <Label htmlFor="comm-email">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="comm-phone" />
                        <Label htmlFor="comm-phone">Phone</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="zoom" id="comm-zoom" />
                        <Label htmlFor="comm-zoom">Zoom</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="whatsapp" id="comm-whatsapp" />
                        <Label htmlFor="comm-whatsapp">WhatsApp</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Consent */}
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => setFormData(prev => ({...prev, consent: !!checked}))}
                      required
                    />
                    <Label htmlFor="consent" className="text-sm">
                      Do you consent to having your information shared with trusted partner organizations that provide support to youth aspirants/candidates? *
                    </Label>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Registration
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Register;