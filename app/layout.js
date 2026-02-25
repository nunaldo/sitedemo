import './globals.css'

export const metadata = {
  title: 'UM NOME FIXE E INOVADOR',
  description: 'Engineering. Energy. Data. Art.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
