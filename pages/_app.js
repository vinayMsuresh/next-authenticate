import Navbar from '../components/Navbar'
import '../styles/globals.css'
import '../components/Navbar.css';
import { SessionProvider } from 'next-auth/react';
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <Navbar/>
          <Component {...pageProps} />
        </Auth>
      ) : (<>
        <Navbar/>
        <Component {...pageProps} />
      </>
        
      )}
    </SessionProvider>
  )
}

function Auth({ children }) {
  const { data: session, status } = useSession({ required: true })
  const isUser = session?.user

  if (isUser) {
    return children
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>
}
