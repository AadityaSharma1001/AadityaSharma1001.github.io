import React from 'react';

function InitiativesPage() {
  return (
    <div style={{ height: '100vh' }}>
      <iframe
        src={`${process.env.PUBLIC_URL}/initiatives.html`}
        title="Initiatives"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
}

export default InitiativesPage;