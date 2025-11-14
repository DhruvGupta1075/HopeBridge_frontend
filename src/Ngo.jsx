import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Section, SectionHeader } from './components/Section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './components/Card';
import { Button } from './components/Button';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function Ngo() {
  const navigate = useNavigate();
  const query = useQuery();
  const target = query.get('target'); // 'donor' or 'needy' or null
  const [ngoName, setNgoName] = useState('');
  const [code, setCode] = useState('');

  function handleProceed() {
    // For now do a simple client-side check; in a real app you'd verify on backend
    if (!ngoName) {
      alert('Please enter your NGO name to proceed');
      return;
    }
    if (target === 'donor') navigate('/donor/signup');
    else if (target === 'needy') navigate('/needy/register');
    else navigate('/signup');
  }
  return (
    <>
      <Section className="pt-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">NGO — Connect, Coordinate, Care</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
            NGOs play a crucial role connecting donors with people in need. Use this portal to coordinate donations,
            verify recipients and distribute resources efficiently.
          </p>
          <div className="flex items-center justify-center gap-3 mb-6">
            {target ? (
              <div className="w-full max-w-md mx-auto">
                <p className="text-sm text-gray-300 mb-3">Please provide your NGO details to proceed to the requested flow.</p>
                <input value={ngoName} onChange={(e)=>setNgoName(e.target.value)} placeholder="NGO name" className="w-full p-3 rounded-md mb-2 bg-gray-800 border border-gray-700 text-white" />
                <input value={code} onChange={(e)=>setCode(e.target.value)} placeholder="Authorization code (optional)" className="w-full p-3 rounded-md mb-3 bg-gray-800 border border-gray-700 text-white" />
                <div className="flex gap-2">
                  <button onClick={handleProceed} className="btn-primary flex-1">Proceed</button>
                  <Link to="/ngo" className="inline-flex items-center px-3 py-2 rounded-md border border-white/10 text-white muted-link">Back</Link>
                </div>
              </div>
            ) : (
              <>
                <Link to="/donor/signup">
                  <Button className="btn-primary">I represent a Donor</Button>
                </Link>
                <Link to="/needy/register">
                  <Button variant="outline">I represent a Needy / Request Help</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader title="How NGOs fit in the flow" subtitle="NGOs sit between donors and needy people to ensure safe, verified aid." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="card-gradient-border">
            <div className="card-inner">
              <CardHeader>
                <CardTitle className="text-white">Verify Recipients</CardTitle>
                <CardDescription className="text-gray-300">Use Aadhaar verification and local checks to ensure help reaches the right people.</CardDescription>
              </CardHeader>
            </div>
          </Card>

          <Card className="card-gradient-border">
            <div className="card-inner">
              <CardHeader>
                <CardTitle className="text-white">Coordinate Donations</CardTitle>
                <CardDescription className="text-gray-300">Manage pickups, inventory and distribution in your region.</CardDescription>
              </CardHeader>
            </div>
          </Card>

          <Card className="card-gradient-border">
            <div className="card-inner">
              <CardHeader>
                <CardTitle className="text-white">Report Impact</CardTitle>
                <CardDescription className="text-gray-300">Share reports with donors to maintain transparency and trust.</CardDescription>
              </CardHeader>
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto text-center mt-8">
          <p className="text-gray-400">Want this NGO dashboard to do more (inventory, assignments, CSV export)? I can wire up endpoints and UI components — tell me which features you want next.</p>
        </div>
      </Section>
    </>
  );
}
