export default function Home() {
  return (
    <main style={{ fontFamily: 'Inter, sans-serif', background: '#F8FAFC', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
        <h1 style={{ fontSize: 48, fontWeight: 700, color: '#1A1A1A', marginBottom: 8 }}>
          Gavxar Clinic
        </h1>
        <p style={{ fontSize: 20, color: '#666', marginBottom: 40 }}>
          Sog'ligingiz bizning g'amxo'rligimizda
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          <div style={{ background: 'white', padding: 32, borderRadius: 20, boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
            <h3 style={{ margin: '0 0 12px' }}>Onlayn navbat</h3>
            <p style={{ color: '#666', margin: 0 }}>Qulay va tez navbat oling</p>
          </div>
          <div style={{ background: 'white', padding: 32, borderRadius: 20, boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
            <h3 style={{ margin: '0 0 12px' }}>Malakali shifokorlar</h3>
            <p style={{ color: '#666', margin: 0 }}>Tajribali mutaxassislar</p>
          </div>
          <div style={{ background: 'white', padding: 32, borderRadius: 20, boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
            <h3 style={{ margin: '0 0 12px' }}>Zamonaviy xizmatlar</h3>
            <p style={{ color: '#666', margin: 0 }}>Yuqori sifatli tibbiy yordam</p>
          </div>
        </div>
      </div>
    </main>
  );
}
