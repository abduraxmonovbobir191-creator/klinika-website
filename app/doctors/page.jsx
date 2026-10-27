export default function DoctorsPage() {
  const doctors = [
    { name: 'Dr. Aliyeva Nodira', specialty: 'Terapevt', exp: '12 yil' },
    { name: 'Dr. Karimov Jasur', specialty: 'Kardiolog', exp: '8 yil' },
    { name: 'Dr. Rahimova Malika', specialty: 'Pediatr', exp: '10 yil' },
  ];

  return (
    <main style={{ fontFamily: 'Inter, sans-serif', background: '#F8FAFC', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>Shifokorlar</h1>
        <p style={{ color: '#666', marginBottom: 32 }}>Gavxar Clinic mutaxassislari</p>

        <div style={{ display: 'grid', gap: 16 }}>
          {doctors.map((d, i) => (
            <div key={i} style={{ background: 'white', padding: 24, borderRadius: 20, boxShadow: '0 4px 20px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: '#4A90E220', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A90E2', fontWeight: 600 }}>
                Dr
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 18 }}>{d.name}</div>
                <div style={{ color: '#666' }}>{d.specialty} • {d.exp}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
