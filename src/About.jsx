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
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About MediHope</h1>
          <p className="text-gray-300 text-lg">
            MediHope connects compassionate donors with underprivileged communities, enabling safe and
            transparent donations of essential resources and medicines.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, idx) => (
            <Card key={idx} className="bg-gray-800 border border-gray-700" hover>
              <CardHeader>
                <CardTitle className="text-white">{v.title}</CardTitle>
                <CardDescription className="text-gray-300">{v.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title="Our Journey" subtitle="Milestones that reflect our commitment" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {milestones.map((m, i) => (
            <Card key={i} className="text-center bg-gray-800 border border-gray-700">
              <CardContent>
                <div className="text-3xl font-bold gradient-text mb-1">{m.value}</div>
                <div className="text-gray-300">{m.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Card className="bg-gray-800 border border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Our Mission</CardTitle>
            <CardDescription className="text-gray-300">
              To bridge the gap between abundance and need—making it simple for anyone to contribute to
              life-saving support through transparent, responsible, and human-centered technology.
            </CardDescription>
          </CardHeader>
        </Card>
      </Section>
    </Layout>
  );
}

