import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import {
  Building,
  Building2,
  Users,
  Briefcase,
  Star,
  CheckCircle,
  ArrowRight,
  MapPin,
  DollarSign,
  Clock,
  Home,
} from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="p-3">
        <Header />
      </div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 z-0" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="outline">
              Property Management Simplified
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Manage Properties With Confidence
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our all-in-one platform streamlines property management, enhances tenant experiences, and maximizes your
              investment returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Book a Demo <Clock className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-sm text-muted-foreground">Properties Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15,000+</div>
              <div className="text-sm text-muted-foreground">Happy Tenants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+ Years</div>
              <div className="text-sm text-muted-foreground">Industry Experience</div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Property Management Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform offers everything you need to manage properties efficiently and grow your portfolio.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Property Listings</CardTitle>
                <CardDescription>Showcase your properties with detailed listings</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Virtual tours and floor plans</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Automated vacancy advertising</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Detailed property analytics</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="gap-2 text-primary">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Financial Management</CardTitle>
                <CardDescription>Streamline rent collection and expenses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Automated rent collection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Expense tracking and reporting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Financial performance insights</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="gap-2 text-primary">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Tenant Management</CardTitle>
                <CardDescription>Simplify tenant communications and services</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Tenant portal and mobile app</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Maintenance request tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Automated communications</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="gap-2 text-primary">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      {/* Property Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Property Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through our diverse portfolio of properties across different categories
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/80 to-primary/40 h-40 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute inset-0 flex items-center justify-center">
                <Home className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold text-center">Residential</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-secondary/80 to-secondary/40 h-40 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute inset-0 flex items-center justify-center">
                <Building2 className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold text-center">Commercial</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/80 to-secondary/40 h-40 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute inset-0 flex items-center justify-center">
                <Briefcase className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold text-center">Office Space</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-secondary/80 to-primary/40 h-40 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute inset-0 flex items-center justify-center">
                <Building className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold text-center">Industrial</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Properties */}
      <section className="py-20">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Properties</h2>
            <Button variant="outline" className="gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Downtown Apartment",
                location: "Downtown, Metro City",
                price: "$2,500/month",
                type: "Residential",
                features: ["2 Beds", "2 Baths", "1,200 sqft"],
                status: "For Rent",
              },
              {
                title: "Luxury Office Space",
                location: "Business District, Metro City",
                price: "$4,200/month",
                type: "Commercial",
                features: ["Open Floor", "5 Rooms", "2,500 sqft"],
                status: "For Lease",
              },
              {
                title: "Suburban Family Home",
                location: "Greenview, Metro City",
                price: "$450,000",
                type: "Residential",
                features: ["4 Beds", "3 Baths", "2,800 sqft"],
                status: "For Sale",
              },
            ].map((property, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-muted/80 to-muted flex items-center justify-center">
                  <Building2 className="h-16 w-16 text-muted-foreground/40" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge
                        className="mb-2"
                        variant={
                          property.status === "For Rent"
                            ? "default"
                            : property.status === "For Sale"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {property.status}
                      </Badge>
                      <CardTitle className="text-xl">{property.title}</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <MapPin className="h-4 w-4 mr-1" /> {property.location}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">{property.price}</div>
                      <div className="text-xs text-muted-foreground">{property.type}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between">
                    {property.features.map((feature, i) => (
                      <div key={i} className="text-sm text-muted-foreground">
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/20 flex justify-between">
                  <Button variant="ghost" size="sm">
                    Details
                  </Button>
                  <Button size="sm">Schedule Viewing</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from property owners and tenants who have experienced our platform
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "This platform has completely transformed how I manage my rental properties. The automated rent collection alone has saved me countless hours.",
                author: "Michael Johnson",
                role: "Property Owner",
                rating: 5,
              },
              {
                quote:
                  "As a tenant, I love how easy it is to submit maintenance requests and communicate with property management. The mobile app is intuitive and responsive.",
                author: "Sarah Williams",
                role: "Tenant",
                rating: 5,
              },
              {
                quote:
                  "We've been able to scale our property management business significantly since implementing this platform. The comprehensive reporting features are invaluable.",
                author: "David Chen",
                role: "Property Manager",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <CardTitle className="text-lg font-medium">{testimonial.author}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-0" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Simplify Your Property Management?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of property owners who have streamlined their operations and increased profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Get Started Today <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Schedule a Demo <Clock className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  )
}

