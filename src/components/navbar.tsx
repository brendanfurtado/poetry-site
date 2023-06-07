import React, { useState } from 'react';
import Link from 'next/link';
import { initAuth } from '@/firebase/firebaseApp';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import SignupButton from './signup';
interface Page {
  name: string;
  path: string;
}

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState<string>('Home');
  const pages: Page[] = [
    { name: 'Poem Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  function handleClick(page: string): void {
    setCurrentPage(page);
  }

  const auth = initAuth();
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  const [user, loadingUser] = useAuthState(auth);

  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="flex justify-between flex-wrap bg-red-200 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold text-purple-500 cursor-pointer">
            LMPM in You.
          </span>
        </Link>
        <ul className="hidden sm:flex items-center space-x-8">
          {pages.map((page) => (
            <li key={page.name}>
              <Link legacyBehavior href={page.path}>
                <a
                  className={`text-lg block py-2 pl-3 pr-4 rounded ${
                    currentPage === page.name
                      ? 'text-white bg-purple-400 md:bg-transparent md:text-purple-400 md:p-0 dark:text-white'
                      : 'text-gray-700 hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-pink-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  }`}
                  onClick={() => handleClick(page.name)}
                >
                  {page.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-4">
          <button className="bg-purple-400 hover:bg-purple-700 transition-colors duration-300 text-white font-semibold py-2 px-4 rounded-md">
            <Link href="/signin">Sign Up/Sign In</Link>
          </button>
        </div>
      </div>
    </nav>
  );
}
