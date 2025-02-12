import React, { useState } from 'react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter signup logic
    console.log('Signup with email:', email);
    setEmail('');
  };

  return (
    <div className="mt-6 bg-blue-50 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit} className="flex">
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-grow px-4 py-2 border rounded-l-lg"
          required
        />
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup;