import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ fontFamily: 'Inter, sans-serif', background: '#F8FAFC', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
          <div>
            <h1 style={{ fontSize: 48, fontWeight: 700, color: '#1A1A1A', margin: '0 0 8px' }}>
              Gavxar Clinic
            </h1>
            <p style={{ fontSize: 20, color: '#666', margin: 0 }}>
              Sog'ligingiz bizning g'amxo'rligimizda
            </p>
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            <Link href="/doctors" style={{ padding: '12px 24px', background: 'white', borderRadius: 12, textDecoration: 'none', color: '#1A1A1A', fontWeight: 500 }}>
              Shifokorlar
            </Link>
            <Link href="/appointment" style={{ padding: '12px 24px', background: '#4A90E2', color: 'white', borderRadius: 12, textDecoration: 'none', fontWeight: 500 }}>
              Navbat olish
            </Link>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          <Link href="/appointment" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ background: 'white', padding: 32, borderRadius: 20, boxShadow: '0 4px 20px rgba(0,0,0,0.04)', cursor: 'pointer' }}>
              <h3 style={{ margin: '0 0 12px' }}>Onlayn navbat</h3>
              <p style={{ color: '#666', margin: 0 }}>Qulay va tez navbat oling</p>
            </div>
          </Link>
          <Link href="/doctors" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ background: 'white', padding: 32, borderRadius: 20, boxShadow: '0 4px 20px rgba(0,0,0,0.04)', cursor: 'pointer' }}>
              <h3 style={{ margin: '0 0 12px' }}>Malakali shifokorlar</h3>
              <p style={{ color: '#666', margin: 0 }}>Tajribali mutaxassislar</p>
            </div>
          </Link>
          <div style={{ background: 'white', padding: 32, borderRadius: 20, boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
            <h3 style={{ margin: '0 0 12px' }}>Zamonaviy xizmatlar</h3>
            <p style={{ color: '#666', margin: 0 }}>Yuqori sifatli tibbiy yordam</p>
          </div>
        </div>
      </div>
    </main>
  );
}
