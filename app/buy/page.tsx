"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Home,
  Search,
  DollarSign,
  Clipboard,
  Key,
  ThumbsUp,
  ArrowRight,
  SlidersHorizontal,
} from "lucide-react";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function BuyPage() {
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-3">
        <Header />
      </div>
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Find Your Dream Home</h1>
            <p className="text-xl mb-8">
              Discover the perfect property that fits your lifestyle and budget
            </p>
            <div className="max-w-3xl mx-auto flex items-center bg-white rounded-lg overflow-hidden shadow-lg">
              <Input
                type="text"
                placeholder="Enter location, property type, or keywords"
                className="flex-grow border-none focus:ring-0"
              />
              <Button size="lg" className="rounded-none">
                <Search className="mr-2 h-4 w-4" /> Search
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              <aside
                className={`w-full md:w-64 space-y-6 ${
                  isSidePanelOpen ? "block" : "hidden md:block"
                }`}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Filters</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Sort by</label>
                      <Select>
                        <SelectTrigger className="w-full mt-2">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="price-asc">
                            Price: Low to High
                          </SelectItem>
                          <SelectItem value="price-desc">
                            Price: High to Low
                          </SelectItem>
                          <SelectItem value="date-desc">Newest</SelectItem>
                          <SelectItem value="date-asc">Oldest</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Price Range</label>
                      <Slider
                        min={0}
                        max={1000000}
                        step={10000}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="mt-2"
                      />
                      <div className="flex justify-between mt-2">
                        <span>${priceRange[0].toLocaleString()}</span>
                        <span>${priceRange[1].toLocaleString()}</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">
                        Property Type
                      </label>
                      <div className="space-y-2 mt-2">
                        {["House", "Apartment", "Condo", "Townhouse"].map(
                          (type) => (
                            <div key={type} className="flex items-center">
                              <Checkbox id={type} />
                              <label htmlFor={type} className="ml-2 text-sm">
                                {type}
                              </label>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Bedrooms</label>
                      <Select>
                        <SelectTrigger className="w-full mt-2">
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="1">1+</SelectItem>
                          <SelectItem value="2">2+</SelectItem>
                          <SelectItem value="3">3+</SelectItem>
                          <SelectItem value="4">4+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Bathrooms</label>
                      <Select>
                        <SelectTrigger className="w-full mt-2">
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="1">1+</SelectItem>
                          <SelectItem value="2">2+</SelectItem>
                          <SelectItem value="3">3+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">
                        More Filters
                      </label>
                      <div className="space-y-2 mt-2">
                        {["Garage", "Pool", "Garden", "Fireplace"].map(
                          (feature) => (
                            <div key={feature} className="flex items-center">
                              <Checkbox id={feature} />
                              <label htmlFor={feature} className="ml-2 text-sm">
                                {feature}
                              </label>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <Button className="w-full">Apply Filters</Button>
                  </CardContent>
                </Card>
              </aside>
              <div className="flex-grow space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">
                    Featured Properties for Sale
                  </h2>
                  <Button
                    variant="outline"
                    className="md:hidden"
                    onClick={toggleSidePanel}
                  >
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </div>
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
                          Beautiful Family Home
                        </h3>
                        <p className="text-gray-600 mb-2">
                          123 Main St, Anytown, USA
                        </p>
                        <div className="flex justify-between text-sm mb-4">
                          <span>3 Beds</span>
                          <span>2 Baths</span>
                          <span>1,500 sqft</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold">$350,000</span>
                          <Button variant="outline">View Details</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Button size="lg">
                    Load More Properties <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Home Buying Journey?
            </h2>
            <p className="text-xl mb-8">
              Our expert agents are here to guide you every step of the way.
            </p>
            <Button size="lg" variant="secondary">
              Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What Our Buyers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah T.",
                  text: "DreamHome Realty made buying my first home a breeze. Their expertise and support were invaluable!",
                },
                {
                  name: "Michael R.",
                  text: "I couldn't be happier with my new home. The team at DreamHome went above and beyond to find the perfect property for me.",
                },
                {
                  name: "Emily L.",
                  text: "The buying process was smooth and stress-free thanks to the professionals at DreamHome Realty. Highly recommended!",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <ThumbsUp className="h-8 w-8 text-primary mb-4" />
                    <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
