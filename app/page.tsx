import Image from "next/image"
import Link from "next/link"
import { Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-primary">Clarity</span>
              <span className="text-xl font-bold">Tax</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#calculator" className="text-sm font-medium hover:text-primary">
              Calculator
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#blog" className="text-sm font-medium hover:text-primary">
              Blog
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Log in
            </Button>
            <Button size="sm" className="hidden md:flex">
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
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
          <div className="relative h-[600px]">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Tax professionals in a meeting"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container absolute inset-0 z-20 flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Strategic Tax Solutions for Your Financial Success
              </h1>
              <p className="mt-6 text-xl">
                Expert tax planning and compliance services to optimize your financial position and secure your future.
              </p>
              <div className="mt-10 flex gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Comprehensive Tax Services</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Our team of certified tax professionals provides tailored solutions to meet your specific needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Tax Planning & Filing</CardTitle>
                  <CardDescription>Optimize your personal tax situation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Comprehensive personal tax services including return preparation, tax planning strategies, and
                    maximizing deductions to minimize your tax burden.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button>Learn More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Business Tax Compliance</CardTitle>
                  <CardDescription>Stay compliant and minimize liability</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Full-service business tax solutions including corporate returns, quarterly estimates, and strategic
                    planning to reduce your company's tax exposure.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button>Learn More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Business Registration</CardTitle>
                  <CardDescription>Start your business the right way</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Complete business formation services including entity selection, registration with tax authorities,
                    and obtaining necessary licenses and permits.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button>Learn More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Tax Audit Representation</CardTitle>
                  <CardDescription>Expert defense during tax audits</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Professional representation during tax audits, including preparation of documentation, communication
                    with tax authorities, and resolution of disputes.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button>Learn More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Accounting & Bookkeeping</CardTitle>
                  <CardDescription>Maintain accurate financial records</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Comprehensive bookkeeping and accounting services to ensure accurate financial reporting, compliance
                    with regulations, and informed business decisions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button>Learn More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Digital Tax Solutions</CardTitle>
                  <CardDescription>Modern tax management tools</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Cutting-edge digital tax solutions including cloud-based accounting, electronic filing, and secure
                    document management for maximum efficiency.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button>Learn More</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Premier Tax Advisory Services</h2>
                <p className="text-lg mb-6">
                  Clarity Tax delivers exceptional tax consulting services tailored to your unique financial situation.
                  Our team of certified professionals combines deep technical knowledge with personalized attention to
                  help you navigate complex tax regulations.
                </p>
                <p className="text-lg mb-8">
                  Whether you're an individual seeking to optimize your personal taxes or a business looking for
                  comprehensive tax planning, our strategic approach ensures you receive the most advantageous tax
                  position possible.
                </p>
                <Button size="lg">Schedule a Consultation</Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Tax professionals in discussion"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="calculator" className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Tax Calculator 2024-2025</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Estimate your tax liability with our easy-to-use calculator. Get a quick overview of your potential tax
                situation.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="individual" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="individual">Individual</TabsTrigger>
                  <TabsTrigger value="business">Business</TabsTrigger>
                </TabsList>
                <TabsContent value="individual" className="p-6 bg-white rounded-lg shadow-sm mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="annual-income" className="block text-sm font-medium mb-1">
                          Annual Income
                        </label>
                        <Input id="annual-income" placeholder="Enter your annual income" />
                      </div>
                      <div>
                        <label htmlFor="deductions" className="block text-sm font-medium mb-1">
                          Total Deductions
                        </label>
                        <Input id="deductions" placeholder="Enter total deductions" />
                      </div>
                      <div>
                        <label htmlFor="tax-credits" className="block text-sm font-medium mb-1">
                          Tax Credits
                        </label>
                        <Input id="tax-credits" placeholder="Enter tax credits" />
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
                <TabsContent value="business" className="p-6 bg-white rounded-lg shadow-sm mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="business-income" className="block text-sm font-medium mb-1">
                          Business Revenue
                        </label>
                        <Input id="business-income" placeholder="Enter business revenue" />
                      </div>
                      <div>
                        <label htmlFor="business-expenses" className="block text-sm font-medium mb-1">
                          Business Expenses
                        </label>
                        <Input id="business-expenses" placeholder="Enter business expenses" />
                      </div>
                      <div>
                        <label htmlFor="business-credits" className="block text-sm font-medium mb-1">
                          Business Tax Credits
                        </label>
                        <Input id="business-credits" placeholder="Enter business tax credits" />
                      </div>
                      <Button className="w-full mt-4">
                        <Calculator className="mr-2 h-4 w-4" /> Calculate Business Tax
                      </Button>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground">Business tax calculation results will appear here</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Core Principles</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                These foundational values guide our approach to every client relationship and tax solution we provide.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                  <span className="text-xl font-bold">01</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Expertise</h3>
                <p className="text-muted-foreground">
                  Our team consists of highly qualified tax professionals with extensive experience across various
                  industries and tax situations.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                  <span className="text-xl font-bold">02</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Long-term Relationships</h3>
                <p className="text-muted-foreground">
                  We focus on building lasting partnerships with our clients, providing consistent support and adapting
                  to their evolving needs.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                  <span className="text-xl font-bold">03</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Value-Driven Solutions</h3>
                <p className="text-muted-foreground">
                  We deliver practical, effective tax strategies that provide measurable value and tangible financial
                  benefits to our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Achievements</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                A track record of excellence in providing exceptional tax services to our valued clients.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
                <p className="text-muted-foreground">Satisfied Clients</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">$30M+</div>
                <p className="text-muted-foreground">Tax Savings</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Client Retention</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Hear from businesses and individuals who have transformed their tax situation with our help.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
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
                        className="text-primary"
                      >
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-sm font-medium">Michael Thompson</div>
                      <div className="text-xs text-muted-foreground">CEO, Thompson Enterprises</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "Clarity Tax has been instrumental in optimizing our corporate tax strategy. Their proactive
                    approach has saved us thousands while ensuring complete compliance. Highly recommended!"
                  </p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-yellow-400"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
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
                        className="text-primary"
                      >
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-sm font-medium">Sarah Johnson</div>
                      <div className="text-xs text-muted-foreground">Small Business Owner</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "As a small business owner, tax compliance was overwhelming until I found Clarity Tax. They
                    simplified everything and found deductions I never knew existed. My business is thriving thanks to
                    their expertise."
                  </p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-yellow-400"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
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
                        className="text-primary"
                      >
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-sm font-medium">David Rodriguez</div>
                      <div className="text-xs text-muted-foreground">Real Estate Investor</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "The team at Clarity Tax understands the complexities of real estate taxation like no other. Their
                    strategic advice has maximized my investment returns while keeping me fully compliant."
                  </p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-yellow-400"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="blog" className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">From Our Blog</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Stay informed with the latest tax insights, updates, and strategies from our expert team.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Blog post thumbnail"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">April 15, 2024</div>
                  <CardTitle>Essential Tax Deductions Most Business Owners Miss</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Discover the often-overlooked tax deductions that could significantly reduce your business tax
                    liability and improve your bottom line.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Read More</Button>
                </CardFooter>
              </Card>
              <Card>
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Blog post thumbnail"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">March 28, 2024</div>
                  <CardTitle>Tax Planning Strategies for the Self-Employed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Learn effective tax planning techniques specifically designed for freelancers and self-employed
                    professionals to maximize savings.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Read More</Button>
                </CardFooter>
              </Card>
              <Card>
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Blog post thumbnail"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">March 10, 2024</div>
                  <CardTitle>Understanding the New Tax Law Changes for 2024</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A comprehensive breakdown of the latest tax law changes and how they might impact your personal and
                    business tax situation.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Read More</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h2 className="text-2xl font-bold mb-6">Ready to Optimize Your Tax Strategy?</h2>
                  <p className="mb-6 text-muted-foreground">
                    Schedule a no-obligation consultation with our tax experts and discover how we can help you minimize
                    tax liability and maximize financial success.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Full Name
                      </label>
                      <Input id="name" placeholder="Enter your full name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Phone Number
                      </label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    <Button className="w-full">Request Consultation</Button>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Tax consultation"
                    fill
                    className="object-cover"
                  />
                </div>
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
                <span className="text-xl font-bold text-primary">Clarity</span>
                <span className="text-xl font-bold">Tax</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional tax services for individuals and businesses. Optimize your tax position with our expert
                team.
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
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Personal Tax Planning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Business Tax Compliance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Business Registration
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Tax Audit Representation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Accounting & Bookkeeping
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400 mt-0.5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="text-gray-400">(123) 456-7890</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400 mt-0.5"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span className="text-gray-400">info@claritytax.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400 mt-0.5"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-gray-400">
                    123 Business Ave, Suite 500
                    <br />
                    New York, NY 10001
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Clarity Tax. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
