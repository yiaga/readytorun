import { API_BASE_URL } from "@/config/api";
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

  const [files, setFiles] = useState({
    partyCard: null as File | null,
    resume: null as File | null,
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
    "Monday Morning (9AM - 12PM)",
    "Monday Afternoon (1PM - 4PM)", 
    "Monday Evening (5PM - 8PM)",
    "Tuesday Morning (9AM - 12PM)",
    "Tuesday Afternoon (1PM - 4PM)",
    "Tuesday Evening (5PM - 8PM)",
    "Wednesday Morning (9AM - 12PM)",
    "Wednesday Afternoon (1PM - 4PM)",
    "Wednesday Evening (5PM - 8PM)",
    "Thursday Morning (9AM - 12PM)",
    "Thursday Afternoon (1PM - 4PM)",
    "Thursday Evening (5PM - 8PM)",
    "Friday Morning (9AM - 12PM)",
    "Friday Afternoon (1PM - 4PM)",
    "Friday Evening (5PM - 8PM)"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formPayload = new FormData();
    // Append all form data fields
    Object.keys(formData).forEach(key => {
        const value = formData[key as keyof typeof formData];
        if (Array.isArray(value)) {
            value.forEach(item => formPayload.append(`${key}[]`, item));
        } else if (typeof value === 'boolean') {
            formPayload.append(key, value.toString());
        } else {
            formPayload.append(key, value);
        }
    });

    // Append file inputs
    if (files.partyCard) {
        formPayload.append("partyCard", files.partyCard);
    }
    if (files.resume) {
        formPayload.append("resume", files.resume);
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/registration`, {
            method: "POST",
            body: formPayload,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Success:", result);
        toast({
            title: "Registration Submitted! 🎉",
            description: "Thank you for registering. We'll be in touch soon.",
        });
        
        // Reset the form and file states after successful submission
        setFormData({
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
            assistanceNeeded: [],
            otherSupport: "",
            availability: [],
            communication: "",
            consent: false
        });
        setFiles({ partyCard: null, resume: null });

    } catch (error) {
        console.error("Error:", error);
        toast({
            title: "Registration Failed 😥",
            description: "There was an error submitting your form. Please try again.",
            variant: "destructive"
        });
    }
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
                      <Label htmlFor="fullname" className="text-lg font-medium">Full Name *</Label>
                      <Input 
                        id="fullname" 
                        className="text-lg" 
                        value={formData.fullname}
                        onChange={(e) => setFormData(prev => ({...prev, fullname: e.target.value}))}
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="dateOfBirth" className="text-lg font-medium">Date of Birth *</Label>
                      <Input 
                        id="dateOfBirth" 
                        className="text-lg" 
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => setFormData(prev => ({...prev, dateOfBirth: e.target.value}))}
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <Label className="text-lg font-medium">Gender *</Label>
                      <Select value={formData.gender} onValueChange={(value) => setFormData(prev => ({...prev, gender: value}))}>
                        <SelectTrigger className="text-lg">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-lg font-medium">Email *</Label>
                      <Input 
                        id="email" 
                        className="text-lg"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-lg font-medium">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        className="text-lg"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="stateOfOrigin" className="text-lg font-medium">State of Origin *</Label>
                      <Input 
                        id="stateOfOrigin"
                        className="text-lg"
                        value={formData.stateOfOrigin}
                        onChange={(e) => setFormData(prev => ({...prev, stateOfOrigin: e.target.value}))}
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="stateOfResidence" className="text-lg font-medium">State of Residence *</Label>
                      <Input 
                        id="stateOfResidence"
                        className="text-lg"
                        value={formData.stateOfResidence}
                        onChange={(e) => setFormData(prev => ({...prev, stateOfResidence: e.target.value}))}
                        required 
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg font-medium">Highest Education Qualification *</Label>
                    <Select value={formData.education} onValueChange={(value) => setFormData(prev => ({...prev, education: value}))}>
                      <SelectTrigger 
                        className="text-lg">
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
                    <Label htmlFor="previousOffice" className="text-lg font-medium">Have you previously held any elective or appointed office? (office and year)</Label>
                    <Input 
                      id="previousOffice"
                      className="text-lg"
                      value={formData.previousOffice}
                      onChange={(e) => setFormData(prev => ({...prev, previousOffice: e.target.value}))}
                      placeholder="e.g., Abia State Governor (2020)"
                    />
                  </div>

                  <div>
                    <Label htmlFor="interestedOffice" className="text-lg font-medium">Which office are you interested in? *</Label>
                      <Select value={formData.interestedOffice} onValueChange={(value) => setFormData(prev => ({...prev, interestedOffice: value}))}>
                        <SelectTrigger className="text-lg">
                          <SelectValue placeholder="Select Interested Office" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="president">President</SelectItem>
                          <SelectItem value="governor">Governor</SelectItem>
                          <SelectItem value="senate">Senate</SelectItem>
                          <SelectItem value="house-of-rep">House of Representatives</SelectItem>
                          <SelectItem value="state-house">State House of Assembly</SelectItem>
                          <SelectItem value="lga-chairman">Local Government Chairman</SelectItem>
                          <SelectItem value="councillor">Councillor</SelectItem>
                        </SelectContent>
                      </Select>
                  </div>

                  <div>
                    <Label htmlFor="previousContest" className="text-lg font-medium">Have you contested for an elective office before? (office and year)</Label>
                    <Input 
                      id="previousContest"
                      className="text-lg"
                      value={formData.previousContest}
                      onChange={(e) => setFormData(prev => ({...prev, previousContest: e.target.value}))}
                    />
                  </div>

                  <div>
                    <Label className="text-lg font-medium">Are you a card-carrying member of a political party?</Label>
                    <RadioGroup value={formData.partyMember} onValueChange={(value) => setFormData(prev => ({...prev, partyMember: value}))}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="party-yes" className="text-lg"/>
                        <Label htmlFor="party-yes"className="text-lg font-medium">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="party-no" className="text-lg"/>
                        <Label htmlFor="party-no"className="text-lg font-medium">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* File Uploads */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="partyCard" className="text-lg font-medium">Upload your political party membership card</Label>
                      <Input 
                        id="partyCard" 
                        className="text-lg" 
                        type="file" 
                        accept="image/*,.pdf" 
                        onChange={(e) => setFiles(prev => ({ ...prev, partyCard: e.target.files ? e.target.files[0] : null }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="resume" className="text-lg font-medium">Upload resume/CV *</Label>
                      <Input 
                        id="resume" 
                        className="text-lg" 
                        type="file" 
                        accept=".pdf,.doc,.docx" 
                        onChange={(e) => setFiles(prev => ({ ...prev, resume: e.target.files ? e.target.files[0] : null }))}
                        required 
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="motivation" className="text-lg font-medium">Please provide a brief statement of your motivation for seeking elective office (200 words max) *</Label>
                    <Textarea 
                      id="motivation"
                      className="text-lg"
                      value={formData.motivation}
                      onChange={(e) => setFormData(prev => ({...prev, motivation: e.target.value}))}
                      maxLength={200}
                      rows={4}
                      required
                    />
                    <p className="text-sm text-muted-foreground mt-1">{formData.motivation.length}/200 characters</p>
                  </div>

                  <div>
                    <Label className="text-lg font-medium">How would you rate your understanding of the Nigerian political landscape? *</Label>
                    <RadioGroup value={formData.politicalUnderstanding} onValueChange={(value) => setFormData(prev => ({...prev, politicalUnderstanding: value}))}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="beginner" id="understanding-beginner" className="text-lg"/>
                        <Label htmlFor="understanding-beginner" className="text-lg font-medium">Beginner</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="intermediate" id="understanding-intermediate" className="text-lg"/>
                        <Label htmlFor="understanding-intermediate" className="text-lg font-medium">Intermediate</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="advanced" id="understanding-advanced" className="text-lg" />
                        <Label htmlFor="understanding-advanced" className="text-lg font-medium">Advanced</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="expert" id="understanding-expert"  className="text-lg"/>
                        <Label htmlFor="understanding-expert" className="text-lg font-medium">Expert</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Support Needed */}
                  <div>
                    <Label className="text-lg font-medium">What type of assistance do you need to run for office? Please tick as appropriate</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                      {assistanceOptions.map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`assistance-${option}`}
                            className="text-lg"
                            checked={formData.assistanceNeeded.includes(option)}
                            onCheckedChange={(checked) => handleAssistanceChange(option, !!checked)}
                          />
                          <Label htmlFor={`assistance-${option}`} className="text-lg font-medium">{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="otherSupport" className="text-lg font-medium">Are there other support required? Please state here</Label>
                    <Textarea 
                      id="otherSupport"
                      className="text-lg"
                      value={formData.otherSupport}
                      onChange={(e) => setFormData(prev => ({...prev, otherSupport: e.target.value}))}
                      rows={3}
                    />
                  </div>

                  {/* Availability */}
                  <div>
                    <Label className="text-lg font-medium">Availability for interviews/meetings during the week</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                      {availabilityOptions.map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`availability-${option}`}
                            checked={formData.availability.includes(option)}
                            onCheckedChange={(checked) => handleAvailabilityChange(option, !!checked)}
                          />
                          <Label htmlFor={`availability-${option}`} className="text-medium font-sm"> {option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg font-medium">Preferred means of communication *</Label>
                    <RadioGroup value={formData.communication} onValueChange={(value) => setFormData(prev => ({...prev, communication: value}))}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="comm-email" />
                        <Label htmlFor="comm-email" className="text-lg font-medium">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="comm-phone" />
                        <Label htmlFor="comm-phone" className="text-lg font-medium"> Phone</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="zoom" id="comm-zoom" />
                        <Label htmlFor="comm-zoom" className="text-lg font-medium">Zoom</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="google-meet" id="comm-google-meet" />
                        <Label htmlFor="comm-google-meet" className="text-lg font-medium">Google Meet</Label>
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
                    <Label htmlFor="consent" className="text-medium">
                      Do you consent to having your information shared with trusted partner organizations that provide support to youth aspirants/candidates? *
                    </Label>
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg font-medium">
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