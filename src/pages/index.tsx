import Image from 'next/image'
import { Inter } from 'next/font/google'
import { initFirebase, initAuth } from '@/firebase/firebaseApp'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const app = initFirebase();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        This is the Home Page
    </main>
  )
}