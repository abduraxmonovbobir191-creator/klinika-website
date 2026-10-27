'use client';

import { useState } from 'react';

export default function AppointmentPage() {
  const [doctor, setDoctor] = useState('');
  const [time, setTime] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const doctors = ['Dr. Aliyeva Nodira', 'Dr. Karimov Jasur', 'Dr. Rahimova Malika'];
  const times = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main style={{ fontFamily: 'Inter, sans-serif', background: '#F8FAFC', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: 600, margin: '0 auto', background: 'white', padding: 32, borderRadius: 20, boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>Navbat olish</h1>
        <p style={{ color: '#666', marginBottom: 24 }}>Gavxar Clinic</p>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: 40 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
            <h2>So'rov yuborildi!</h2>
            <p style={{ color: '#666' }}>Tez orada siz bilan bog'lanamiz.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Shifokor</label>
              <select value={doctor} onChange={(e) => setDoctor(e.target.value)} required style={{ width: '100%', padding: 14, borderRadius: 12, border: '1px solid #e5e7eb' }}>
                <option value="">Tanlang</option>
                {doctors.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Vaqt</label>
              <select value={time} onChange={(e) => setTime(e.target.value)} required style={{ width: '100%', padding: 14, borderRadius: 12, border: '1px solid #e5e7eb' }}>
                <option value="">Tanlang</option>
                {times.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <button type="submit" style={{ width: '100%', padding: 16, background: '#4A90E2', color: 'white', border: 'none', borderRadius: 12, fontSize: 16, fontWeight: 600, cursor: 'pointer' }}>
              Navbatni tasdiqlash
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
