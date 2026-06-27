"use client";
import { useState } from 'react';

export default function ShippingDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    name: "United States",
    code: "US",
    flag: "https://flagcdn.com/w40/us.png"
  });

  const countries = [
    { name: "United States", code: "US", flag: "https://flagcdn.com/w40/us.png" },
    { name: "Arabic Emirates", code: "AE", flag: "https://flagcdn.com/w40/ae.png" },
    { name: "Australia", code: "AU", flag: "https://flagcdn.com/w40/au.png" },
    { name: "Russia", code: "RU", flag: "https://flagcdn.com/w40/ru.png" },
    { name: "Italy", code: "IT", flag: "https://flagcdn.com/w40/it.png" },
    { name: "Pakistan", code: "PK", flag: "https://flagcdn.com/w40/pk.png" },
    { name: "Denmark", code: "DK", flag: "https://flagcdn.com/w40/dk.png" },
    { name: "France", code: "FR", flag: "https://flagcdn.com/w40/fr.png" },
    { name: "China", code: "CN", flag: "https://flagcdn.com/w40/cn.png" },
    { name: "Great Britain", code: "GB", flag: "https://flagcdn.com/w40/gb.png" },
  ];

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Target trigger button setup */}
      <button 
        type="button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer', display: 'flex',
          alignItems: 'center', gap: '8px', padding: '6px 10px', fontSize: '14px',
          color: '#1c1c1c', fontFamily: 'inherit'
        }}
      >
        <span>Ship to</span>
        {/* Dynamic Image Wrapper Container */}
        <div style={{
          width: '24px', height: '16px', borderRadius: '2px',
          overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <img 
            src={selectedCountry.flag}  alt={selectedCountry.name} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>
        <span style={{ fontSize: '9px', color: '#8b96a5' }}>▼</span>
      </button>

      {/* Floating interactive dropdown menu container */}
      {dropdownOpen && (
        <ul style={{
          position: 'absolute', top: '100%', right: 0, marginTop: '6px',
          backgroundColor: '#ffffff', border: '1px solid #e3e8ee',
          borderRadius: '6px', boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
          listStyle: 'none', padding: '6px 0',
          width: '200px', zIndex: 99999, margin: 0
        }}>
          {countries.map((country) => (
            <li key={country.code} style={{ width: '100%' }}>
              <button 
                type="button"
                onClick={() => handleSelectCountry(country)}
                style={{
                  width: '100%', background: 'none', border: 'none',
                  textAlign: 'left', padding: '8px 14px', display: 'flex',
                  alignItems: 'center', gap: '10px', cursor: 'pointer',
                  fontSize: '14px', color: '#1c1c1c', fontFamily: 'inherit'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f7ff'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <div style={{
                  width: '22px', height: '15px', borderRadius: '2px',
                  overflow: 'hidden', boxShadow: '0 1px 2px rgba(0,0,0,0.15)', 
                  display: 'flex', alignItems: 'center'
                }}>
                  <img 
                    src={country.flag}  alt="" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                <span>{country.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}