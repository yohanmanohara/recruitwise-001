// pages/create-meet.tsx
"use client"
import { NextPage } from 'next';
import CreateEvent from '@/components/CreateEvent';
import { useSession } from 'next-auth/react';

const CreateMeet: NextPage = () => {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Create a Google Meet Event</h1>
            <CreateEvent />
        </div>
    );
};

export default CreateMeet;
