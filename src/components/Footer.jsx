import React, { useState } from 'react';
import { HeartHandshake } from 'lucide-react';

const Footer = () => {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSubmitted(true);
  };

  return (
    <footer className="bg-blue-950 text-blue-100 border-t border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white font-bold">KRISHNA GARI BATTALA KOTTU</h4>
          <p className="text-sm mt-2 text-blue-300">Luxurious. Exclusive. Handpicked.</p>
          <p className="text-xs mt-4 text-blue-300">No Return Policy: Due to the exclusive nature of our curation, all sales are final.</p>
        </div>
        <div>
          <h5 className="text-white font-semibold">Policies</h5>
          <ul className="text-sm mt-2 space-y-1">
            <li>Shipping & Delivery</li>
            <li>No Return</li>
            <li>Privacy & Security</li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-semibold flex items-center gap-2"><HeartHandshake className="text-yellow-400"/> Feedback</h5>
          {submitted ? (
            <p className="text-sm mt-2 text-green-300">Thank you for your feedback!</p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-2">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your experience with us"
                className="w-full bg-blue-900/40 border border-blue-800 rounded-md p-2 text-sm placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                rows={3}
              />
              <button type="submit" className="mt-2 bg-yellow-400 text-blue-950 font-semibold px-4 py-2 rounded-md">Submit</button>
            </form>
          )}
        </div>
      </div>
      <div className="text-center text-xs py-4 bg-blue-950/80 border-t border-blue-900">© {new Date().getFullYear()} Krishna Gari Battala Kottu. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
