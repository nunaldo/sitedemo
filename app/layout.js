import './globals.css'

export const metadata = {
  title: 'Experimental Urban Infrastructure',
  description: 'Engineering. Energy. Data. Public Space.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
