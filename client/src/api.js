
// Fetch all events
export const fetchEvents = async () => {
  const res = await fetch('/events');
  return res.json();
};

// Create a new event
export const createEvent = async (event) => {
  const res = await fetch('/api/events', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event),
  });
  return res.json();
};

// Fetch all users
export const fetchUsers = async () => {
  const res = await fetch('/api/users');
  return res.json();
};
