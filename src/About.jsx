import React from "react";
import { Layout } from "./components/Layout";
import { Section, SectionHeader } from "./components/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/Card";

export default function About() {
  const values = [
    {
      title: "Compassion",
      description: "We believe every act of kindness creates ripples of positive change.",
    },
    {
      title: "Transparency",
      description: "Clear, honest processes that build trust for donors and recipients.",
    },
    {
      title: "Impact",
      description: "A relentless focus on meaningful, measurable outcomes for communities.",
    },
  ];

  const milestones = [
    { label: "Founded", value: "2025" },
    { label: "People Helped", value: "1,200+" },
    { label: "Active Donors", value: "850+" },
    { label: "Cities", value: "24" },
  ];

  return (
    <Layout>
      <Section className="pt-12">
        <div className="relative overflow-hidden">
          <div className="gradient-blob" aria-hidden="true"></div>
          <div className="text-center max-w-3xl mx-auto relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4 leading-normal fade-in">About HopeBridge</h1>
            <p className="text-gray-300 text-lg mb-6 fade-in">
              HopeBridge connects compassionate donors with underprivileged communities, enabling safe and
              transparent donations of essential resources and medicines. We combine human empathy with
              dependable technology to make giving simple and impactful.
            </p>
            <div className="flex items-center justify-center gap-3">
              <a href="/signup" className="btn-primary inline-flex items-center gap-2">
                <span>Join as a Donor</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="/contact" className="text-sm text-gray-300 underline opacity-90">Contact us</a>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, idx) => (
            <div key={idx} className="feature-card bg-gray-800 text-white p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">{idx === 0 ? '🫶' : idx === 1 ? '🔍' : '🎯'}</div>
                <div>
                  <div className="font-semibold text-lg">{v.title}</div>
                  <div className="text-gray-300 mt-2">{v.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title="Our Journey" subtitle="Milestones that reflect our commitment" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {milestones.map((m, i) => (
            <div key={i} className="milestone-tile text-center">
              <div className="text-2xl text-gray-100 mb-1 font-semibold gradient-text">{m.value}</div>
              <div className="text-gray-300 text-sm">{m.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Card className="bg-gray-800 border border-gray-700 p-6 md:p-8">
          <CardHeader>
            <CardTitle className="text-white">Our Mission</CardTitle>
            <CardDescription className="text-gray-300 mb-4">
              To bridge the gap between abundance and need—making it simple for anyone to contribute to
              life-saving support through transparent, responsible, and human-centered technology.
            </CardDescription>
            <div className="flex items-center gap-4">
              <a href="/signup" className="btn-primary inline-flex items-center gap-2">Become a Supporter</a>
              <a href="/donor" className="text-sm text-gray-300 underline">See donor stories</a>
            </div>
          </CardHeader>
        </Card>
      </Section>
    </Layout>
  );
}

