

import { useSession, signIn } from 'next-auth/react';

export default function ScheduleMeeting() {
  const { data: session } = useSession();

  const handleScheduleMeeting = async () => {
    const response = await fetch('/api/create-meeting', {
      method: 'POST',
    });

    const data = await response.json();
    if (data.event) {
      alert(`Meeting scheduled: ${data.event.htmlLink}`);
    } else {
      alert('Failed to schedule meeting');
    }
  };

  if (!session) {
    return <button onClick={() => signIn()}>Sign in with Google</button>;
  }

  return (
    <div>
      <h1>Schedule a Google Meet Meeting</h1>
      <button onClick={handleScheduleMeeting}>Schedule Meeting</button>
    </div>
  );
}
