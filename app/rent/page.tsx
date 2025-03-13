"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Home,
  Search,
  DollarSign,
  Clock,
  CheckCircle,
  Calendar,
  User,
  Mail,
  Phone,
  MapPin,
  Bed,
  Bath,
  Square,
} from "lucide-react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function RentPage() {
  const [priceRange, setPriceRange] = useState([0, 5000]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-3">
        <Header />
      </div>
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">
              Find Your Perfect Rental Home
            </h1>
            <p className="text-xl mb-8">
              Discover comfortable and stylish properties for rent in your
              desired location
            </p>
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-6">
                <form className="flex flex-wrap gap-4">
                  <Input
                    type="text"
                    placeholder="Location"
                    className="flex-grow"
                  />
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Bedrooms" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="studio">Studio</SelectItem>
                      <SelectItem value="1">1 Bedroom</SelectItem>
                      <SelectItem value="2">2 Bedrooms</SelectItem>
                      <SelectItem value="3">3+ Bedrooms</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button type="submit" className="w-full sm:w-auto">
                    Search Properties
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Rent with DreamHome Realty?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <DollarSign className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    Competitive Rates
                  </h3>
                  <p className="text-gray-600">
                    We offer a wide range of properties at competitive rates to
                    fit every budget.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    Flexible Leases
                  </h3>
                  <p className="text-gray-600">
                    Choose from various lease terms that suit your needs, from
                    short-term to long-term rentals.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    Quality Assurance
                  </h3>
                  <p className="text-gray-600">
                    All our properties are thoroughly inspected and maintained
                    to ensure your comfort.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured Rental Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=200&width=400`}
                    alt={`Property ${i}`}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      Modern {i % 2 === 0 ? "Apartment" : "House"}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      123 Main St, Anytown, USA
                    </p>
                    <div className="flex justify-between text-sm mb-4">
                      <span className="flex items-center">
                        <Bed className="h-4 w-4 mr-1" /> {i + 1} Beds
                      </span>
                      <span className="flex items-center">
                        <Bath className="h-4 w-4 mr-1" /> {(i % 2) + 1} Baths
                      </span>
                      <span className="flex items-center">
                        <Square className="h-4 w-4 mr-1" /> {800 + i * 100} sqft
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">
                        ${(1500 + i * 100).toLocaleString()}/month
                      </span>
                      <Button variant="outline">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button size="lg">View All Rental Properties</Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Renting Process
            </h2>
            <Tabs defaultValue="search" className="max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="search">Search</TabsTrigger>
                <TabsTrigger value="apply">Apply</TabsTrigger>
                <TabsTrigger value="approve">Approve</TabsTrigger>
                <TabsTrigger value="movein">Move In</TabsTrigger>
              </TabsList>
              <TabsContent value="search">
                <Card>
                  <CardHeader>
                    <CardTitle>Search for Your Ideal Rental</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Browse our extensive list of rental properties</li>
                      <li>Use filters to narrow down your search</li>
                      <li>
                        Schedule viewings for properties you're interested in
                      </li>
                      <li>
                        Ask questions and get detailed information from our
                        agents
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="apply">
                <Card>
                  <CardHeader>
                    <CardTitle>Submit Your Application</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Fill out the rental application form</li>
                      <li>
                        Provide necessary documentation (proof of income, ID,
                        etc.)
                      </li>
                      <li>Pay the application fee</li>
                      <li>Authorize a background and credit check</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="approve">
                <Card>
                  <CardHeader>
                    <CardTitle>Get Approved</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        We review your application and conduct necessary checks
                      </li>
                      <li>Receive approval notification</li>
                      <li>Review and sign the lease agreement</li>
                      <li>Pay the security deposit and first month's rent</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="movein">
                <Card>
                  <CardHeader>
                    <CardTitle>Move In to Your New Home</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Schedule your move-in date</li>
                      <li>Receive keys and access to your new rental</li>
                      <li>Conduct a move-in inspection with our agent</li>
                      <li>Settle into your new home!</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What documents do I need to apply for a rental?
                </AccordionTrigger>
                <AccordionContent>
                  Typically, you'll need to provide proof of income (pay stubs
                  or bank statements), photo ID, rental history, and references.
                  Some landlords may require additional documentation. We'll
                  provide a detailed checklist during the application process.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How long does the application process take?
                </AccordionTrigger>
                <AccordionContent>
                  The application process usually takes 2-5 business days,
                  depending on how quickly we can verify your information and
                  conduct necessary checks. We strive to process applications as
                  quickly as possible to help you secure your desired rental.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Is renters insurance required?
                </AccordionTrigger>
                <AccordionContent>
                  Renters insurance requirements vary by property. Some
                  landlords require it, while others don't. Even if it's not
                  required, we strongly recommend obtaining renters insurance to
                  protect your personal belongings and provide liability
                  coverage.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Can I have pets in my rental property?
                </AccordionTrigger>
                <AccordionContent>
                  Pet policies vary by property. Some rentals allow pets with
                  certain restrictions or additional fees, while others may not
                  allow pets at all. Be sure to check the specific pet policy
                  for each property you're interested in, and discuss any
                  pet-related questions with our agents.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What Our Renters Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Emma S.",
                  text: "DreamHome Realty made finding my apartment a breeze. Their team was incredibly helpful throughout the entire process.",
                },
                {
                  name: "Alex M.",
                  text: "I've rented through several agencies, but DreamHome Realty stands out. Their properties are well-maintained and their service is top-notch.",
                },
                {
                  name: "Sophia L.",
                  text: "The flexibility and variety of rental options with DreamHome Realty are unmatched. I found exactly what I was looking for!",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <User className="h-8 w-8 text-primary mb-4" />
                    <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Schedule a Viewing
              </h2>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <Input type="text" placeholder="Your Name" required />
                    <Input type="email" placeholder="Your Email" required />
                    <Input type="tel" placeholder="Your Phone" required />
                    <Input
                      type="text"
                      placeholder="Desired Property Address"
                      required
                    />
                    <Input
                      type="datetime-local"
                      placeholder="Preferred Viewing Date and Time"
                      required
                    />
                    <Textarea placeholder="Any additional comments or questions?" />
                    <Button type="submit" size="lg" className="w-full">
                      Schedule Viewing
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
