import React, { useState } from "react";
import { Layout } from "./components/Layout";
import { Section } from "./components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "./components/Card";
import { Button } from "./components/Button";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-primary-500" />,
      title: "Email",
      value: "hello@HopeBridge.org",
    },
    {
      icon: <FaPhone className="text-green-500" />,
      title: "Phone",
      value: "+91 9874561230",
    },
    {
      icon: <FaMapMarkerAlt className="text-red-500" />,
      title: "Address",
      value: "Chandigarh, India",
    },
  ];

  return (
    <Layout>
      <Section className="pt-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Contact Us</h1>
          <p className="text-gray-300 text-lg">
            Have questions, suggestions, or want to get involved? We'd love to hear from you!
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-xl bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-xl bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-xl bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 rounded-xl bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                    placeholder="Tell us how we can help or what's on your mind..."
                  />
                </div>
                
                <Button type="submit" variant="gradient" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gray-800 border border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{info.title}</h4>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
              <CardContent>
                <h3 className="text-lg font-semibold mb-2">Ready to Make a Difference?</h3>
                <p className="mb-4 opacity-90">
                  Join our community of compassionate individuals working together to help those in need.
                </p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
