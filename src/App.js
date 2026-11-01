import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <div style={{ backgroundColor: '#0B0F19', color: '#E2E8F0', minHeight: '100vh', fontFamily: '"Segoe UI", Roboto, sans-serif', padding: '20px' }}>
      {/* Top Navbar */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1E293B', paddingBottom: '15px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '12px', height: '12px', backgroundColor: '#10B981', borderRadius: '50%', boxShadow: '0 0 10px #10B981' }}></div>
          <span style={{ fontWeight: 'bold', letterSpacing: '1px', color: '#38BDF8' }}>WORKSPACE // ACTIVE</span>
        </div>
        <div style={{ fontSize: '0.9rem', color: '#94A3B8', border: '1px solid #334155', padding: '5px 12px', borderRadius: '20px', backgroundColor: '#1E293B' }}>
          Available for Hire 🚀
        </div>
      </div>

      {/* Main Container */}
      <div style={{ maxWidth: '1100px', margin: '40px auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '30px' }}>
        
        {/* Left Card: Profile & Identity */}
        <div style={{ backgroundColor: '#111827', border: '1px solid #1E293B', borderRadius: '16px', padding: '30px', height: 'fit-content' }}>
          <div style={{ width: '90px', height: '90px', borderRadius: '50%', backgroundColor: '#38BDF8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 'bold', color: '#0B0F19', margin: '0 auto 20px auto' }}>
            H
          </div>
          <h1 style={{ fontSize: '1.8rem', textAlign: 'center', margin: '0 0 5px 0', color: '#FFF' }}>Hafsa</h1>
          <p style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', color: '#38BDF8', textAlign: 'center', fontWeight: '600', margin: '0 0 25px 0' }}>
            Frontend React Engineer
          </p>

          <div style={{ borderTop: '1px solid #1E293B', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <label style={{ fontSize: '0.75rem', color: '#64748B', display: 'block', textTransform: 'uppercase' }}>Focus</label>
              <span style={{ fontSize: '0.95rem' }}>Highly Scalable Web Apps & UI/UX</span>
            </div>
            <div>
              <label style={{ fontSize: '0.75rem', color: '#64748B', display: 'block', textTransform: 'uppercase' }}>Location</label>
              <span style={{ fontSize: '0.95rem' }}>Pakistan 🇵🇰</span>
            </div>
            <div>
              <label style={{ fontSize: '0.75rem', color: '#64748B', display: 'block', textTransform: 'uppercase' }}>Email</label>
              <span style={{ fontSize: '0.95rem', color: '#38BDF8' }}>your.email@example.com</span>
            </div>
          </div>
        </div>

        {/* Right Card: Interactive Dashboard Display */}
        <div style={{ backgroundColor: '#111827', border: '1px solid #1E293B', borderRadius: '16px', padding: '30px', display: 'flex', flexDirection: 'column' }}>
          
          {/* Tab Selection Navigation */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '25px', borderBottom: '1px solid #1E293B', paddingBottom: '15px' }}>
            <button 
              onClick={() => setActiveTab('skills')} 
              style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', backgroundColor: activeTab === 'skills' ? '#38BDF8' : 'transparent', color: activeTab === 'skills' ? '#0B0F19' : '#94A3B8', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' }}>
              // Tech Stack
            </button>
            <button 
              onClick={() => setActiveTab('projects')} 
              style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', backgroundColor: activeTab === 'projects' ? '#38BDF8' : 'transparent', color: activeTab === 'projects' ? '#0B0F19' : '#94A3B8', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' }}>
              // Live Architecture
            </button>
          </div>

          {/* Dynamic Tab Content rendering */}
          <div style={{ flexGrow: 1 }}>
            {activeTab === 'skills' && (
              <div>
                <h3 style={{ margin: '0 0 15px 0', color: '#FFF' }}>Engineered Capabilities</h3>
                <p style={{ color: '#94A3B8', fontSize: '0.95rem', marginBottom: '25px' }}>I design clean frontend architectures using functional components, state machines, and modern design frameworks.</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  {['React Framework (Hooks, Context)', 'JavaScript ES6+', 'State Management', 'Git Architecture & Pipelines', 'CSS Flexbox / Grid Responsive Design', 'REST API Integration'].map((skill, index) => (
                    <div key={index} style={{ padding: '12px', backgroundColor: '#1E293B', borderRadius: '8px', borderLeft: '4px solid #38BDF8', fontSize: '0.9rem' }}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div>
                <h3 style={{ margin: '0 0 15px 0', color: '#FFF' }}>Production Deployments</h3>
                <div style={{ padding: '20px', backgroundColor: '#0B0F19', border: '1px solid #1E293B', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <h4 style={{ margin: '0', color: '#38BDF8' }}>Automated Dev Dashboard</h4>
                    <span style={{ fontSize: '0.75rem', backgroundColor: '#065F46', color: '#34D399', padding: '3px 8px', borderRadius: '12px' }}>Production Live</span>
                  </div>
                  <p style={{ color: '#94A3B8', fontSize: '0.9rem', margin: '0 0 15px 0' }}>This entire enterprise-styled portfolio website built on React components, showcasing modular component composition and static state control flow.</p>
                  <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Stack: React.js / Advanced Inline CSS / Gh-Pages Automation</div>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
