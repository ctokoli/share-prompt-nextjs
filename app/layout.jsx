import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';


export const metadata = {
  title: 'Prompt Share',
  description: 'Discover and share AI prompts'
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>
        <Nav />
        <main className='app'>{children}</main>
      </body>
    </html>
  )
}
