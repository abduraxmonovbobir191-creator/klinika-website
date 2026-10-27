export const metadata = {
  title: 'Gavxar Clinic',
  description: 'Gavxar Clinic - Sog\'ligingiz bizning g\'amxo\'rligimizda',
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
