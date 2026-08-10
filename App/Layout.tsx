import "./globals.css";

export const metadata = {
  title: "Your Marketplace",
  description: "A modern digital marketplace"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
