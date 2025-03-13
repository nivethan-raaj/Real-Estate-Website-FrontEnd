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
import {
  Home,
  DollarSign,
  TrendingUp,
  CheckCircle,
  Calendar,
  User,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Header from "@/components/ui/header";

export default function SellPage() {
  const [estimatedValue, setEstimatedValue] = useState<number | null>(null);

  const handleValuationSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real application, this would call an API to get an estimated value
    setEstimatedValue(Math.floor(Math.random() * (1000000 - 100000) + 100000));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-3">
        <Header />
      </div>
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">
              Sell Your Property with Confidence
            </h1>
            <p className="text-xl mb-8">
              Get top dollar for your home with our expert guidance and
              marketing strategies
            </p>
            <Button size="lg" variant="secondary">
              Request a Free Consultation
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Sell with Project Sample?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <DollarSign className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    Maximize Your Profit
                  </h3>
                  <p className="text-gray-600">
                    Our expert agents use market data and innovative strategies
                    to ensure you get the best price for your property.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Faster Sales</h3>
                  <p className="text-gray-600">
                    With our extensive network and marketing expertise, we help
                    you sell your property quickly without sacrificing value.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    Stress-Free Process
                  </h3>
                  <p className="text-gray-600">
                    We handle all the details, from paperwork to negotiations,
                    making your selling experience smooth and hassle-free.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Get Your Free Property Valuation
            </h2>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6">
                <form onSubmit={handleValuationSubmit} className="space-y-4">
                  <Input type="text" placeholder="Property Address" required />
                  <div className="grid grid-cols-2 gap-4">
                    <Input type="number" placeholder="Bedrooms" required />
                    <Input type="number" placeholder="Bathrooms" required />
                  </div>
                  <Input type="number" placeholder="Square Footage" required />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button type="submit" className="w-full">
                    Get Estimated Value
                  </Button>
                </form>
                {estimatedValue && (
                  <div className="mt-6 text-center">
                    <h3 className="text-2xl font-bold mb-2">Estimated Value</h3>
                    <p className="text-3xl text-primary">
                      ${estimatedValue.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      This is a rough estimate. Contact us for a more accurate
                      valuation.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              The Selling Process
            </h2>
            <Tabs defaultValue="prepare" className="max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="prepare">Prepare</TabsTrigger>
                <TabsTrigger value="list">List</TabsTrigger>
                <TabsTrigger value="showings">Showings</TabsTrigger>
                <TabsTrigger value="close">Close</TabsTrigger>
              </TabsList>
              <TabsContent value="prepare">
                <Card>
                  <CardHeader>
                    <CardTitle>Prepare Your Home</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Declutter and deep clean your home</li>
                      <li>Make necessary repairs and improvements</li>
                      <li>Stage your home to appeal to potential buyers</li>
                      <li>Get a professional home inspection</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="list">
                <Card>
                  <CardHeader>
                    <CardTitle>List Your Property</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Set the right price based on market analysis</li>
                      <li>Create stunning listing photos and videos</li>
                      <li>Write an compelling property description</li>
                      <li>Market your property across multiple channels</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="showings">
                <Card>
                  <CardHeader>
                    <CardTitle>Property Showings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Schedule and manage property viewings</li>
                      <li>Collect feedback from potential buyers</li>
                      <li>Host open houses to attract more buyers</li>
                      <li>Negotiate offers and counteroffers</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="close">
                <Card>
                  <CardHeader>
                    <CardTitle>Close the Deal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Review and accept the final offer</li>
                      <li>Complete necessary paperwork and disclosures</li>
                      <li>Coordinate with lawyers and title companies</li>
                      <li>Finalize the sale and transfer ownership</li>
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
                  How long does it typically take to sell a house?
                </AccordionTrigger>
                <AccordionContent>
                  The time it takes to sell a house can vary depending on market
                  conditions, property location, and pricing. On average, it can
                  take anywhere from 2 to 3 months from listing to closing.
                  However, with our expert marketing strategies and extensive
                  network, we often help our clients sell their properties
                  faster.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What should I do to prepare my home for sale?
                </AccordionTrigger>
                <AccordionContent>
                  To prepare your home for sale, we recommend decluttering, deep
                  cleaning, making necessary repairs, and considering
                  professional staging. Our team can provide a detailed
                  checklist and even connect you with trusted professionals to
                  help get your property ready for the market.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How do you determine the right price for my property?
                </AccordionTrigger>
                <AccordionContent>
                  We use a combination of comparative market analysis, current
                  market trends, and our extensive local knowledge to determine
                  the optimal price for your property. We'll provide you with a
                  detailed report explaining our pricing strategy to ensure you
                  get the best value for your home.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  What fees are involved in selling a house?
                </AccordionTrigger>
                <AccordionContent>
                  The main fee in selling a house is typically the real estate
                  commission, which is usually split between the buyer's and
                  seller's agents. Other potential costs may include closing
                  costs, transfer taxes, and any agreed-upon repairs or credits
                  to the buyer. We'll provide a clear breakdown of all potential
                  fees during our initial consultation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What Our Sellers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "John D.",
                  text: "DreamHome Realty sold my house in just two weeks! Their marketing strategy and negotiation skills are top-notch.",
                },
                {
                  name: "Sarah M.",
                  text: "I was impressed by how smooth the entire selling process was. The team at DreamHome Realty took care of everything.",
                },
                {
                  name: "Robert L.",
                  text: "Thanks to DreamHome Realty, I got more for my house than I expected. Their market knowledge is unparalleled.",
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
                Ready to Sell Your Property?
              </h2>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <Input type="text" placeholder="Your Name" required />
                    <Input type="email" placeholder="Your Email" required />
                    <Input type="tel" placeholder="Your Phone" required />
                    <Input
                      type="text"
                      placeholder="Property Address"
                      required
                    />
                    <Textarea
                      placeholder="Tell us more about your property and your selling goals"
                      required
                    />
                    <Button type="submit" size="lg" className="w-full">
                      Request a Consultation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">DreamHome Realty</h3>
              <p className="text-sm text-gray-400">
                Your trusted partner in real estate transactions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/buy"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Buy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rent"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Rent
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sell"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Sell
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" /> 123 Real Estate Street,
                  Cityville, State 12345
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" /> (123) 456-7890
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" /> info@dreamhome.com
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            © 2023 DreamHome Realty. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
