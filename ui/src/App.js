import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch('/')
      .then(res => res.json())
      .then(data => setMessage(data.message));

    fetch('/api/health')
      .then(res => res.json())
      .then(data => setStatus(data.status));
  }, []);

  return (
    <div>
      <h1>Frontend UI</h1>
      <p>Message: {message}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default App;