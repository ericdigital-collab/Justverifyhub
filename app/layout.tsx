export const metadata = {
  title: 'TopVerified',
  description: 'Instant Delivery & 24/7 Support',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

