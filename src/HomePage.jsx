import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaHandsHelping, FaPills, FaUserPlus, FaChartLine, FaShieldAlt } from "react-icons/fa";
import { Layout } from "./components/Layout";
import { Section, SectionHeader } from "./components/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/Card";
import { Button } from "./components/Button";

export default function HomePage() {
  const features = [
    {
      title: "Needy Registration",
      description: "AI-powered Aadhaar verification for quick and secure registration of underprivileged individuals.",
      icon: <FaHeart className="w-8 h-8 text-success-500" />,
      href: "/needy/register"
    },
    {
      title: "Become a Donor", 
      description: "Join our community of compassionate donors and make a meaningful impact in someone's life.",
      icon: <FaHandsHelping className="w-8 h-8 text-primary-500" />,
      href: "/donor/signup"
    },
    {
      title: "Medicine Donations",
      description: "Donate unused medicines safely and track their journey to those who need them most.",
      icon: <FaPills className="w-8 h-8 text-secondary-500" />,
      href: "/donate/medicine"
    }
  ];

  const stats = [
    { number: "1,200+", label: "People Helped" },
    { number: "850+", label: "Active Donors" },
    { number: "5,700+", label: "Medicines Donated" },
    { number: "24", label: "Cities Covered" }
  ];

  const benefits = [
    {
      title: "Secure & Verified",
      description: "All users are verified through our secure Aadhaar-based system",
      icon: <FaShieldAlt className="w-6 h-6 text-primary-500" />
    },
    {
      title: "Real-time Tracking",
      description: "Track your donations and see their impact in real-time",
      icon: <FaChartLine className="w-6 h-6 text-success-500" />
    },
    {
      title: "Easy Registration", 
      description: "Simple, fast registration process for both donors and recipients",
      icon: <FaUserPlus className="w-6 h-6 text-secondary-500" />
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Section className="pt-8 md:pt-12 pb-16 md:pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Bridging <span className="gradient-text">Hope</span> to Those in Need
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            A compassionate platform connecting donors with underprivileged communities to provide essential resources and medicines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/signup">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="bg-gray-800/50">
        <SectionHeader 
          title="How MediHope Works"
          subtitle="Simple steps to make a meaningful difference in your community"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} hover className="group h-full">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-6">{feature.description}</CardDescription>
                <Link to={feature.href}>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section>
        <SectionHeader 
          title="Our Impact"
          subtitle="See the difference we're making together"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <Card className="p-6">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-300 font-medium">
                  {stat.label}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-gradient-to-br from-primary-900/10 to-secondary-900/10">
        <SectionHeader 
          title="Why Choose MediHope?"
          subtitle="Built with trust, transparency, and impact in mind"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-4 shadow-soft">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="text-center bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of compassionate individuals who are already making an impact in their communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/needy/register">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary-600">
                I Need Help
              </Button>
            </Link>
            <Link to="/donor/signup">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary-600">
                I Want to Help
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
