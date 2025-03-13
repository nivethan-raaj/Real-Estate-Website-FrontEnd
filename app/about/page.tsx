import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Users, Target, Award, Star } from "lucide-react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-3">
        <Header />
      </div>
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">About Project Sample</h1>
            <p className="text-xl mb-8">
              Your Trusted Partner in Finding the Perfect Home
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8">
                At Project Sample, our mission is to help individuals and
                families find their perfect home. We believe that everyone
                deserves a place they can truly call their own, and we're
                committed to making that dream a reality through exceptional
                service, market expertise, and a personalized approach to real
                estate.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                  <p className="text-gray-600">
                    Our team of experienced professionals is dedicated to
                    providing you with the best service in the industry.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    Tailored Approach
                  </h3>
                  <p className="text-gray-600">
                    We understand that every client is unique, and we tailor our
                    services to meet your specific needs and preferences.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                  <p className="text-gray-600">
                    Our track record speaks for itself, with countless satisfied
                    clients and successful transactions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "John Doe", role: "Founder & CEO" },
                { name: "Jane Smith", role: "Senior Real Estate Agent" },
                { name: "Mike Johnson", role: "Property Specialist" },
                { name: "Sarah Brown", role: "Client Relations Manager" },
              ].map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <img
                      src={`/placeholder.svg?height=150&width=150`}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-600">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Emily R.",
                  text: "DreamHome Realty made finding our first home a breeze. Their expertise and patience were invaluable throughout the process.",
                },
                {
                  name: "David M.",
                  text: "I've worked with many realtors, but the team at DreamHome Realty truly stands out. Their market knowledge is unparalleled.",
                },
                {
                  name: "Lisa T.",
                  text: "Selling our home was stress-free thanks to DreamHome Realty. They handled everything professionally and got us a great price.",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <Star className="h-8 w-8 text-yellow-400 mb-4" />
                    <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-xl mb-8">
              Let us guide you through the process and find the perfect property
              for you.
            </p>
            <Button size="lg" variant="secondary">
              Contact Us Today
            </Button>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
