import React, { useState } from 'react';
import Link from 'next/link';
import { initAuth } from '@/firebase/firebaseApp'
import { signInWithPopup, GoogleAuthProvider, sendSignInLinkToEmail } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';

export default function SignupButton() {

    const [currentPage, setCurrentPage] = useState<string>("Home");

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

    if(loadingUser){
        return(
            <div >
                Loading...
            </div>
        );  
    }
    
    if(user){
        return(
            <button onClick={() => auth.signOut()} className='bg-purple-600 hover:bg-purple-700 transition-colors duration-300 text-white font-semibold py-2 px-4 rounded-md'>
                <Link href='/signin'>Sign Out</Link>
            </button>
        );
    }
    
    if(!user){
        router.push('/');
        return(
            <button onClick={signIn} className='bg-purple-600 hover:bg-purple-700 transition-colors duration-300 text-white font-semibold py-2 px-4 rounded-md'>
                Sign Up/Sign In
            </button>
        );  
       
    }
    return null;
}