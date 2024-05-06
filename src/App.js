import React, { useState } from 'react';
import RegistrationPage from './RegistrationPage';
import ThankYouPage from './ThankYouPage';

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <div className="app-container">
      {!formSubmitted ? (
        <RegistrationPage onFormSubmit={handleFormSubmit} />
      ) : (
        <ThankYouPage />
      )}
    </div>
  );
}

export default App;


