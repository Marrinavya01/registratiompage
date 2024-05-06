import React, { useState } from 'react';
import './RegistrationPage.css'; // Import CSS file for styles
import ThankYouPage from './ThankYouPage';
function RegistrationPage() {
  // State variables to store form input values
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [country, setCountry] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [interests, setInterests] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false); // Define formSubmitted state

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your logic to submit the form data
    console.log('Form submitted:', {
      firstName,
      lastName,
      email,
      password,
      gender,
      address,
      phoneNumber,
      agreeTerms,
      country,
      birthDate,
      interests,
    });
    // Reset form fields after submission
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setGender('');
    setAddress('');
    setPhoneNumber('');
    setAgreeTerms(false);
    setCountry('');
    setBirthDate('');
    setInterests([]);
    setFormSubmitted(true);
  };

  // Function to handle interests selection
  const handleInterestChange = (e) => {
    const value = e.target.value;
    if (interests.includes(value)) {
      setInterests(interests.filter((interest) => interest !== value));
    } else {
      setInterests([...interests, value]);
    }
  };
  if (formSubmitted) {
    return <ThankYouPage />;
  }

  return (
    <div className="registration-container">
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit} className="registration-form">
      <div className="input-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Gender:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
              />{' '}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
              />{' '}
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={gender === 'other'}
                onChange={(e) => setGender(e.target.value)}
              />{' '}
              Other
            </label>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="country">Country:</label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          >
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
            {/* Add more countries as needed */}
          </select>
        </div>
        {/* Date of Birth field */}
        <div className="input-group">
          <label htmlFor="birthDate">Date of Birth:</label>
          <input
            type="date"
            id="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </div>
        {/* Interests selection */}
        <div className="input-group">
          <label>Interests:</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                value="sports"
                checked={interests.includes('sports')}
                onChange={handleInterestChange}
              />
              Sports
            </label>
            <label>
              <input
                type="checkbox"
                value="music"
                checked={interests.includes('music')}
                onChange={handleInterestChange}
              />
              Music
            </label>
            <label>
              <input
                type="checkbox"
                value="technology"
                checked={interests.includes('technology')}
                onChange={handleInterestChange}
              />
              Technology
            </label>
            <label>
              <input
                type="checkbox"
                value="cooking"
                checked={interests.includes('cooking')}
                onChange={handleInterestChange}
              />
              Cooking
            </label>
            {/* Add more interests as needed */}
        </div>
        </div>
        <div className="input-group">
          <label>
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />{' '}
            I agree to the terms and conditions
          </label>
        </div>
        <button type="submit" disabled={!agreeTerms}>
          Register
        </button>

      </form>
    </div>
  );
}

export default RegistrationPage;
