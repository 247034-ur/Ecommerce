"use client";
import { useState } from 'react';

export default function SignUpPage() {
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '', terms: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.terms) {
      alert("Please agree to the terms and conditions policy rules before proceeding.");
      return;
    }
    alert(`Account registration submitted for: ${formData.fullName}`);
    window.location.href = '/login';
  };

  return (
    <div style={{ backgroundColor: '#f7fafc', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', padding: '20px' }}>
      <div style={{ backgroundColor: '#ffffff', border: '1px solid #e3e8ee', borderRadius: '6px', padding: '40px', width: '100%', maxWidth: '440px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.03)' }}>
        
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1c1c1c', margin: '0 0 8px 0', textAlign: 'center' }}>Create Account</h2>
        <p style={{ color: '#8b96a5', fontSize: '14px', textAlign: 'center', margin: '0 0 24px 0' }}>Join thousands of verified international suppliers</p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', color: '#505050', marginBottom: '6px', fontWeight: '500' }}>Full Name</label>
            <input 
              type="text" name="fullName" required placeholder="John Doe" 
              value={formData.fullName} onChange={handleChange}
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #e3e8ee', borderRadius: '5px', fontSize: '15px', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', color: '#505050', marginBottom: '6px', fontWeight: '500' }}>Email Address</label>
            <input 
              type="email"  name="email" required  placeholder="name@company.com" 
              value={formData.email} onChange={handleChange}
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #e3e8ee', borderRadius: '5px', fontSize: '15px', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', color: '#505050', marginBottom: '6px', fontWeight: '500' }}>Password</label>
            <input 
              type="password"  name="password" required
              placeholder="Minimum 6 characters"  value={formData.password}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #e3e8ee', borderRadius: '5px', fontSize: '15px', boxSizing: 'border-box' }}
            />
          </div>

          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#505050', cursor: 'pointer', marginTop: '4px', lineHeight: '1.4' }}>
            <input 
              type="checkbox"  name="terms"
              checked={formData.terms} onChange={handleChange}
              style={{ width: '18px', height: '18px', accentColor: '#0d6efd', marginTop: '2px', flexShrink: 0 }} 
            />
            <span>I agree with the user <a href="#" style={{ color: '#0d6efd', textDecoration: 'none' }}>Terms &amp; User Policy Condition Agreements</a>.</span>
          </label>

          <button type="submit" style={{ width: '100%', backgroundColor: '#0d6efd', color: '#ffffff', border: 'none', padding: '12px', borderRadius: '5px', fontSize: '16px', fontWeight: '500', cursor: 'pointer', marginTop: '8px' }}>
            Register Now
          </button>
        </form>

        <div style={{ borderTop: '1px solid #e3e8ee', marginTop: '24px', paddingTop: '20px', textAlign: 'center', fontSize: '14px', color: '#505050' }}>
          Already have an account? <a href="/login" style={{ color: '#0d6efd', textDecoration: 'none', fontWeight: '500' }}>Log in</a>
        </div>

      </div>
    </div>
  );
}