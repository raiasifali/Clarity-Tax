"use client"

import Image from "next/image"
import Link from "next/link"
import { Calculator, Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export default function Home() {
  const [callbackForm, setCallbackForm] = useState({
    name: "",
    phone: "",
    message: ""
  })

  const [taxCalculator, setTaxCalculator] = useState({
    incomeType: "salary", // "salary" or "business"
    annualIncome: "",
    deductions: "",
    taxCredits: ""
  })

  const [taxResult, setTaxResult] = useState<{
    taxableIncome: number
    taxAmount: number
    effectiveRate: number
    breakdown: Array<{ bracket: string; amount: number; rate: number; tax: number }>
  } | null>(null)

  // Pakistan Tax Rates 2025-2026 (Finance Act 2025)
  // Salary Income - Progressive Tax Structure
  const salaryTaxBrackets = [
    { min: 0, max: 600000, baseTax: 0, rate: 0, description: "Up to Rs. 600,000" },
    { min: 600001, max: 1200000, baseTax: 0, rate: 0.01, description: "Rs. 600,001 to Rs. 1,200,000" },
    { min: 1200001, max: 2200000, baseTax: 6000, rate: 0.11, description: "Rs. 1,200,001 to Rs. 2,200,000" },
    { min: 2200001, max: 3200000, baseTax: 116000, rate: 0.23, description: "Rs. 2,200,001 to Rs. 3,200,000" },
    { min: 3200001, max: 4100000, baseTax: 345000, rate: 0.30, description: "Rs. 3,200,001 to Rs. 4,100,000" },
    { min: 4100001, max: Infinity, baseTax: 615000, rate: 0.35, description: "Above Rs. 4,100,000" }
  ]

  // Business Income - Progressive Tax Structure (estimated rates)
  const businessTaxBrackets = [
    { min: 0, max: 600000, baseTax: 0, rate: 0, description: "Up to Rs. 600,000" },
    { min: 600001, max: 1200000, baseTax: 0, rate: 0.02, description: "Rs. 600,001 to Rs. 1,200,000" },
    { min: 1200001, max: 2200000, baseTax: 12000, rate: 0.22, description: "Rs. 1,200,001 to Rs. 2,200,000" },
    { min: 2200001, max: 3200000, baseTax: 232000, rate: 0.46, description: "Rs. 2,200,001 to Rs. 3,200,000" },
    { min: 3200001, max: 4100000, baseTax: 690000, rate: 0.60, description: "Rs. 3,200,001 to Rs. 4,100,000" },
    { min: 4100001, max: Infinity, baseTax: 1230000, rate: 0.70, description: "Above Rs. 4,100,000" }
  ]

  const calculateTax = () => {
    const income = parseFloat(taxCalculator.annualIncome) || 0
    const deductions = parseFloat(taxCalculator.deductions) || 0
    const taxCredits = parseFloat(taxCalculator.taxCredits) || 0

    if (income <= 0) {
      setTaxResult(null)
      return
    }

    const taxableIncome = Math.max(0, income - deductions)
    const brackets = taxCalculator.incomeType === "salary" ? salaryTaxBrackets : businessTaxBrackets
    
    // Find the applicable bracket and calculate tax
    let totalTax = 0
    let applicableBracket = brackets[0]
    
    for (let i = brackets.length - 1; i >= 0; i--) {
      if (taxableIncome >= brackets[i].min) {
        applicableBracket = brackets[i]
        const excessAmount = taxableIncome - brackets[i].min
        totalTax = brackets[i].baseTax + (excessAmount * brackets[i].rate)
        break
      }
    }

    // Build breakdown showing all brackets up to the applicable one
    const breakdown: Array<{ bracket: string; amount: number; rate: number; tax: number }> = []
    let previousBracketTax = 0
    
    for (let i = 0; i < brackets.length; i++) {
      const bracket = brackets[i]
      
      if (taxableIncome <= bracket.min) break
      
      let amountInBracket = 0
      let taxInBracket = 0
      let currentBracketTax = 0
      
      if (taxableIncome >= bracket.max) {
        // Full bracket
        amountInBracket = bracket.max - bracket.min + 1
        // Calculate total tax up to end of this bracket
        const excessAmount = bracket.max - bracket.min
        currentBracketTax = bracket.baseTax + (excessAmount * bracket.rate)
        taxInBracket = currentBracketTax - previousBracketTax
      } else {
        // Partial bracket (last applicable bracket)
        amountInBracket = taxableIncome - bracket.min + 1
        const excessAmount = taxableIncome - bracket.min
        currentBracketTax = bracket.baseTax + (excessAmount * bracket.rate)
        taxInBracket = currentBracketTax - previousBracketTax
      }
      
      if (amountInBracket > 0) {
        let bracketLabel = bracket.description
        if (bracket.max === Infinity) {
          bracketLabel = `Above ${(bracket.min / 1000000).toFixed(1)}M PKR`
        }
        
        breakdown.push({
          bracket: bracketLabel,
          amount: Math.round(amountInBracket),
          rate: bracket.rate * 100,
          tax: Math.round(Math.max(0, taxInBracket))
        })
        
        previousBracketTax = currentBracketTax
      }
    }

    const finalTax = Math.max(0, Math.round(totalTax - taxCredits))
    const effectiveRate = taxableIncome > 0 ? (finalTax / taxableIncome) * 100 : 0

    setTaxResult({
      taxableIncome: Math.round(taxableIncome),
      taxAmount: finalTax,
      effectiveRate,
      breakdown: breakdown
    })
  }

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
        <section id="home" className="relative overflow-hidden">
          {/* Professional Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNHYtMmgtNHpNNiAzNHYtNEg0djRIMHYyaDR2NGgydi00aDR2LTJINnpNNiA0VjBINHY0SDB2Mmg0djRoMlY2aDRWNEg2eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
            {/* Geometric Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
          </div>
          <div className="container relative z-20 flex items-center justify-center min-h-[600px] py-20">
            <div className="max-w-3xl text-white text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl drop-shadow-lg">
                ProcountSolutions Pvt Limited
              </h1>
              <p className="mt-6 text-xl leading-relaxed drop-shadow-md max-w-2xl mx-auto">
                Trusted accounting and consultancy company providing end-to-end financial and compliance solutions to businesses in Pakistan, the Gulf region, and Europe.
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Request a Call Back
                </Button>
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

        {/* Tax Calculator */}
        <section id="calculator" className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Tax Calculator</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Estimate your tax liability for tax year 2025-2026 using our easy-to-use calculator.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="income-type" className="block text-sm font-medium mb-1">
                        Income Type
                      </label>
                      <Select
                        value={taxCalculator.incomeType}
                        onValueChange={(value) => setTaxCalculator({ ...taxCalculator, incomeType: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select income type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="salary">Salary Income</SelectItem>
                          <SelectItem value="business">Business Income</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground mt-1">
                        {taxCalculator.incomeType === "salary" 
                          ? "Tax rates: 0% (up to 600k), 1% (600k-1.2M), 11% (1.2M-2.2M), 23% (2.2M-3.2M), 30% (3.2M-4.1M), 35% (above 4.1M)"
                          : "Tax rates: 0% (up to 600k), 2% (600k-1.2M), 22% (1.2M-2.2M), 46% (2.2M-3.2M), 60% (3.2M-4.1M), 70% (above 4.1M)"}
                      </p>
                    </div>
                    <div>
                      <label htmlFor="annual-income" className="block text-sm font-medium mb-1">
                        Annual Income (PKR)
                      </label>
                      <Input 
                        id="annual-income" 
                        type="number" 
                        placeholder="Enter your annual income" 
                        value={taxCalculator.annualIncome}
                        onChange={(e) => setTaxCalculator({ ...taxCalculator, annualIncome: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="deductions" className="block text-sm font-medium mb-1">
                        Total Deductions (PKR)
                      </label>
                      <Input 
                        id="deductions" 
                        type="number" 
                        placeholder="Enter total deductions" 
                        value={taxCalculator.deductions}
                        onChange={(e) => setTaxCalculator({ ...taxCalculator, deductions: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="tax-credits" className="block text-sm font-medium mb-1">
                        Tax Credits (PKR)
                      </label>
                      <Input 
                        id="tax-credits" 
                        type="number" 
                        placeholder="Enter tax credits" 
                        value={taxCalculator.taxCredits}
                        onChange={(e) => setTaxCalculator({ ...taxCalculator, taxCredits: e.target.value })}
                      />
                    </div>
                    <Button className="w-full mt-4" onClick={calculateTax}>
                      <Calculator className="mr-2 h-4 w-4" /> Calculate Tax
                    </Button>
                  </div>
                  <div className="flex items-center justify-center">
                    {taxResult ? (
                      <div className="w-full bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 space-y-4">
                        <div className="text-center border-b pb-4">
                          <h3 className="text-lg font-semibold mb-2">Tax Calculation Results</h3>
                          <p className="text-sm text-muted-foreground">Tax Year 2025-2026 ({taxCalculator.incomeType === "salary" ? "Salary" : "Business"} Income)</p>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Gross Income:</span>
                            <span className="font-semibold">{parseFloat(taxCalculator.annualIncome || "0").toLocaleString('en-PK')} PKR</span>
                          </div>
                          {parseFloat(taxCalculator.deductions || "0") > 0 && (
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Deductions:</span>
                              <span className="font-semibold text-green-600">-{parseFloat(taxCalculator.deductions || "0").toLocaleString('en-PK')} PKR</span>
                            </div>
                          )}
                          <div className="flex justify-between border-t pt-2">
                            <span className="text-sm font-medium">Taxable Income:</span>
                            <span className="font-semibold">{taxResult.taxableIncome.toLocaleString('en-PK')} PKR</span>
                          </div>
                          <div className="flex justify-between text-lg font-bold border-t pt-2">
                            <span>Total Tax:</span>
                            <span className="text-primary">{taxResult.taxAmount.toLocaleString('en-PK')} PKR</span>
                          </div>
                          {parseFloat(taxCalculator.taxCredits || "0") > 0 && (
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Tax Credits Applied:</span>
                              <span className="text-green-600">-{parseFloat(taxCalculator.taxCredits || "0").toLocaleString('en-PK')} PKR</span>
                            </div>
                          )}
                          <div className="flex justify-between border-t pt-2">
                            <span className="text-sm font-medium">Net Income After Tax:</span>
                            <span className="font-bold text-green-600">{(parseFloat(taxCalculator.annualIncome || "0") - taxResult.taxAmount).toLocaleString('en-PK')} PKR</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Effective Tax Rate:</span>
                            <span className="font-semibold">{taxResult.effectiveRate.toFixed(2)}%</span>
                          </div>
                          <div className="mt-4 pt-4 border-t">
                            <p className="text-sm font-semibold mb-2">Tax Breakdown by Bracket:</p>
                            <div className="space-y-2 max-h-48 overflow-y-auto">
                              {taxResult.breakdown.map((item, index) => (
                                <div key={index} className="text-xs bg-white/50 p-2 rounded">
                                  <div className="flex justify-between">
                                    <span className="font-medium">{item.bracket}</span>
                                    <span>{item.rate}%</span>
                                  </div>
                                  <div className="flex justify-between text-muted-foreground mt-1">
                                    <span>Amount: {item.amount.toLocaleString('en-PK')} PKR</span>
                                    <span>Tax: {item.tax.toLocaleString('en-PK')} PKR</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground text-center px-4">
                          Enter your income details and click "Calculate Tax" to see results
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
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
              <div className="relative h-[400px] rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-2 border-blue-100">
                {/* Professional Design Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    {/* Icon/Logo Area */}
                    <div className="mb-6 flex justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="space-y-2">
                      <div className="flex justify-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      </div>
                      <p className="text-sm font-semibold text-gray-700 mt-4">Professional Services</p>
                      <p className="text-xs text-gray-500">Trusted Accounting Solutions</p>
                    </div>
                  </div>
                </div>
                {/* Decorative Background Shapes */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-200/30 rounded-full blur-2xl"></div>
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              </div>
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
      <footer className="bg-gray-900 text-white py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl font-bold text-primary">Procount</span>
                <span className="text-2xl font-bold">Solutions</span>
              </div>
              <p className="text-gray-400 text-sm">
                Professional accounting and consultancy services for businesses in Pakistan, Gulf region, and Europe.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-gray-400 hover:text-white text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Phone className="text-primary h-4 w-4" />
                  <a href="tel:03174121900" className="text-gray-400 hover:text-white text-sm">
                    03174121900
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-primary h-4 w-4" />
                  <a href="mailto:info@procountSolutions.com" className="text-gray-400 hover:text-white text-sm break-all">
                    info@procountSolutions.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="text-primary h-4 w-4" />
                  <span className="text-gray-400 text-sm">
                    Lahore, Pakistan
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} ProcountSolutions Pvt Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/923174121900"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute right-full mr-3 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            WhatsApp Us
          </span>
        </a>
      </div>
    </div>
  )
}
