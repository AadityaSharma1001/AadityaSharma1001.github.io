import React from 'react';

function Team() {
  return (
    <div style={{ height: '100vh' }}>
      <iframe
        src={`${process.env.PUBLIC_URL}/team.html`}
        title="Team"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
}

export default Team;