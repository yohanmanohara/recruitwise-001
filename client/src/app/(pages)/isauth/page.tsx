"use client"
import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from Next.js

export default function Isauth() {
  const router = useRouter();

  const navigateToOverview = () => {
    router.push('/employer/overview'); // Navigate to the employee overview page
  };

  const navigate = () => {
    router.push('/employee/hiring'); // Navigate to the employer page
  }

  return (
    <div className='h-screen w-full flex justify-center items-center bg-black text-white gap-4'>
      <button
        className='bg-red-600 p-8 rounded-xl'
        onClick={navigateToOverview} // Call navigateToOverview function on button click
      >
        Employer
      </button>
      <button className='bg-orange-400 p-8 rounded-xl' onClick={navigate}>
        Employee
      </button>
    </div>
  );
}
