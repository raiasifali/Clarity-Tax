"use client"

import Image from "next/image"
import Link from "next/link"
import { Calculator, Phone, Mail, MapPin, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function Home() {
  const [callbackForm, setCallbackForm] = useState({
    name: "",
    phone: "",
    message: ""
  })

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    window.location.href = `tel:03174121900`
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-primary">Procount</span>
              <span className="text-xl font-bold">Solutions</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="#principles" className="text-sm font-medium hover:text-primary">
              Principles
            </Link>
            <Link href="#calculator" className="text-sm font-medium hover:text-primary">
              Calculator
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button size="sm" className="hidden md:flex" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Us
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
          <div className="relative h-[600px]">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="ProcountSolutions - Professional Accounting and Tax Services"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container absolute inset-0 z-20 flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                ProcountSolutions Pvt Limited
              </h1>
              <p className="mt-4 text-xl font-semibold">
                CEO: Hamza Riaz
              </p>
              <p className="mt-6 text-xl">
                Trusted accounting and consultancy company providing end-to-end financial and compliance solutions to businesses in Pakistan, the Gulf region, and Europe.
              </p>
              <div className="mt-10 flex gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Request a Call Back
                </Button>
                {/* <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                  Explore Services
                </Button> */}
              </div>
            </div>
          </div>
        </section>

        {/* Services We Offer */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Services We Offer</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive financial and compliance solutions tailored to your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Compliance & Legal Registrations</CardTitle>
                  <CardDescription>Complete registration services</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Company registration and incorporation in Pakistan</li>
                    <li>• Trademark and copyright registration</li>
                    <li>• EOBI, Social Security, and Provident Fund registration</li>
                    <li>• PSEB, P@SHA and LCCI registrations</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Taxation Services</CardTitle>
                  <CardDescription>Expert tax solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• FBR NTN registration for individuals and businesses</li>
                    <li>• Income tax return filing for individuals and companies</li>
                    <li>• Sales tax registration and compliance</li>
                    <li>• Strategic tax planning and advisory</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Accounting & Bookkeeping</CardTitle>
                  <CardDescription>Professional financial management</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Complete accounting and bookkeeping services</li>
                    <li>• Financial statement preparation</li>
                    <li>• Monthly, quarterly, and annual reporting</li>
                    <li>• Using leading cloud-based software: Zoho Books, Sage, and QuickBooks</li>
                    <li>• Real-time financial insights for better business decisions</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Business Advisory</CardTitle>
                  <CardDescription>Strategic business guidance</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Business Planning and structure</li>
                    <li>• Performance improvement</li>
                    <li>• Cost reduction and efficiency analysis</li>
                    <li>• Risk management and internal controls</li>
                    <li>• Process Optimization</li>
                    <li>• Decision making Support</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Financial Advisory</CardTitle>
                  <CardDescription>Comprehensive financial planning</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Budgeting and forecasting</li>
                    <li>• Cashflow management</li>
                    <li>• Financial feasibility studies</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Gulf Region Services</CardTitle>
                  <CardDescription>UAE, Saudi Arabia, Bahrain</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Remote bookkeeping services</li>
                    <li>• VAT return filing and compliance</li>
                    <li>• Corporate annual return preparation and submission</li>
                    <li>• Business Plan and feasibility Report</li>
                    <li>• Forecasting and projection</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Europe-Focused Services</CardTitle>
                  <CardDescription>Dedicated European client services</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Dedicated bookkeeping services for European clients</li>
                    <li>• Cloud-based accounting using QuickBooks</li>
                    <li>• Monthly financial reports, bank reconciliations, and ledger maintenance</li>
                    <li>• Cost-effective outsourcing with accuracy and confidentiality</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Principles of Our Work */}
        <section id="principles" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Principles of Our Work</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                These foundational values guide our approach to every client relationship and solution we provide.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Confidentiality & Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We handle all client information with the utmost confidentiality and operate with complete honesty, transparency, and ethical standards.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Client-Centric Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our services are tailored to meet the unique needs of each client. We focus on delivering practical, results-driven solutions with personalized attention.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Long-Term Partnerships</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We aim to build lasting relationships with our clients by providing consistent support, value, and trust over time.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Professionalism & Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our team brings strong technical knowledge, industry expertise, and a commitment to staying updated with the latest accounting and tax regulations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tax Calculator & WHT Tax Card */}
        <section id="calculator" className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Tax Calculator & WHT Tax Card</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Estimate your tax liability and access WHT tax card services with our easy-to-use tools.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="tax-calculator" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="tax-calculator">Tax Calculator</TabsTrigger>
                  <TabsTrigger value="wht-card">WHT Tax Card</TabsTrigger>
                </TabsList>
                <TabsContent value="tax-calculator" className="p-6 bg-white rounded-lg shadow-sm mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="annual-income" className="block text-sm font-medium mb-1">
                          Annual Income (PKR)
                        </label>
                        <Input id="annual-income" type="number" placeholder="Enter your annual income" />
                      </div>
                      <div>
                        <label htmlFor="deductions" className="block text-sm font-medium mb-1">
                          Total Deductions (PKR)
                        </label>
                        <Input id="deductions" type="number" placeholder="Enter total deductions" />
                      </div>
                      <div>
                        <label htmlFor="tax-credits" className="block text-sm font-medium mb-1">
                          Tax Credits (PKR)
                        </label>
                        <Input id="tax-credits" type="number" placeholder="Enter tax credits" />
                      </div>
                      <Button className="w-full mt-4">
                        <Calculator className="mr-2 h-4 w-4" /> Calculate Tax
                      </Button>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground">Tax calculation results will appear here</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="wht-card" className="p-6 bg-white rounded-lg shadow-sm mt-4">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Withholding Tax (WHT) Card Services</h3>
                      <p className="text-muted-foreground mb-4">
                        We provide comprehensive WHT tax card services including registration, renewal, and compliance support.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">WHT Registration</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Complete WHT card registration services for individuals and businesses.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">Learn More</Button>
                        </CardFooter>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">WHT Renewal</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Timely renewal services to ensure continuous compliance with tax regulations.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">Learn More</Button>
                        </CardFooter>
                      </Card>
                    </div>
                    <div className="mt-6">
                      <Button className="w-full" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        <FileText className="mr-2 h-4 w-4" /> Request WHT Card Service
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Request a Call Back */}
        <section id="callback" className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h2 className="text-2xl font-bold mb-6">Request a Call Back</h2>
                  <p className="mb-6 text-muted-foreground">
                    Get in touch with our team. We'll call you back to discuss your requirements and how we can help your business.
                  </p>
                  <form onSubmit={handleCallbackSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="callback-name" className="block text-sm font-medium mb-1">
                        Full Name
                      </label>
                      <Input 
                        id="callback-name" 
                        placeholder="Enter your full name" 
                        value={callbackForm.name}
                        onChange={(e) => setCallbackForm({...callbackForm, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="callback-phone" className="block text-sm font-medium mb-1">
                        Mobile Number
                      </label>
                      <Input 
                        id="callback-phone" 
                        type="tel" 
                        placeholder="Enter your mobile number" 
                        value={callbackForm.phone}
                        onChange={(e) => setCallbackForm({...callbackForm, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="callback-message" className="block text-sm font-medium mb-1">
                        Message (Optional)
                      </label>
                      <Textarea 
                        id="callback-message" 
                        placeholder="Tell us about your requirements" 
                        value={callbackForm.message}
                        onChange={(e) => setCallbackForm({...callbackForm, message: e.target.value})}
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      <Phone className="mr-2 h-4 w-4" /> Request Call Back
                    </Button>
                  </form>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm font-medium">Direct Contact:</p>
                    <p className="text-sm text-muted-foreground">Name: Hamza Riaz</p>
                    <p className="text-sm text-muted-foreground">Mobile: <a href="tel:03174121900" className="text-primary hover:underline">03174121900</a></p>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto bg-gradient-to-br from-primary/20 to-primary/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Phone className="h-32 w-32 text-primary/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">About Us</h2>
                <p className="text-lg mb-6">
                  We are a trusted accounting and consultancy company providing end-to-end financial and compliance solutions to businesses in Pakistan, the Gulf region (including Saudi Arabia, UAE, and Bahrain), and Europe.
                </p>
                <p className="text-lg mb-6">
                  Our mission is to simplify business operations and financial management through accurate bookkeeping, timely tax filing, and regulatory compliance. Whether you're launching a new venture or managing an established business, we help you stay compliant and financially organized—locally and globally.
                </p>
                <p className="text-lg mb-8">
                  With the use of cloud-based tools such as Zoho Books, Sage, and QuickBooks, we offer streamlined, remote-friendly services tailored to your business model.
                </p>
                <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Get in Touch
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="ProcountSolutions team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Services - Detailed */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive services tailored for Pakistan, Gulf Region, and Europe.
              </p>
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Pakistan-Based Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Compliance & Registration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Company registration and incorporation in Pakistan</li>
                        <li>• Trademark and copyright registration</li>
                        <li>• EOBI, Social Security, and Provident Fund registration</li>
                        <li>• PSEB, P@SHA and LCCI registrations</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Taxation & Compliance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• FBR NTN registration for individuals and businesses</li>
                        <li>• Income tax return filing for individuals and companies</li>
                        <li>• Sales tax registration and compliance</li>
                        <li>• Strategic tax planning and advisory</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Accounting & Reporting</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Complete accounting and bookkeeping services</li>
                        <li>• Financial statement preparation</li>
                        <li>• Monthly, quarterly, and annual reporting</li>
                        <li>• Using leading cloud-based software: Zoho Books, Sage, and QuickBooks</li>
                        <li>• Real-time financial insights for better business decisions</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Business Planning</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Business Plan and feasibility Report</li>
                        <li>• Forecasting and projection</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Gulf Region Services (UAE, Saudi Arabia, Bahrain)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Remote Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Remote bookkeeping services</li>
                        <li>• VAT return filing and compliance</li>
                        <li>• Corporate annual return preparation and submission</li>
                        <li>• Business Plan and feasibility Report</li>
                        <li>• Forecasting and projection</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Europe-Focused Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>European Client Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Dedicated bookkeeping services for European clients</li>
                        <li>• Cloud-based accounting using QuickBooks</li>
                        <li>• Monthly financial reports, bank reconciliations, and ledger maintenance</li>
                        <li>• Cost-effective outsourcing with a focus on accuracy and confidentiality</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Us?</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                We deliver exceptional value through expertise, technology, and personalized service.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Certified Professionals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Certified professionals with regional and international experience in accounting, taxation, and business advisory.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Cloud-Based Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Secure and remote-friendly cloud accounting solutions using Zoho Books, Sage, and QuickBooks for seamless collaboration.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Personalized Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Personalized support with a long-term partnership mindset, ensuring your business receives dedicated attention and care.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Transparent Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Transparent pricing and timely delivery, ensuring you know exactly what you're paying for and when to expect results.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Get in touch with our team for expert financial and compliance solutions.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <Phone className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Call Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a href="tel:03174121900" className="text-lg font-semibold text-primary hover:underline">
                      03174121900
                    </a>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Mail className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Email Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a href="mailto:info@procountSolutions.com" className="text-lg font-semibold text-primary hover:underline break-all">
                      info@procountSolutions.com
                    </a>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <MapPin className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Our Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">
                      Lahore, Pakistan
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold text-primary">Procount</span>
                <span className="text-xl font-bold">Solutions</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional accounting and consultancy services for businesses in Pakistan, Gulf region, and Europe.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white">
                    Compliance & Legal Registrations
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white">
                    Taxation Services
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white">
                    Accounting & Bookkeeping
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white">
                    Business Advisory
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white">
                    Financial Advisory
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#principles" className="text-gray-400 hover:text-white">
                    Principles
                  </Link>
                </li>
                <li>
                  <Link href="#calculator" className="text-gray-400 hover:text-white">
                    Calculator
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <Phone className="text-gray-400 mt-0.5 h-5 w-5" />
                  <a href="tel:03174121900" className="text-gray-400 hover:text-white">
                    03174121900
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="text-gray-400 mt-0.5 h-5 w-5" />
                  <a href="mailto:info@procountSolutions.com" className="text-gray-400 hover:text-white break-all">
                    info@procountSolutions.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="text-gray-400 mt-0.5 h-5 w-5" />
                  <span className="text-gray-400">
                    Lahore, Pakistan
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ProcountSolutions Pvt Limited. All rights reserved.</p>
            <p className="mt-2">CEO: Hamza Riaz</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
